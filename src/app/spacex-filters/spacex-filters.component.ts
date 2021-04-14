import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ApiCommunicateService } from '../api-communicate.service';
import { SpaceXLaunchProgram } from '../app.domain';

@Component({
  selector: 'app-spacex-filters',
  templateUrl: './spacex-filters.component.html',
  styleUrls: ['./spacex-filters.component.css']
})
export class SpacexFiltersComponent implements OnInit {
  years:string[];

  constructor(private apiCommunicate: ApiCommunicateService,
    private renderer: Renderer2, private el:ElementRef) { }

  ngOnInit(): void {
    this.years = ['2006','2007','2008','2009','2010','2011','2012','2013',
      '2014','2015','2016','2017','2018','2019','2020'];
  }

  setFilter(value:string, type:string):void {
    if(type === 'year'){
      if(this.apiCommunicate.launch_year === value){
        this.apiCommunicate.launch_year = null;
        this.renderer.removeClass(this.el.nativeElement.querySelector('#year-'+this.years.indexOf(value)),'highlight');
      }else{
        this.apiCommunicate.launch_year = value;
        if(this.el.nativeElement.querySelector('.years .highlight')){
          this.renderer.removeClass(this.el.nativeElement.querySelector('.highlight'),'highlight');
        }
        this.renderer.addClass(this.el.nativeElement.querySelector('#year-'+this.years.indexOf(value)),'highlight');
      }
    }else if(type === 'launch'){
      if(this.apiCommunicate.isLaunchSucess === value){
        this.apiCommunicate.isLaunchSucess = null;
        this.renderer.removeClass(this.el.nativeElement.querySelector('#launch-'+value),'highlight');
      }else{
        this.apiCommunicate.isLaunchSucess = value;
        if(this.el.nativeElement.querySelector('.launching .highlight')){
          this.renderer.removeClass(this.el.nativeElement.querySelector('.launching .highlight'),'highlight');
        }
        this.renderer.addClass(this.el.nativeElement.querySelector('#launch-'+value),'highlight');
      }
    }else if(type === 'landing'){
      if(this.apiCommunicate.isLandingSuccess === value){
        this.apiCommunicate.isLandingSuccess = null;
        this.renderer.removeClass(this.el.nativeElement.querySelector('#land-'+value),'highlight');
      }else{
        this.apiCommunicate.isLandingSuccess = value;
        if(this.el.nativeElement.querySelector('.landing .highlight')){
          this.renderer.removeClass(this.el.nativeElement.querySelector('.landing .highlight'),'highlight');
        }
        this.renderer.addClass(this.el.nativeElement.querySelector('#land-'+value),'highlight');
      }
    }
    this.apiCommunicate.getData().subscribe((response:SpaceXLaunchProgram[]) => {
      this.apiCommunicate.spaceXData = response;
      this.apiCommunicate.spaceXData.map(data => {
        data.cores_land_success = [{}];
        data.rocket.first_stage.cores.map((core, index) => {
          data.cores_land_success[index] = {core_serial:core.core_serial, land_success:core.land_success};
        });
      });
    },error => {
      console.log(error);
    });
  }
}
