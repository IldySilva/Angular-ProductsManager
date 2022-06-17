import { HeaderData } from './models/headerdata';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderservicesService } from './services/view/headerData/headerservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  header:HeaderservicesService;
  constructor(

    private headerServices: HeaderservicesService
  ) { 

this.header=headerServices;
  }
  title = 'angulartest';
}
