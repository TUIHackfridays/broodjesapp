import {Page} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {App, Platform, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class Login {
  static get parameters() {
    return [[NavController], [Platform]];
  }

  constructor(nav, platforml) {
    this.nav = nav;
  }

  login(){
    this.nav.push( TabsPage );
  }
}
