import { Component, OnInit } from '@angular/core';
import {ReserveserviceService} from '../../services/reserveservice.service';
import {ToastrService} from 'ngx-toastr';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  constructor(public reservationservice: ReserveserviceService,
              private tostr: ToastrService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 60);
  }

  ngOnInit() {
    this.resetForm();
  }
  isWeekend() {
    const day = new Date(this.reservationservice.selectedReservation.book_date.toString());
    const today = day.getDay();
    if (today === 5 || today === 6 || today === 0) {
      // console.log('weekend!');
      return true;
    } else {
      // console.log('weekday!');
      return false;
    }
  }
  onSubmit(reservationForm: NgForm) {
    // if the key is null, it is a new item, use insert, else use update
    if (reservationForm.value.$key === null) {
      this.reservationservice.insertReservation(reservationForm.value);
      this.tostr.success('Submitted Successfully', 'Reservation Register');
      // after submitting, go back to home page in 1 second
      setTimeout(() => {
        window.location.href = '/';
      }, 5000);
    } else {
      this.tostr.warning('Submitted failed, please phone the restaurant', 'Reservation Register');
    }
    this.resetForm(reservationForm);
  }
  resetForm(reservationForm?: NgForm) {
    if (reservationForm != null) {
      reservationForm.reset();
    }
    this.reservationservice.selectedReservation = {
      $key: null,
      first_name: '',
      last_name: '',
      no_of_children: '',
      no_of_people: '',
      phone: '',
      book_date: '',
      session: '',
      book_message: '',
      confirm_status: '',
      submitted_time: '',
      deleteFlag: ''
    };
  }

  returnHome() {
    window.location.href = '/';
  }

}
