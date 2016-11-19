import { Injectable } from '@angular/core';

import { IndexdbService } from './indexdb.service';
import { IndexdbApiserver } from './../model/indexdbApiserver.model';
import { Resource } from './../model/resource.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService {
  private resources: {[key: string]: Resource} = {};
  constructor(private indexdbService: IndexdbService, private http: Http) { }

/**
 * Get ip and token from IndexDB, Then get resources info from kube-apiserver.
 * 
 * 
 * @memberOf ResourceService
 */
  loadResource() {
    let self = this;
    this.indexdbService.getPromiseDataFromApiserver().then(function(indexdbApiservers: IndexdbApiserver[]) {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      for (let apiserver of indexdbApiservers) {
        let body = JSON.stringify({ip:apiserver.ip ,token: apiserver.token});
        self.http.post('/api', body, options)
          .map((res: Response) => res.json())
          .subscribe(data => self.storeResource(data, apiserver.name));
//          .subscribe(data => self.resources[apiserver.name] = data);
      }
    })
  };

  storeResource(resource:any, cluster:string) {
    for (let node of resource['nodes']) {
      node.cluster = cluster;
    }
    for (let pod of resource['pods']) {
      pod.cluster = cluster;
    }
    for (let service of resource['services']) {
      service.cluster = cluster;
    }
    this.resources[cluster] = resource;
  }

  showResource() {
    return this.resources;
  };

  getResource() {
    return this.resources;
  };

/**
 * Get the Statistic info of nodes status and pods status.
 * 
 * @returns {nodesStatus: string, podsStatus: string}
 * 
 * @memberOf ResourceService
 */
  getResourceStatistic() {
    let clusters = Object.keys(this.resources);
    let resourceStatistic = {};

    for (let cluster of clusters) {
      let resouce = this.resources[cluster];
      let podsList:any[] = resouce.pods;
      let nodesList:any[] = resouce.nodes;
      let RunningPodsNum = 0;
      let ReadyNodesNum = 0;     
      let podsStatus = '';
      let nodesStatus = '';

      for (let pod of podsList) {
        if (pod.status.phase === 'Running') {
          RunningPodsNum++;
        }
      }
      podsStatus = RunningPodsNum + '/' + podsList.length;

      for (let node of nodesList) {
        for (let condition of node.status.conditions) {
          if (condition.type === 'Ready' && condition.status === 'True') {
            ReadyNodesNum++;
          }
        } 
      }
      nodesStatus = ReadyNodesNum + '/' + nodesList.length;

      resourceStatistic[cluster] = {nodesStatus: nodesStatus, podsStatus: podsStatus};
    }

    return resourceStatistic;
  }
  
}