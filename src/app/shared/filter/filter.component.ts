import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  async openModal() {
    const modal = await this.modalController.create({
      component: FilterModalComponent
    });
    return await modal.present();
  }
}
