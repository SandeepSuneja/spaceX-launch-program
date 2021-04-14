import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiCommunicateService } from './api-communicate.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpacexFiltersComponent } from './spacex-filters/spacex-filters.component';
import { SpacexViewComponent } from './spacex-view/spacex-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacexFiltersComponent,
    SpacexViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
