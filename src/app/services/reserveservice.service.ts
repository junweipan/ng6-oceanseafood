import {Injectable, OnInit} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Reservation  } from './reservation.model';
@Injectable()
export class ReserveserviceService implements OnInit {
  reservationList: AngularFireList<any>;
  selectedReservation: Reservation = new Reservation();

  constructor(private firebase: AngularFireDatabase) {
    this.reservationList = this.firebase.list('reservations');
  }
  ngOnInit(): void {}
    insertReservation(reservation: Reservation) {
      // const datetime = new Date(reservation.book_date).getTime();
      const datetime = new Date(new Date(reservation.book_date).toDateString()).getTime().toString();
      const orig_status = 'Unconfirmed';
      const submitted_time = new Date().getTime().toString();
      console.log('date time : ' + datetime);
      if (reservation.book_message.length === 0) {
        reservation.book_message = 'no message left';
      }
      // const itemsRef = this.firebase.list('reservations');
      // itemsRef.push({ name: 'sky' });
      // console.log('test ref');
      // console.log(itemsRef);
      const obj = {
        first_name: reservation.first_name,
        last_name: reservation.last_name,
        no_of_children: reservation.no_of_children,
        no_of_people: reservation.no_of_people,
        phone: reservation.phone,
        book_date: datetime,
        session: reservation.session,
        book_message: reservation.book_message,
        confirm_status: orig_status,
        submitted_time: submitted_time,
        deleteFlag: 'false'
        // colum1: reservation.colum1,
        // colum2: reservation.colum2,
        // colum3: reservation.colum3
      };
      console.log(obj);
      console.log(this.reservationList);
      this.reservationList.push(obj);
    }
}
