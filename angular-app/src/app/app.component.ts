import { Component, OnInit } from '@angular/core';
import Backend from 'backend';

const backend = new Backend();

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
    backend.hello().then((msg: string) => {
      this.message = msg;
    });

    // fetchMovies from mongodb
    backend.fetchMovies('Star Trek').then((data) => {
      this.movies = JSON.stringify(data, null, 2);
    });
  }
}
