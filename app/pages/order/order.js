import {Page, ViewController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/order/order.html'
})
export class OrderModal {
  static get parameters() {
    return [[NavParams], [ViewController]];
  }
  constructor(params, viewCtrl) {
    this.item = params.get('sandwich');
    this.viewCtrl = viewCtrl;
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}
