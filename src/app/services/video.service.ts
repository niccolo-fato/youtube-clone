import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { video } from 'src/app/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'https://my-json-server.typicode.com/niccolo-fato/youtube-clone/videos';

  constructor(private http:HttpClient) { }

  getvideos(): Observable<video[]> { return this.http.get<video[]>(this.apiUrl); }

}
