import { Component, OnInit, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { SignUpPage } from '../sign-up/sign-up.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isActiveToggleTextPassword: Boolean = true;
  hideGuestLogin = false;
  count: number = 6
  formData = { username: '', password: '' };
  errorMessage = '';
  

  public toggleTextPassword(): void{
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword==true)?false:true;
}
public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
}
  constructor(
    public http: HttpClient,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public shared: SharedDataService,
    private fb: Facebook,
    private applicationRef: ApplicationRef,
    public navCtrl: NavController,
    public appEventsService: AppEventsService,
    public navParams: NavParams,
    private alertController: AlertController
  ) {
    this.hideGuestLogin = navParams.get('hideGuestLogin');
    console.log(this.hideGuestLogin);
  }
  // <!-- 2.0 updates -->
  guestLogin() {
    if (this.config.checkOutPage == 1)
      this.shared.onePageCheckOut();
    else
      this.appEventsService.publish('openShippingAddressPage', "");

    this.dismiss();
  }
  

  login() {
    this.loading.show();
    this.errorMessage = '';
    var formData = new FormData();
    formData.append("username", this.formData.username);
    formData.append("password", this.formData.password);
    this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).subscribe((data: any) => {
      if (data.status == "ok")
        this.getUserData(data, "simple");
        
      else {
        this.errorMessage = data.error;
        this.loading.hide();

      }
    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        this.errorMessage = "Invalid Username or Password";
        this.count;
      }
    });
    // this.config.getWoo("customers/" + 118 + "?" + this.config.productsArguments).then((data:any) => {
    //   this.loading.hide();
    //   this.shared.login(data);
    //   //console.log(this.shared.customerData);
    //   this.dismiss();
    //   this.applicationRef.tick();
    // });
  }
  countup()
  {
    this.count--;  //instead of reinitializing, we are using already initialized variable
    console.log(JSON.stringify(this.count));
    if(this.count == 0){
      this.presentAlert2();
    }
    if (this.count === 4){
      this.presentAlert1();
    }else {
      console.log(this.count);
    }
  }

  
  getUserData(c, type) {
    let id;
    if (type == "simple") id = c.user.id;
    if (type == "fb") id = c.id;
    //alert(c.user.id + " -- " + c.id + " --- " + id);
    this.config.getWoo("customers/" + id + "?" + this.config.productsArguments).then((data: any) => {
      this.loading.hide();
      let dat = data
      //alert(JSON.stringify(dat));
      this.shared.login(Object.assign({ cookie: c.cookie }, dat));
      // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));
      this.dismiss();
      this.applicationRef.tick();
    });
  }
  async openSignUpPage() {
    const modal = await this.modalCtrl.create({
      component: SignUpPage
    });
    return await modal.present();
  }
  async openForgetPasswordPage() {
    const modal = await this.modalCtrl.create({
      component: ForgotPasswordPage
    });
    return await modal.present();
  }

  facebookLogin() {
    this.fb.getLoginStatus().then((res: any) => {
      if (res.status == 'connected') {
        console.log("user connected already" + res.authResponse.accessToken);
        this.createAccount(res.authResponse.accessToken, 'fb');

      }
      else {
        console.log("USer Not login ");
        this.fb.login(['public_profile', 'user_friends', 'email'])
          .then((res: FacebookLoginResponse) => {
            // this.shared.showAlert('Logged into Facebook!' + JSON.stringify(res));
            console.log("successfully login ");
            this.createAccount(res.authResponse.accessToken, 'fb');
          })
          .catch(e => console.log('Error logging into Facebook' + JSON.stringify(e)));
      }
    }).catch(e => console.log('Error Check Login Status Facebook' + JSON.stringify(e)));
  }

  // googleLogin() {
  //   this.loading.autoHide(500);
  //   this.googlePlus.login({})
  //     .then(res => {
  //       //  alert(JSON.stringify(res))
  //       this.createAccount(res, 'google');
  //     })
  //     .catch(err => this.shared.showAlert(JSON.stringify(err)));
  // }
  //============================================================================================  
  //creating new account using function facebook or google details 
  createAccount(info, type) {
    //this.formData.username = info;
    // alert(info);
    this.loading.show();
    var url = '';
    url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;


    this.http.get(this.config.url + url).subscribe((data: any) => {
      this.loading.hide();
      //alert(JSON.stringify(data));
      this.getUserData(data, "fb");

    }, error => {
      this.loading.hide();
      //this.shared.showAlert("error " + JSON.stringify(error));
    });
  };
  //close modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    
  }

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      subHeader: '',
      message: 'Per ragioni di sicurezza, dopo 6 tentativi errati il sistema si blocca per 15 minuti.',
      buttons: ['OK'],
      cssClass: 'secondary',
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Attenzione',
      subHeader: '',
      message: 'Attendere 15min prima di riprovare. Ulteriori tentativi bloccheranno il login per 24h',
      buttons: ['OK'],
      cssClass: 'secondary',
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }


}
