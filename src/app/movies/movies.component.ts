import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  movies = [
    {
      id: 1,
      title: 'Film 1',
      description: 'Filmin açıklaması yer alacak.',
      imageUrl: '1.jpeg',
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Filmin açıklaması yer alacak.',
      imageUrl: '2.jpeg',
    },
    {
      id: 3,
      title: 'Film 3',
      description: 'Filmin açıklaması yer alacak.',
      imageUrl: '3.jpeg',
    },
  ];
}
