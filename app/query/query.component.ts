
import { Component } from '@angular/core';
import { ResourceService } from './../shared/resource.service';
import { AlasqldbService } from './../shared/alasqldb.service';

@Component({
  selector: 'tg-query',
  moduleId: module.id,
  templateUrl: 'query.component.html'
})

export class QueryComponent { 
  constructor(private resourceService: ResourceService, private alasqldbService: AlasqldbService) { }

  consoleResource() {
    this.alasqldbService.updataDatabase();
//    console.log(this.alasqldbService.executeCommand('select cluster from nodes'));
  }
}