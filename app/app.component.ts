import { AppModule } from './app.module';

import { Component, OnInit } from '@angular/core';
import { ResourceService } from './shared/resource.service';

@Component({
  selector: 'tg-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent implements OnInit{ 

  constructor( private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.loadResource();
  }
    

}
