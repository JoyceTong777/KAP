import {Component, OnInit} from '@angular/core';
import { IndexdbService } from './../shared/indexdb.service';

import { IndexdbApiserver } from './../model/indexdbApiserver.model';
import { Apiserver } from './../model/apiserver.model';

@Component({
  selector: 'tg-setting',
  moduleId: module.id,
  templateUrl: 'setting.component.html'
})

export class SettingComponent implements OnInit{
  apiservers: IndexdbApiserver[];

 // constructor(private indexdbService: IndexdbService) { };
 constructor(private indexdbService: IndexdbService) { };

  ngOnInit() {
    this.getApiservers();
  }

  addApiserver(newName: string, newIp: string, newToken: string, newDashboardIp: string) {
    this.indexdbService.addDataToApiserver(<Apiserver>{name: newName, ip: newIp, token: newToken, dashboardIp: newDashboardIp});
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