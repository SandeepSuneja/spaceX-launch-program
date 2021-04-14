import { Component, OnInit } from '@angular/core';
import { ApiCommunicateService } from './api-communicate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spaceX';
  developer_name:string = 'Sandeep Suneja';

  constructor(private apiCommunicate: ApiCommunicateService){}

  ngOnInit(): void {}
}
