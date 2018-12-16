import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GalleryDetails, GalleryResponse } from './gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  saveGallery(request: GalleryDetails): Observable<GalleryResponse> {
    return this.http.post<GalleryResponse>('http://localhost:3000/api/saveGallery', request);
  }

  getGallery(): Observable<GalleryDetails[]> {
    return this.http.get<GalleryDetails[]>('http://localhost:3000/api/getGallery');
  }
}
