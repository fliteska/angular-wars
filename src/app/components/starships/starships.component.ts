import { Starship } from '../../models/starship';
import { SwapiService } from '../../services/swapi.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.sass']
})
export class StarshipsComponent implements OnInit {
  constructor(private swapiService: SwapiService) { }
  title: string = 'Starships';
  jumbotronText: string = 'Explore the starships of the Star Wars universe in AngularJS 2.';
  @Input() ships: Starship[];
  @Input() page: number = 1;
  @Input() count: number;
  @Input() pages: any;
  @Input() mock: boolean = false;
  getStarships(): void {
    this.swapiService.getStarships(this.page, this.mock)
      .then(response => {
        console.log(response);
        this.ships = response.results;
        this.count = response.count;
        this.pages = Math.ceil(response.count / 10);
      });
  }
  ngOnInit(): void {
    this.getStarships();
  }
  toggleMock(): void {
    this.mock = !this.mock;
    this.page = 1;
    this.getStarships();
  }
  goToNextPage(): void {
    this.page++;
    this.getStarships();
  }
  goToPreviousPage(): void {
    this.page--;
    this.getStarships();
  }
}
