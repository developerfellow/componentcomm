import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 servers:any = [
  {name:'Production Server',status:'online'},
  {name:'Development Server',status:'offline'},
  {name:'Test Server',status:'unknown'}
 ];
 flag:boolean = false;
 ShowRecords(){
  this.flag = true;
 }
}
