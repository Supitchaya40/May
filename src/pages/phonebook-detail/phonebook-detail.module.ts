import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonebookDetailPage } from './phonebook-detail';

@NgModule({
  declarations: [
    PhonebookDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonebookDetailPage),
  ],
})
export class PhonebookDetailPageModule {}
