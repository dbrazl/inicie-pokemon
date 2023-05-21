import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TriplePokemonSliderComponent } from './triple-pokemon-slider/triple-pokemon-slider.component';
import { SimplePokemonSliderComponent } from './simple-pokemon-slider/simple-pokemon-slider.component';
import { PokemonListSliderComponent } from './pokemon-list-slider/pokemon-list-slider.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { register } from 'swiper/element/bundle';
import { HomeComponent } from './home/home.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    PokemonComponent,
    HomeComponent,
    PokemonTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TriplePokemonSliderComponent,
    SimplePokemonSliderComponent,
    PokemonListSliderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
