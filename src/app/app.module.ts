import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
