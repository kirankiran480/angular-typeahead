import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor() { }

  getSuggestions(searchTerm: string) {
    console.log('query');
    return from([[1, 2, 3], [1, 3, 4]]);
  }
}
