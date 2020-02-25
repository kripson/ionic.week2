import { Component, OnInit } from '@angular/core';
import {Hero} from '../interfaces/hero.interface';
import {HEROES} from '../data/hero.names';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	hero1:Hero = 
	{
	id:1000,
	name:'Superman'
	};

	heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
