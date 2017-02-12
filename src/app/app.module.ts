import { SwapiService } from './services/swapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { FilmsComponent } from './components/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    NotFoundComponent,
    StarshipsComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'starships',
        component: StarshipsComponent
      },
      {
        path: 'films',
        component: FilmsComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ])
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
