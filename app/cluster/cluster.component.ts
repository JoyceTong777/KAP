import { Component, OnInit } from '@angular/core';

import { ResourceService } from './../shared/resource.service';
import { IndexdbService } from './../shared/indexdb.service';
import { ClusterInfo } from './../model/clusterInfo.model';
import { IndexdbApiserver } from './../model/indexdbApiserver.model';

@Component({
  selector: 'tg-cluster',
  moduleId: module.id,
  templateUrl: 'cluster.component.html'
})

export class ClusterComponent implements OnInit { 
  clusterInfomations: ClusterInfo[] = [];

  constructor(private indexdbService: IndexdbService, private resourceService: ResourceService) { }

  ngOnInit() {
    let resourceStatics = this.resourceService.getResourceStatistic();
    console.log(resourceStatics);
    let self = this;
    this.indexdbService.getPromiseDataFromApiserver().then(function(indexdbApiservers: IndexdbApiserver[]) {
      for (let indexdbApiserver of indexdbApiservers) {
        let resourceStatic = resourceStatics[indexdbApiserver.name];
        console.log(resourceStatic);
        let clusterInfo = {name: indexdbApiserver.name,
          nodesStatus: resourceStatic.nodesStatus,
          podsStatus: resourceStatic.podsStatus,
          dashboardIp: indexdbApiserver.dashboardIp
        };
        self.clusterInfomations.push(clusterInfo);
      }
      console.log(self.clusterInfomations);
    });
  }

}