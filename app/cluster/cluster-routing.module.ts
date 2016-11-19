import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClusterComponent } from './cluster.component';
//import { ClusterDetailComponent } from './cluster-detail.component';

const clusterRouter: Routes = [
  { path: '', component: ClusterComponent }
 // ,{ path: 'cluster/:ip', component: ClusterDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(clusterRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class ClusterRoutingModule { }