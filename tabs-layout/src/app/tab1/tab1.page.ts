import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {NavigationExtras} from "@angular/router";
import {JSX} from "ionicons";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {

  id = 1;
  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    console.log('Tab1Page ngOnInit ')
  }

  ionViewWillEnter() {
    console.log('Tab1Page ionViewWillEnter')
  }

  ionViewDidEnter() {
    console.log('Tab1Page ionViewDidEnter')
  }

  ionViewWillLeave() {
    console.log('Tab1Page ionViewWillLeave')
  }

  ionViewDidLeave() {
    console.log('Tab1Page ionViewDidLeave')
  }
  redirect() {

    const data = {name: 'abc', id: this.id}

    const navData: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data)
      }
    }

     this.navCtrl.navigateForward('tabs/items/' + this.id)
  }

  ngOnDestroy() {
    console.log('Tab1Page OnDestroy')
  }

}
