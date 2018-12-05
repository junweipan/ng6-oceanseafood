import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-new-gallery',
  templateUrl: './new-gallery.component.html',
  styleUrls: ['./new-gallery.component.css']
})
export class NewGalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'src/assets/images/menu_1.jpg',
        medium: 'src/assets/images/menu_1.jpg',
        big: 'src/assets/images/menu_1.jpg'
      },
      {
        small: 'src/assets/images/menu_2.jpg',
        medium: 'src/assets/images/menu_2.jpg',
        big: 'src/assets/images/menu_2.jpg'
      },
      {
        small: 'src/assets/images/menu_3.jpg',
        medium: 'src/assets/images/menu_3.jpg',
        big: 'src/assets/images/menu_3.jpg'
      }
    ];
  }

}
