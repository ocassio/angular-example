import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'items-search',
  templateUrl: './items-search.component.html'
})
export class ItemsSearchComponent {

  search = '';

  constructor(private router: Router) {
  }

  onSubmit(): void {
    this.router.navigate(['/items'], {
      queryParams: {
        search: this.search
      }
    });
  }

}
