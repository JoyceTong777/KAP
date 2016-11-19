import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { QueryComponent } from './query/query.component';
import { ClusterComponent } from './cluster/cluster.component';
import { SettingComponent } from './setting/setting.component';

const appRoutes: Routes = [
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
    loadChildren: 'app/cluster/cluster.module#ClusterModule'
  },
  {
    path: 'query',
    component: QueryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}