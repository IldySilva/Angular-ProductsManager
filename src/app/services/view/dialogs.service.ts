import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private snack:MatSnackBar) { }

 showMessage(message:string,isError:boolean){

this.snack.open(message,"X", {

  duration: 3000,
  horizontalPosition: "right",
  verticalPosition: "top",
  panelClass:  isError?["snackbar-card-error"]:"snackbar-card"
  


})

  }
}
