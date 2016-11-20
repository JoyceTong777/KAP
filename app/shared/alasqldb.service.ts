import { Injectable } from '@angular/core';
import { ResourceService} from './resource.service';
import { Resource } from './../model/resource.model';

declare var alasql: any;

@Injectable()
export class AlasqldbService {
  private dbInstance: any;

  constructor(private resourceService: ResourceService) {
    this.dbInstance = new alasql.Database('KapDatabase');
    this.createResourceTable();
  }

  createResourceTable() {
    this.dbInstance.exec('CREATE TABLE IF NOT EXISTS pods(cluster TEXT,metadata Object, spec Object, status Object)');
    this.dbInstance.exec('CREATE TABLE IF NOT EXISTS nodes(cluster TEXT, metadata Object, spec Object, status Object)');
    this.dbInstance.exec('CREATE TABLE IF NOT EXISTS services(cluster TEXT, metadata Object, spec Object, status Object)');
  }

  updataDatabase() {
    let resources:{[key: string]: Resource} = this.resourceService.getResource();
    let clusters:string[] = Object.keys(resources);
    let pods:Object[] = [];
    let nodes:Object[] = [];
    let services:Object[] = [];

    for (let cluster of clusters) {
      let resource:Resource = resources[cluster];
      nodes = nodes.concat(resource['nodes']);
      pods = pods.concat(resource['pods']);
      services = services.concat(resource['services']);
    }

    alasql.databases.KapDatabase.tables.nodes.data = nodes;
    alasql.databases.KapDatabase.tables.pods.data = pods;
    alasql.databases.KapDatabase.tables.services.data = services;
  }
/**
 * Return the sql query result;
 * 
 * @param {string} command
 * @returns
 * 
 * @memberOf AlasqldbService
 */
  executeCommand(command: string): Promise<any> {
    this.updataDatabase();
    return alasql.promise(['USE KapDatabase', command]);
  }
}