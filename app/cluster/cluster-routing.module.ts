import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster.component';
import { ClusterListComponent } from './cluster-list.component';
import { ClusterDetailComponent } from './cluster-detail.component';

const clusterRouter: Routes = [
  { path: '', 
    component: ClusterComponent,
    children: [
      { path: 'detail/:ip', component: ClusterDetailComponent },
      { path: 'list', component: ClusterListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(clusterRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class ClusterRoutingModule { }