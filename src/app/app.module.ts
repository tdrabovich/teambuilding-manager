import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {CreateEventComponent} from './components/create-event/CreateEvent.component';
import {EventLinkManagerComponent} from './components/create-event/event-link-manager/EventLinkManager.component';

const appRoutes: Routes = [
  {path: 'index', component: CreateEventComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventLinkManagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
