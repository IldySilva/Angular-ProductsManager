import { HeaderservicesService } from 'src/app/services/view/headerData/headerservices.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appComponent:HeaderservicesService) { }

  ngOnInit(): void {
  } emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


 


  login() {
    setTimeout(() => {

      this.appComponent.userIsLogged = true;

      this.appComponent.isLoading = false;

    }, 4000);
    this.appComponent.isLoading = true;





  }
}
