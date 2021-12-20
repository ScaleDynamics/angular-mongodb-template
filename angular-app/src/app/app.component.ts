import { Component, OnInit } from '@angular/core';

import Backend from '../.backend/backend.js';
const { hello, fetchMovies } = new Backend() as any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  message = '';
  movies = {};

  ngOnInit() {
    hello().then((msg: string) => {
      this.message = msg;
    });

    // fetchMovies from mongodb
    fetchMovies('Star Trek').then(
      (data: any) => (this.movies = JSON.stringify(data, null, 2))
    );
  }
}
