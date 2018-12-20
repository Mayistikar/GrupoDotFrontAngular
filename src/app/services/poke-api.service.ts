import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/observable";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokemon: any;
  pokemons: any[] = [];
  gotPokemons: number;
  constructor( private http: HttpClient ) {
  	console.log('Hellow PokeApi Service!');
    this.gotPokemons = 0;
  }

  getPokemonById( idPokemon: number ){
    let promise = new Promise( (resolve, reject) => {
      let apiUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
      this.http.get( apiUrl )
        .toPromise()
        .then( 
          response => { 
            console.log( response ); 
            resolve(); 
          } )
        .catch(
          err => {
            console.log('error: ', err);
            reject(err);
          } );
    });
    return promise;
  }

  getPokemons ( pokemonIndex: number ) {   
    return new Observable( observer => {            
      for ( var i=1; i <= 20; i++ ) {        
        pokemonIndex += 1;
        console.log(`################################ POKEMON ${ pokemonIndex }! ################################`);
        observer.next( this.getPokemonById( pokemonIndex ) );
      }
      observer.complete();
    });

  }
}
