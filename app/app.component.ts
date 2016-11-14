import { IndexdbService } from './shared/indexdb.service';
import { AppModule } from './app.module';
import { ResourceService } from './resource/resource.service';
import { Resource } from './resource/resource';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tg-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent implements OnInit{ 
  resources: Resource[];

  constructor(private resourceService: ResourceService, private indexdbService: IndexdbService) { }

  getResources(): void {
    this.resourceService.getResources().then(resources => this.resources = resources);
  }

  ngOnInit(): void {
    this.indexdbService.createApiserverSchema();
    this.indexdbService.openDatabase();
  }

}
