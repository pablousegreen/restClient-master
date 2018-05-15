import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';

//COMPONENTS
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ListhotelsComponent } from './components/listhotels/listhotels.component';

//SERVICES
import{UserService}   from './shared-service/user.service';
import { HotelsService } from './shared-service/hotels.service';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';

const appRoutes:Routes=[
  {path:'', component:ListuserComponent},
    {path:'op', component:UserFormComponent},
    {path:'ho', component:ListhotelsComponent},
    {path:'hotelform', component:HotelFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    ListhotelsComponent,
    HotelFormComponent  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
