import { Injectable } from '@angular/core';

import { IndexdbService } from './indexdb.service';
import { IndexdbApiserver } from './../model/indexdbApiserver.model';
import { Resource } from './../model/resource.model';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ResourceService {
  private resources: {[key: string]: Resource}

  constructor(private indexdbService: IndexdbService, private http: Http) { }

  loadResource() {
    let self = this;
    this.indexdbService.getPromiseDataFromApiserver().then(function(indexdbApiservers: IndexdbApiserver[]) {

    })
  }
}