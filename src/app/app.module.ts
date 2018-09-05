import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {CreateEventComponent} from './components/create-event/CreateEvent.component';
import {PollComponent} from './components/poll/poll.component';
import {EventLinkManagerComponent} from './components/create-event/event-link-manager/EventLinkManager.component';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'index', component: CreateEventComponent },
  {path: 'poll', component: PollComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventLinkManagerComponent,
    PollComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
