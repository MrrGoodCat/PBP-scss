import {Component, Input} from '@angular/core';
import {Database} from '../shared/interfaces/Database';

@Component({
  selector: 'pbp-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {

  @Input() database: Database;

  showQueries: boolean = false;

  constructor() { }

  toggleQueries() {
    this.showQueries = !this.showQueries;
  }

  getInteractions() {}

  deleteQuery() {}

}
