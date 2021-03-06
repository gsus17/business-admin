import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BusinessServiceService } from './business-service.service';
import { appRoutes } from './app-routes-config';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCwxA5e4Wew-gAZNLNtXQDAjWlwlAQqs7w',
  authDomain: 'businessadmin-95d66.firebaseapp.com',
  databaseURL: 'https://businessadmin-95d66.firebaseio.com',
  projectId: 'businessadmin-95d66',
  storageBucket: 'businessadmin-95d66.appspot.com',
  messagingSenderId: '284680327923'
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BusinessCardComponent,
    BusinessFormComponent,
    BusinessDetailComponent,
    BusinessListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [BusinessServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
