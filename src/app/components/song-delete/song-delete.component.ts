import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-delete',
  templateUrl: './song-delete.component.html',
  styleUrls: ['./song-delete.component.css']
})
export class SongDeleteComponent implements OnInit {

  removeSong: Song;
  constructor(private myService: SongService, private actRoute:ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.removeSong = new Song;
  }
deleteSong(){
  console.log("You deleted the song!");
    this.myService.updateSong(this.removeSong).subscribe
    (response =>{
      console.log(response);
      this.router.navigate(['']);
    })
 }

}