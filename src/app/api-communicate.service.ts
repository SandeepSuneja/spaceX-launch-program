import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SpaceXLaunchProgram } from './app.domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicateService {

  private baseUrl:string = 'https://api.spacexdata.com/v3/launches?limit=100';

  launch_year: string = null;
  isLaunchSucess: string = null;
  isLandingSuccess: string = null;

  spaceXData:SpaceXLaunchProgram[] = [];

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    let urlSegment = '';
    if(this.launch_year !== null){
      urlSegment += '&launch_year='+this.launch_year;
    }
    if(this.isLaunchSucess !== null){
      urlSegment += '&launch_success='+this.isLaunchSucess;
    }
    if(this.isLandingSuccess !== null){
      urlSegment += '&land_success='+this.isLandingSuccess;
    }
    return this.http.get(this.baseUrl+urlSegment);
  }
}
