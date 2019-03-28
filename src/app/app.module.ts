import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';




@NgModule({
  declarations: [AppComponent, CardComponent],
  entryComponents: [],

  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCSRUetea7yHxB2Rj5milU7RQQb27StuCc',
      authDomain: 'ionicsamples-ca79e.firebaseapp.com',
      databaseURL: 'https://ionicsamples-ca79e.firebaseio.com',
      projectId: 'ionicsamples-ca79e',
      storageBucket: 'ionicsamples-ca79e.appspot.com',
      messagingSenderId: '526150452650'
    }),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
