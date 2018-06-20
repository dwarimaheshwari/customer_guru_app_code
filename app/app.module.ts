import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import {ProfileService} from './services/profile.service';
import {FormsModule} from '@angular/Forms';
import { SingleuserComponent } from './component/singleuser/singleuser.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {path: "", component : ProfileComponent},
  {path: "user/:code", component : SingleuserComponent}
]
  


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SingleuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
