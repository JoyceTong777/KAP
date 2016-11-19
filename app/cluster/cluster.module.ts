import { ClusterRoutingModule } from './cluster-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClusterComponent } from './cluster.component';
import { ClusterDetailComponent } from './cluster-detail.component';
import { ClusterListComponent } from './cluster-list.component';

@NgModule({
  imports: [
    CommonModule,
    ClusterRoutingModule
  ],
  declarations: [
    ClusterComponent,
    ClusterDetailComponent,
    ClusterListComponent
  ]
})

export class ClusterModule { }