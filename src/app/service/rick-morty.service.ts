import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/character`);
  }

  getEpisodes(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/episode`);
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/location`);
  }
}
