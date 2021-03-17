import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-blank-modal',
  templateUrl: './blank-modal.page.html',
  styleUrls: ['./blank-modal.page.scss'],
})
export class BlankModalPage implements OnInit {

  constructor(public mdCtrl: ModalController,
    public config: ConfigService) {

  }

  ngOnInit() {

  }
  dismiss() {
    this.mdCtrl.dismiss();
  }
}
