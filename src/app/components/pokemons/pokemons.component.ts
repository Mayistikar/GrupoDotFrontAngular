import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { HostListener} from "@angular/core";
import { ScrollEvent } from 'ngx-scroll-event';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {

  gotPokemons: number;
  htmlContent: string;

  constructor( private pokeApi: PokeApiService ) { 
  	console.log('hello pokemons!');
  	this.gotPokemons = 0;
  	//this.pokeApi.getPokemonById(600);
  	this.pokeApi.getPokemons( this.gotPokemons ).subscribe( response => {
  		console.log( response );
  	});
/*  		.subscribe( data => {   			
  			console.log(data);
  			this.pokemon = data['name'];
  			console.log(this.pokemon);
  		});  	*/
  	//this.pokeApi.getPokemons();
  }
/*
  @HostListener("window:scroll", ["$event"])  	
	onWindowScroll() {
	//In chrome and some browser scroll is given to body tag
	let scroll = (document.documentElement.scrollTop || document.body.scrollTop);
	let window = window.documentElement.offsetHeight;
	let max = document.documentElement.scrollHeight;
	console.log('POS: ', pos);
	console.log('SCROLL: ', scroll);
	console.log('MAX: ', max);
	console.log('POS / MAX: ',  pos / max );
	// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
	 if(pos === max)   {
	 //Do your action here
	 	console.log('end');
	 }
}
*/
@HostListener("window:scroll", [])
onScroll(): void {
	console.log("window.innerHeight: ", window.innerHeight);
	console.log(" window.scrollY: ",  window.scrollY);
	console.log("document.body.offsetHeight: ", document.body.offsetHeight);
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        console.log("We are on the bottom");
        this.htmlContent = `<div class="card">
    <div class="card-body ">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>`;
    }
}
}

