import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../service/rick-morty.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalCharacters = 0;
  totalEpisodes = 0;
  totalLocations = 0;
  characters: any[] = [];
  episodes: any[] = [];
  locations: any[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.rickMortyService.getCharacters().subscribe((data) => {
      this.totalCharacters = data.info.count;
      this.characters = data.results;
    });

    this.rickMortyService.getEpisodes().subscribe((data) => {
      this.totalEpisodes = data.info.count;
      this.episodes = data.results;
    });

    this.rickMortyService.getLocations().subscribe((data) => {
      this.totalLocations = data.info.count;
      this.locations = data.results;
    });
  }
}
