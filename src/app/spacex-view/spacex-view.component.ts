import { Component, OnInit } from '@angular/core';
import { ApiCommunicateService } from '../api-communicate.service';
import { SpaceXLaunchProgram } from '../app.domain';

@Component({
  selector: 'app-spacex-view',
  templateUrl: './spacex-view.component.html',
  styleUrls: ['./spacex-view.component.css']
})
export class SpacexViewComponent implements OnInit {

  // spaceXData:SpaceXLaunchProgram[] = [];

  constructor(public apiCommunicate: ApiCommunicateService) { }

  ngOnInit(): void {
    this.apiCommunicate.getData().subscribe((response:SpaceXLaunchProgram[]) => {
      this.apiCommunicate.spaceXData = response;
      this.apiCommunicate.spaceXData.map(data => {
        data.cores_land_success = [{}];
        data.rocket.first_stage.cores.map((core,index) => {
          data.cores_land_success[index] = {core_serial:core.core_serial, land_success:core.land_success};
        });
      });
    },error => {
      console.log(error);
    });
  }
}
