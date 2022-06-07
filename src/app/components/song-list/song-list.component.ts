import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getSongList().subscribe(results => {
      console.log(results);
      this.songs = results
    });
  }
  updateSong() {
    console.log("Great Song!")
  }


  deleteSong(id) {

    this.songService.deleteSong(id).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })

  }

}
