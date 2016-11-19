
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ClusterModule } from './cluster/cluster.module';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about/about.component';
import { QueryComponent } from './query/query.component';
import { SettingComponent } from './setting/setting.component';
import { ResourceService } from './shared/resource.service';
import { IndexdbService } from './shared/indexdb.service';
import { AlasqldbService } from './shared/alasqldb.service';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    SettingComponent,
    AboutComponent,
//    ClusterComponent,
    QueryComponent 
  ],
  providers: [ 
    ResourceService, IndexdbService, AlasqldbService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
