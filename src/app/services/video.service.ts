import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { video } from 'src/app/video';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'https://niccolo-fato.github.io/Youtube/db.json/videos';

  constructor(private http:HttpClient) { }

  getvideos(): Observable<video[]> { return this.http.get<video[]>(this.apiUrl); }

}
