import { Component, OnInit } from '@angular/core';
import { HeaderservicesService } from 'src/app/services/view/headerData/headerservices.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private headerServices: HeaderservicesService) {
headerServices.headerData.title="Home"

   }

  ngOnInit(): void {
  }

}
