import { Component, OnInit } from '@angular/core';

import { Hero } from '../domain/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  /*hero: Hero = {
    id: 1,
    name: 'The Monkey King',
    desc: 'I can fly!'
  };*/

  heroes = HEROES;

  ngOnInit(): void {
  }

}
