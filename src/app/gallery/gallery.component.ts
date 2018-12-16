import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryDetails } from './gallery.model';
import { Store, select } from '@ngrx/store';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { Observable } from 'rxjs';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Gallery;
  galleryData: GalleryDetails[];

  constructor(private store: Store<Gallery>, private galleryService: GalleryService) {
  }

  ngOnInit() {

    this.gallery = {
      gallery: {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        location: '',
        dateOfYear: ''
      }
    };
    this.populateFields();
  }

  onSubmit() {
    let data: Gallery = {
      gallery: {
        firstName: this.gallery.gallery.firstName,
        lastName: this.gallery.gallery.lastName,
        mobileNumber: this.gallery.gallery.mobileNumber,
        location: this.gallery.gallery.location,
        dateOfYear: this.gallery.gallery.dateOfYear
      }
    };
    this.store.dispatch({
      type: 'gallery',
      payload: data
    });

    this.galleryService.saveGallery(data.gallery).subscribe((res) => {
      console.log('res', res);
    });
    
  }

  onPopulate(): void {
    this.galleryService.getGallery().subscribe((res) => {
      this.galleryData = res;
    });
  }

  private populateFields() {
    this.store.pipe(select(state => state)).subscribe((res) => {
      if (res && res.gallery) {
        this.gallery.gallery = res.gallery;
      }
    }).unsubscribe();
  }

}
