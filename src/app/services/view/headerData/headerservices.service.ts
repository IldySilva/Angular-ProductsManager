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
  private _userIsLogged = new BehaviorSubject<boolean>(true);
  private _isLoading = new BehaviorSubject<boolean>(false);

  get isLoading(): boolean {

    return this._isLoading.value;
  }

  set isLoading(value: boolean) {

    this._isLoading.next(value);
  }
  get userIsLogged(): boolean {

    return this._userIsLogged.value;
  }
  set userIsLogged(value: boolean) {

    this._userIsLogged.next(value)
  }

}

 
