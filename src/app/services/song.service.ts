import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  baseUrl = 'http://localhost:5000/api/Song/';

  constructor(private http:HttpClient) { }

  // get all songs
  getSongList(): Observable<Song[]> {
    return this.http.get<Song[]>(this.baseUrl);
}

// create a song
createSong(song: Song) {
  return this.http.post(this.baseUrl,song);
}

// update song
updateSong(song: Song) {
  const url = this.baseUrl + song.id;
  return this.http.put(url,song);
}


// delete song
deleteSong(id: Song) {
  const url = this.baseUrl + id;
  return this.http.delete(url);
}

}
