import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonebookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonebook-detail',
  templateUrl: 'phonebook-detail.html',
})
export class PhonebookDetailPage {

  contact = { name: '', telephone: '', imageUrl: '' };


  constructor(public navCtrl: NavController, public navP: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhonebookDetailPage');
    this.contact = this.navP.data;
    console.log(this.contact);

  }

}
