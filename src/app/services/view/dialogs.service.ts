import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private snack:MatSnackBar) { }

 showMessage(message:string){

this.snack.open(message,"X", {

  duration: 3000,
  horizontalPosition: "right",
  verticalPosition: "top",
  panelClass:"snackbar-card"
  


})

  }
}
