import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  
  changeSong: Song = new Song;
  
  constructor(private myService: SongService, private actRoute:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  updateSong(){
    this.myService.updateSong(this.changeSong).subscribe
    (response =>{
      console.log(response);
      this.router.navigate(['']);
    })
  }

}
