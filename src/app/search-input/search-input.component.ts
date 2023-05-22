import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @ViewChild('searchInput') input?: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  searchPokemon(): void {
    const search: string = this.input?.nativeElement?.value ?? '';
    const searchInLowercase: string = search.toLocaleLowerCase();

    try {
      if (searchInLowercase.length <= 0) {
        throw new Error('Informe um pokemon')
      }

      this.router.navigate([`/pokemon/${searchInLowercase}`])
    } catch (error) {
      const message = (error as Error).message;

      this.toastr.error(message, '',{
        progressBar: true,
      });
    }
  }
}
