import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { User } from '../providers/user';
import { Api } from '../providers/api';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { SignupPage } from '../pages/signup/signup';
import { EmailValidator } from "../providers/email";
import { Http, HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    User,
    EmailValidator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
