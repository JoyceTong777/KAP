import { Injectable } from '@angular/core';
import { Apiserver } from './../setting/apiserver.model';
import { IndexdbApiserver } from './../setting/indexdbApiserver.model';
declare var Dexie: any;

@Injectable()
export class IndexdbService {
  dbInstance = new Dexie('KapDatabase');

  openDatabase() {
    this.dbInstance.open().catch(function(error: any) {
      console.log("Open indexDB: " + error);
    })
  }

  createApiserverSchema() {
    this.dbInstance.version(1).stores({
      apiserver: '++id, ip, token'
    });
  }

  addDataToApiserver(apiserver: Apiserver) {
    this.dbInstance.apiserver.add({ip: apiserver.ip, token: apiserver.token});
  }

  getDataFromApiserver() {
    let apiserverList: IndexdbApiserver[] = [];
      this.dbInstance.apiserver.toArray().then(function(apiservers: any) {
         for (let apiserver of apiservers) {
           apiserverList.push(<IndexdbApiserver>{id: apiserver.id, ip: apiserver.ip, token: apiserver.token});
         }
      });
    return apiserverList;
  }

  deleteDataFromApiserver(id: number) {
    this.dbInstance.apiserver.delete(id);
  }

  updateDataFromApiserver(apiserver: IndexdbApiserver) {
    this.dbInstance.apiserver.update(apiserver.id, {ip: apiserver.ip, token: apiserver.token});
  }
}

