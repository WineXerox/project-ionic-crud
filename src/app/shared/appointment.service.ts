import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt:any) {
    return this.db.list('Booking').push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/Booking/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/Booking');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/Booking/' + id);
    this.bookingRef.remove();
  }
}
