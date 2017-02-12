import { Films } from './../sample/films';
import { Starships } from './../sample/starships';
import { SwapiList } from './../models/swapi-list';
import { People } from './../sample/people';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SwapiService {
  constructor(private http: Http) { }

  private apiUrl = 'http://swapi.co/api';

  getPeople(page: number = 1, mock: boolean = false): Promise<SwapiList> {
    if (mock) {
      const data = {
        count: People.length,
        results: People
      };
      return Promise.resolve(data);
    }
    return this.http.get(`${this.apiUrl}/people/?page=${page}`)
      .toPromise()
      .then(response => response.json() as Promise<SwapiList>)
      .catch(this.handleError);
  }

  getStarships(page: number = 1, mock: boolean = false): Promise<SwapiList> {
    if (mock) {
      const data = {
        count: Starships.length,
        results: Starships
      };
      return Promise.resolve(data);
    }
    return this.http.get(`${this.apiUrl}/starships/?page=${page}`)
      .toPromise()
      .then(response => response.json() as Promise<SwapiList>)
      .catch(this.handleError);
  }

  getFilms(page: number = 1, mock: boolean = false): Promise<SwapiList> {
    if (mock) {
      const data = {
        count: Films.length,
        results: Films
      };
      return Promise.resolve(data);
    }
    return this.http.get(`${this.apiUrl}/films/?page=${page}`)
      .toPromise()
      .then(response => response.json() as Promise<SwapiList>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
