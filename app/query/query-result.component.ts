import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlasqldbService } from './../shared/alasqldb.service';



@Component({
  moduleId: module.id,
  templateUrl: 'query-result.component.html'
})

export class QueryResultComponent implements OnInit {
  title: string[];
  queryResult: Object[];
  errorMessage: string;

  constructor(private route: ActivatedRoute, private alasqldbService: AlasqldbService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.storeResult(params['command']));
  }

  storeResult(command: string) {
    let self = this;
    this.alasqldbService.executeCommand(command).then(function(res:any) {
      self.queryResult = res[1];
      if (self.queryResult != undefined && self.queryResult.length != 0) {
        self.title = Object.keys(self.queryResult[0]);
      }
      self.errorMessage = null;
    }).catch(function(err:any) {
      self.errorMessage = err;
    })
  }

}
