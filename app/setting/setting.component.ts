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

  constructor(private indexdbService: IndexdbService) { };

  ngOnInit() {
    this.getApiservers();
  }

  addApiserver(newIp: string, newToken: string) {
    this.indexdbService.addDataToApiserver(<Apiserver>{ip: newIp, token: newToken});
    this.getApiservers();
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