import { Component, OnInit} from '@angular/core';
import { video } from 'src/app/video';
import { VideoService } from 'src/app/services/video.service';

export interface category {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  videos: video[] = [];
  categories: category[] = [
    {name: 'Cooking programs'},
    {name: 'Pokémon'},
    {name: 'Cartoons'},
    {name: 'Music'},
    {name: 'Live'},
    {name: 'Mix'},
    {name: 'Handicraft'},
    {name: 'Tourist destinations'},
    {name: 'Sports video games'},
    {name: 'Football'},
    {name: 'Rap'},
    {name: 'Action and adventure games'},
    {name: 'Visual arts'},
    {name: 'Recent uploads'},
  ];
  constructor(private VideoService:VideoService) { }

  ngOnInit(): void { this.VideoService.getvideos().subscribe((videos) => this.videos = videos); }
  
}