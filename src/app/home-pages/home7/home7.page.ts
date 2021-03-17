import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonSlides, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { PrivacyPolicyPage } from '../../modals/privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../../modals/term-services/term-services.page';
import { RefundPolicyPage } from '../../modals/refund-policy/refund-policy.page';
import { BlankModalPage } from 'src/app/modals/blank-modal/blank-modal.page';

@Component({
  selector: 'app-home7',
  templateUrl: './home7.page.html',
  styleUrls: ['./home7.page.scss'],
})
export class Home7Page implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('recentSlider', { static: false }) slider: IonSlides;
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  segments = "topSeller"//first segment by default 
  scrollTopButton = false;//for scroll down fab 
  //for product slider after banner
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }

  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  page = 1;

  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
  ) { }

  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }
  openProducts(value) {
    this.nav.navigateForward(this.config.currentRoute + "/products/0/0/" + value);
  }

  
  ngOnInit() {
   
  }
  async showModal(value) {
    if (value == 'privacyPolicy') {
      let modal = await this.modalCtrl.create({
        component: PrivacyPolicyPage
      });
      return await modal.present();
    }
    else if (value == 'termServices') {
      let modal = await this.modalCtrl.create({
        component: TermServicesPage
      });
      return await modal.present();
    }
    else {
      let modal = await this.modalCtrl.create({
        component: RefundPolicyPage
      });
      return await modal.present();
    }
  }
  async showModal2(value) {
    if (value == 'blankModal') {
      let modal = await this.modalCtrl.create({
        component: BlankModalPage
      });
      return await modal.present();
    }
  }

  ionViewWillEnter() {
    this.config.setCardStyle("15");
  }
}
