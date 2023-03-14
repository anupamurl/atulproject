import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedseriveService {

  constructor() { }

  patiendAdd : EventEmitter<any> =   new EventEmitter();



}
