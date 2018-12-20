import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


const routes: Routes = [
	{ path: 'pokedex', component: PokedexComponent },
	{ path: 'pokemons', component: PokemonsComponent },
	{ path: '**', component: PokedexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
