import { SwapiService } from '../../services/swapi.service';
import { Person } from '../../models/person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {
  constructor(private swapiService: SwapiService) { }
  title: string = 'People';
  jumbotronText: string = 'Explore the people of the Star Wars universe in AngularJS 2.';
  @Input() people: Person[];
  @Input() page: number = 1;
  @Input() count: number;
  @Input() pages: any;
  @Input() mock: boolean = false;
  getPeople(): void {
    this.swapiService.getPeople(this.page, this.mock)
      .then(response => {
        this.people = response.results;
        this.count = response.count;
        this.pages = Math.ceil(response.count / 10);
      });
  }
  ngOnInit(): void {
    this.getPeople();
  }
  toggleMock(): void {
    this.mock = !this.mock;
    this.page = 1;
    this.getPeople();
  }
  goToNextPage(): void {
    this.page++;
    this.getPeople();
  }
  goToPreviousPage(): void {
    this.page--;
    this.getPeople();
  }
}
