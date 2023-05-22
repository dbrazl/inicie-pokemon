import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { SearchInputComponent } from './search-input/search-input.component';
import { TriplePokemonSliderComponent } from './triple-pokemon-slider/triple-pokemon-slider.component';
import { SimplePokemonSliderComponent } from './simple-pokemon-slider/simple-pokemon-slider.component';
import { PokemonListSliderComponent } from './pokemon-list-slider/pokemon-list-slider.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MostWantedPokemonsComponent } from './most-wanted-pokemons/most-wanted-pokemons.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

import { register } from 'swiper/element/bundle';
import { NotFoundComponent } from './not-found/not-found.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    PokemonComponent,
    HomeComponent,
    PokemonTypeComponent,
    ProgressBarComponent,
    MostWantedPokemonsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TriplePokemonSliderComponent,
    SimplePokemonSliderComponent,
    PokemonListSliderComponent,
    NgFor,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
