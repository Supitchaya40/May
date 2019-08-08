import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{ name: 'ma', telephone: '0985156537', imageUrl: 'assets/imgs/D1.jpg' },
                  { name: 'taew', telephone: '0971456874', imageUrl: 'assets/imgs/D2.jpg' },
                  { name: 'fa', telephone: '0923547489', imageUrl: 'assets/imgs/D3.jpg' },
                  { name: 'tangmo', telephone: '0984571247', imageUrl: 'assets/imgs/D4.jpg' },
                  { name: 'ice', telephone: '0874894114', imageUrl: 'assets/imgs/D5.jpg' },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetialPage');
  }
  viewDetial(item){

    this.navCtrl.push("PhonebookDetailPage", item);
  }

}//n
