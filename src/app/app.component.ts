import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-page';
  username : string = "";
  password : string = "";
  show: boolean= false;
  submitInput() {
    if(this.username != null && this.password != null)
    {
      console.log("user name is " + this.username);
      this.clear();
    }
  }
  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
    }
}
