import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosService } from './todos.service';
import { UserService } from './user.service';
import { StartComponent } from './start/start.component';
import { StopComponent } from './stop/stop.component';
import { ContinueComponent } from './continue/continue.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  { path: 'Home', component: HomeComponent  },
  { path: 'Signup', component: SignupComponent  },
  { path: 'List', component: ListComponent  },
  { path: 'Start', component: StartComponent  },
  { path: 'Stop', component: StopComponent  },
  { path: 'Continue', component: ContinueComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StopComponent,
    ContinueComponent,
    ListComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TodosService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
