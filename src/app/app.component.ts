import { Component, OnInit } from '@angular/core';
import { Constants } from './config/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = Constants.apiName;
  constructor() {
    console.log(Constants.API_ENDPOINT);
  }
  ngOnInit() {
    console.log(this.title);
  }
}
