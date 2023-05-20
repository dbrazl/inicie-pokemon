import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TriplePokemonSliderComponent } from './triple-pokemon-slider/triple-pokemon-slider.component';

import { register } from 'swiper/element/bundle';
import { SimplePokemonSliderComponent } from './simple-pokemon-slider/simple-pokemon-slider.component';
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
    SimplePokemonSliderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
