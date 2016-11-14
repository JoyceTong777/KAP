import {Component, OnInit} from '@angular/core';
import { IndexdbService } from './../shared/indexdb.service';

import { Apiserver } from './apiserver.model';
import { IndexdbApiserver } from './../setting/indexdbApiserver.model';

@Component({
  selector: 'tg-setting',
  moduleId: module.id,
  templateUrl: 'setting.component.html'
})

export class SettingComponent implements OnInit{
  apiservers: IndexdbApiserver[];
  newApiserver: Apiserver;

  constructor(private indexdbService: IndexdbService) { };

  ngOnInit() {
    this.getApiservers();
    this.newApiserver = {ip:'', token: ''};
  }

  addApiserver(data: Apiserver) {
    this.indexdbService.addDataToApiserver(data);
  }

  getApiservers() {
    this.apiservers = this.indexdbService.getDataFromApiserver();
  }

  deleteApiserver(id: number) {
    this.indexdbService.deleteDataFromApiserver(id);
    // remove from front end view
    for (let i = 0; i < this.apiservers.length; i++) {
      if (this.apiservers[i].id === id) {
        this.apiservers.splice(i, 1);
        break;
      }
    }
  }

  updateApiserver(data: IndexdbApiserver) {
    this.indexdbService.updateDataFromApiserver(data);
  }

}