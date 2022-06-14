import { HeaderData } from './../../../models/headerdata';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderservicesService {

private _headerData=new BehaviorSubject<HeaderData>({
  
  title:"Inicio",
  routeUrl:""
})

  constructor() { }

  get headerData():HeaderData{
    return this._headerData.value;
  }
  set headerData(headerData:HeaderData){
this._headerData.next(headerData);
  }
}
