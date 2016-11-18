
import { Component } from '@angular/core';
import { ResourceService } from './../shared/resource.service';

@Component({
  selector: 'tg-query',
  moduleId: module.id,
  templateUrl: 'query.component.html'
})

export class QueryComponent { 
  constructor(private resourceService: ResourceService) { }

  consoleResource() {
    console.log(this.resourceService.showResource());
  }
}