import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ResourceService } from './../shared/resource.service';
import { IndexdbService } from './../shared/indexdb.service';
import { ClusterInfo } from './../model/clusterInfo.model';
import { IndexdbApiserver } from './../model/indexdbApiserver.model';

@Component({
  moduleId: module.id,
  templateUrl: 'cluster-list.component.html',
  styleUrls: [ 'cluster-list.component.css' ]
})

export class ClusterListComponent implements OnInit { 
  clusterInfomations: ClusterInfo[] = [];

  constructor(private router: Router, private indexdbService: IndexdbService, private resourceService: ResourceService) { }

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

  redirect(ip: string) {
    this.router.navigate(['/cluster/detail', ip]);
  }

}