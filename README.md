# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Clone this repository first and then use `npm install` to install the required node packages.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## The Approach

Created two components, one is for filters (spacex-filters) and second is for viewing all the programs (spacex-view) and both the components can communicate using one service called 'ApiCommunicateService'.
For UI responsiveness, I have used media queries for three breakpoints i.e. screen size upto 700px, screen size between 701px and 1024px and screen size between 1025px and 1440px. Beyond 1440px, all the items will be center-aligned and max-width will be 1440px.

Whenever any option will be selected from the filters, API will be called and filtered data will be displayed. If selected option will be clicked again, it will unselect the option and filter will be removed.

Landing status will be shown for all the cores present in the first stage of the rocket in a list format.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
