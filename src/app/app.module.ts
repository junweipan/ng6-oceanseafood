import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {AngularFireModule} from '@angular/fire';
import {AgmCoreModule} from '@agm/core';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { ReserveserviceService} from './services/reserveservice.service';
import {BookingsComponent} from './bookings/bookings.component';
import {HomeComponent} from './user/home/home.component';
import {ContactComponent} from './user/contact/contact.component';
import {NavbarComponent} from './user/navbar/navbar.component';
import {NewsComponent} from './user/news/news.component';
import {FooterComponent} from './user/footer/footer.component';
import {MenuComponent} from './user/menu/menu.component';
import {UserComponent} from './user/user.component';
import {OfferComponent} from './user/offer/offer.component';
import {AboutComponent} from './user/about/about.component';
import {GalleryComponent} from './user/gallery/gallery.component';
import {BookingComponent} from './bookings/booking/booking.component';
import {NgxGalleryModule} from 'ngx-gallery';
import { NewGalleryComponent } from './user/new-gallery/new-gallery.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'book', component: BookingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    OfferComponent,
    MenuComponent,
    NewsComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    UserComponent,
    BookingsComponent,
    BookingComponent,
    NewGalleryComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAgjxLOMflam6_646mkR686HaTQ7K2nFP0'
    }),
    NgbModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [ReserveserviceService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule { }
