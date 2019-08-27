import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Services */
import { NewsServiceService } from './news-service.service';

/* Modules */
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component : LoginComponent
    },
      {
      path : 'news',
      component : NewsComponent

      },
      {
        path: 'details',
        component : NewsDetailsComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }  
    ])
    ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
