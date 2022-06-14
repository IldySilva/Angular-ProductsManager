import { HeaderservicesService } from './../../services/view/headerData/headerservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private headerServices: HeaderservicesService) {


  }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerServices.headerData.title;
  }
}