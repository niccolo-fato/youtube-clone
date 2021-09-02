import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { video } from 'src/app/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'https://niccolo-fato.github.io/youtube-clone/db.json';

  constructor(private http:HttpClient) { }

  getvideos(): Observable<video[]> { return this.http.get<video[]>(this.apiUrl); }

}
