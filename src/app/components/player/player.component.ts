import { VideoService } from "src/app/services/video.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { video } from "src/app/video";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  id!: number;
  videos: video[] = [];
  mySubscription: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    private VideoService: VideoService,
    public router: Router
  ) {
    this.VideoService.getvideos().subscribe((videos) => (this.videos = videos));
  }

  ngOnInit(): void {
    this.getVideo();
    
  }

  getVideo() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  }
}
