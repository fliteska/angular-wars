import { Film } from './../../models/film';
import { SwapiService } from './../../services/swapi.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {
  constructor(private swapiService: SwapiService, private router: Router) { }
  @Input() films: Film[];
  @Input() film: Film;
  @Input() page: number = 1;
  @Input() count: number;
  @Input() pages: any;
  @Input() mock: boolean = false;
  getFilms(): void {
    this.swapiService.getFilms(this.page, this.mock)
      .then(response => {
        this.films = response.results;
        this.films.forEach(f => f.expanded = false);
        this.count = response.count;
        this.pages = Math.ceil(response.count / 10);
        this.film = this.films[0];
      });
  }
  ngOnInit(): void {
    this.getFilms();
  }
  toggleMock(): void {
    this.mock = !this.mock;
    this.page = 1;
    this.getFilms();
  }
  goToNextPage(): void {
    this.page++;
    this.getFilms();
  }
  goToPreviousPage(): void {
    this.page--;
    this.getFilms();
  }

  onSelect(film): void {
    this.film = film;
  }
}
