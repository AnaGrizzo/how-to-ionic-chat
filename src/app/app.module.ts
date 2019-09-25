import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyD1mVAb2aaV9MT_xdSqFRcmwWWm5J4jx98",
  authDomain: "ionic-chat-77df2.firebaseapp.com",
  databaseURL: "https://ionic-chat-77df2.firebaseio.com",
  projectId: "ionic-chat-77df2",
  storageBucket: "ionic-chat-77df2.appspot.com",
  messagingSenderId: "48089131856",
  appId: "1:48089131856:web:bb833795dd0a5ce5f45a55"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
