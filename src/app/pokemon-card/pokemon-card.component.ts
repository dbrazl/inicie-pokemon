import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() name = 'Pikachu';
  @Input() code = 1;
  @Input() image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png';
  @Input() height = 110;
  @Input() weight = 19;
  @Input() alwaysSmall = false;
}
