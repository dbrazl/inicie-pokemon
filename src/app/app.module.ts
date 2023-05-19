import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { TriplePokemonSliderComponent } from './pokemon-slider/triple-pokemon-slider.component';

import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TriplePokemonSliderComponent,
    PokemonCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
