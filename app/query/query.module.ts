import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { QueryInformComponent } from './query-inform.component';
import { QueryResultComponent } from './query-result.component';

@NgModule({
  imports: [
    CommonModule,
    QueryRoutingModule,
    FormsModule
  ],
  declarations: [
    QueryComponent,
    QueryInformComponent,
    QueryResultComponent
  ]
})

export class QueryModule { }
