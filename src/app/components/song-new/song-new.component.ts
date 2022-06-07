import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-new',
  templateUrl: './song-new.component.html',
  styleUrls: ['./song-new.component.css']
})
export class SongNewComponent implements OnInit {
  
  newSong: Song;

  constructor(private myService: SongService, private actRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.newSong = new Song;
  }

  createSong() {
    //console.log("You created a new song!");
    //console.log(this.newSong)

    this.myService.createSong(this.newSong).subscribe
    (res => {
      console.log(res);
      this.router.navigate(['']);
      })
    }

  }


