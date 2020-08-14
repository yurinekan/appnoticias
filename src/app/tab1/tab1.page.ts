import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from './../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  nameTrue = true;
  name;
  user: User;
  public fGroup: FormGroup;
  constructor(public navCtrl: NavController, public fBuilder: FormBuilder, private storage: Storage) {
    this.fGroup = this.fBuilder.group({
      'name': [this.name, Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$')
      ])]});
  }
  ngOnInit() {
  }
  start() {
    this.navCtrl.navigateRoot('/tabs/noticias')
    console.log(this.name)
    this.user = new User(this.name)
    this.storage.set('user', this.user);
  }
}
