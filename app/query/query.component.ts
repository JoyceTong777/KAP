
import { Component } from '@angular/core';
import { AlasqldbService } from './../shared/alasqldb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tg-query',
  moduleId: module.id,
  templateUrl: 'query.component.html',
  styleUrls: ['query.component.css']
})

export class QueryComponent { 
  constructor(private router: Router, private alasqldbService: AlasqldbService) { }

  consoleResource() {
//    console.log(this.alasqldbService.executeCommand('select cluster from nodes'));
  }

  query(sql: string) {
    this.router.navigate(['/query/result', sql]);
  }
}