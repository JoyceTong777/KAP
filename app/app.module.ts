
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from './about/about.component';
import { QueryComponent } from './query/query.component';
import { ClusterComponent } from './cluster/cluster.component';
import { SettingComponent } from './setting/setting.component';
import { ResourceService } from './shared/resource.service';
import { IndexdbService } from './shared/indexdb.service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'cluster',
        component: ClusterComponent
      },
      {
        path: 'query',
        component: QueryComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent, 
    SettingComponent,
    AboutComponent,
    ClusterComponent,
    QueryComponent 
  ],
  providers: [ 
    ResourceService, IndexdbService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
