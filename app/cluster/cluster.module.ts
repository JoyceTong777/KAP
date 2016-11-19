import { ClusterRoutingModule } from './cluster-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClusterComponent } from './cluster.component';
// import { ClusterDetailComponent } from './cluster-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ClusterRoutingModule
  ],
  declarations: [
    ClusterComponent,
 //   ClusterDetailComponent
  ]
})

export class ClusterModule { }