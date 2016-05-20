import {Page, Modal, NavController} from 'ionic-angular';
import {OrderModal} from '../order/order';
import {Http} from '@angular/http';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  static get parameters() {
    return [[NavController],[Http]];
  }

  constructor(nav, http) {
    this.http = http;

    var result = http.get("http://localhost/api/1/sandwich" ).subscribe(
      response => this.items = response.json()
    );

    this.nav = nav;
  }

  itemSelected(item) {
    let orderModal = Modal.create(OrderModal, {sandwich: item});
    this.nav.present(orderModal);
  }
}
