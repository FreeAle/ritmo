import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AlertController, IonInfiniteScroll, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';



@Component({
  selector: 'app-news',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})

export class NewsPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  featuredPosts = new Array;
  segments = 'newest';
  editore = 'on';
  items =[];
  //WordPress intergation
  categories = new Array;
  categories11 = new Array;
  categories111 = new Array;
  categories1111 = new Array;
  categories2 = new Array;
  //page varible
  abilitato = false;
  abilitato2 = false;
  page = 1;
  postprivati: any;

  //WordPress intergation
  posts = new Array;
  //page varible
  page2 = 1;
  loadingServerDataPosts = true;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public config: ConfigService,
    public loading: LoadingService,
    public shared: SharedDataService,
    private alertCtrl: AlertController,) {

    var dat: { [k: string]: any } = {};
    dat.language_id = this.config.langId;
    dat.is_feature = 1;
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?sticky=true&page=' + this.page2 + "&" + this.config.productsArguments).then((data: any) => {
      data.forEach((value, index) => {

        this.getImagePost(value);
      });
      this.featuredPosts = data;
    });

    

  }
  getImagePost(post) {
    post.image = "assets/placeholder.png";
    if (post._links["wp:featuredmedia"])
      this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then((data: any) => {
        post.image = data.source_url;
      });
  }

  
 
  //========================================= tab newest categories ===============================================================================
  
  //Bonus
  getCategories3() {
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/19').then((data: any) => {
      if (this.page2 == 1) { this.categories = []; }
      this.categories = data;
      // console.log(data.data.length);
      if (data.length == 0) {// if we get less than 10 products then infinite scroll will de disabled
        //this.shared.toast("All Categories Loaded!");
        this.getRandomImage();
      }
      else this.getCategories3();
    }, function (response) {
      // console.log("Error while loading categories from the server");
      // console.log(response);
    });
  };
  //Aggiornamenti 2020
  getCategories11() {
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/20').then((data: any) => {
      if (this.page2 == 1) { this.categories11 = []; }
      this.categories11 = data;
      // console.log(data.data.length);
      if (data.length == 0) {// if we get less than 10 products then infinite scroll will de disabled
        //this.shared.toast("All Categories Loaded!");
        this.getRandomImage();
      }
      else this.getCategories11();
    }, function (response) {
      // console.log("Error while loading categories from the server");
      // console.log(response);
    });
  };
  //Aggiornamenti 2021
  getCategories111() {
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/21').then((data: any) => {
      if (this.page2 == 1) { this.categories111 = []; }
      this.categories111 = data;
      // console.log(data.data.length);
      if (data.length == 0) {// if we get less than 10 products then infinite scroll will de disabled
        //this.shared.toast("All Categories Loaded!");
        this.getRandomImage();
      }
      else this.getCategories111();
    }, function (response) {
      // console.log("Error while loading categories from the server");
      // console.log(response);
    });
  };
  //Maculele
  getCategories1111() {
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/22').then((data: any) => {
      if (this.page2 == 1) { this.categories1111 = []; }
      this.categories1111 = data;
      // console.log(data.data.length);
      if (data.length == 0) {// if we get less than 10 products then infinite scroll will de disabled
        //this.shared.toast("All Categories Loaded!");
        this.getRandomImage();
      }
      else this.getCategories1111();
    }, function (response) {
      // console.log("Error while loading categories from the server");
      // console.log(response);
    });
  };
  //Jump
  getCategories2() {
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/categories/3').then((data: any) => {
      if (this.page2 == 1) { this.categories2 = []; }
      this.categories2 = data;
      // console.log(data.data.length);
      if (data.length == 0) {// if we get less than 10 products then infinite scroll will de disabled
        //this.shared.toast("All Categories Loaded!");
        this.getRandomImage();
      }
      else this.getCategories2();
    }, function (response) {
      // console.log("Error while loading categories from the server");
      // console.log(response);
    });
  };
  
  //============================================================================================  
  //getting list of posts
  getPosts3() {
    if (this.page == 1) { this.loading.show(); this.loadingServerDataPosts = false; }
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&" + this.config.productsArguments).then((data: any) => {

      this.infinite.complete();//stopping infinite scroll loader
      if (this.page == 1) { this.posts = []; this.infinite.disabled = false; this.loading.hide(); this.getCategories11(); }
      this.page++;
      data.forEach((value, index) => {
        this.getImagePost(value);
        this.posts.push(value);
      });

      if (data.length < 9) {// if we get less than 10 products then infinite scroll will de disabled

        this.infinite.disabled = true;//disabling infinite scroll
        if (this.posts.length != 0) {
          //this.shared.toast("All Posts Loaded!");
        }
      }

      this.loadingServerDataPosts = true;
    }, err => {
      this.infinite.disabled = true;
      // console.log("Error while loading posts from the server");
      // console.log(response);
    });

  };
  getPosts1() {
    if (this.page == 1) { this.loading.show(); this.loadingServerDataPosts = false; }
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + "2" + "&" + this.config.productsArguments).then((data: any) => {

      this.infinite.complete();//stopping infinite scroll loader
      if (this.page == 1) { this.posts = []; this.infinite.disabled = false; this.loading.hide(); this.getCategories111(); }
      this.page++;
      data.forEach((value, index) => {
        this.getImagePost(value);
        this.posts.push(value);
      });

      if (data.length < 9) {// if we get less than 10 products then infinite scroll will de disabled

        this.infinite.disabled = true;//disabling infinite scroll
        if (this.posts.length != 0) {
          //this.shared.toast("All Posts Loaded!");
        }
      }

      this.loadingServerDataPosts = true;
    }, err => {
      this.infinite.disabled = true;
      // console.log("Error while loading posts from the server");
      // console.log(response);
    });

  };
  getPosts2() {
    if (this.page == 1) { this.loading.show(); this.loadingServerDataPosts = false; }
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + "3" + "&" + this.config.productsArguments).then((data: any) => {

      this.infinite.complete();//stopping infinite scroll loader
      if (this.page == 1) { this.posts = []; this.infinite.disabled = false; this.loading.hide(); this.getCategories1111(); }
      this.page++;
      data.forEach((value, index) => {
        this.getImagePost(value);
        this.posts.push(value);
      });
      this.posts.concat(data);
      if (data.length < 9) {// if we get less than 10 products then infinite scroll will de disabled

        this.infinite.disabled = true;//disabling infinite scroll
        if (this.posts.length != 0) {
          //this.shared.toast("All Posts Loaded!");
        }
      }

      this.loadingServerDataPosts = true;
    }, err => {
      this.infinite.disabled = true;
      // console.log("Error while loading posts from the server");
      // console.log(response);
    });

  };
  async presentAlert() {
    let alert = this.alertCtrl.create({
      message: 'Low battery',
      buttons: ['Dismiss']
    });
    (await alert).present();
  }

  //============================================================================================  
  //getting list of sub categories from the server
  showPostDetail(post) {
    this.shared.singlePostData = post;
    console.log(post)

    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/news-detail");
    else
      this.navCtrl.navigateForward("/news-detail");
  };
  openPostsPage(name, id) {
    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/news-list/" + id + "/" + name);
    else
      this.navCtrl.navigateForward("/news-list/" + id + "/" + name);
  }

  ionViewWillEnter() {
    if (this.config.admob == 1) this.shared.showAd();
  }
  // <!-- 2.0 updates -->
  getRandomImage() {
    try {
      this.categories.forEach((value, index) => {
        value.image = "assets/placeholder.png";
        let rand = this.getRandomPost();
        if (rand._links["wp:featuredmedia"])
          this.config.getWithUrl(rand._links["wp:featuredmedia"][0].href).then((data: any) => {
            value.image = data.source_url;
            console.log(value.image);
          });
      });

    } catch (error) {

    }
  }
  getRandomPost() {
    let rand = this.posts[Math.floor(Math.random() * this.posts.length)];
    if (rand.sticky == false) return rand;
    else this.getRandomPost();
  }
  ngOnInit() {
    // Jump
    if(this.shared.customerData.role == 'editor'){
      this.getPosts2();
      this.getCategories2();
      this.abilitato= true;
      this.abilitato2 = false;
      console.log('sei jump')
    }else{
      console.log('non sei jump')
    }
    //solo Ritmo
    if(this.shared.customerData.role == 'author'){
      this.getPosts1();
      this.getCategories3();
      this.getCategories11();
      this.getCategories111();
      this.getCategories1111();
      console.log('sei sambafit')
      this.abilitato = false;
      this.abilitato2 = true;
    }else{
      console.log('non sei sambafit')

    }
    //
    if(this.shared.customerData.role == 'contributor'){
      this.getPosts3()
      this.getCategories3();
      this.getCategories11();
      this.getCategories111();
      this.getCategories1111();
      this.getCategories2();
      this.abilitato = true;
      this.abilitato2 = true;
    }else{
      console.log('non sei contributor')
    }
    
  }

}
