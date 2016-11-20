import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryComponent } from './query.component';
import { QueryInformComponent } from './query-inform.component';
import { QueryResultComponent } from './query-result.component';

const queryRouter: Routes = [
  { path: '',
    component: QueryComponent,
    children: [
      {path: 'result/:command', component: QueryResultComponent},
      {path: 'inform', component: QueryInformComponent },
      {path: '', redirectTo: 'inform', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(queryRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class QueryRoutingModule { }