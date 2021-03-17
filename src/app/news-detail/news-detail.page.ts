import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  post: any;
  htmlContent: any;
  htmlTitle: any;
  constructor(public shared: SharedDataService, private domSanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.post = this.shared.singlePostData;
    let self = this;
			if ( self.post.content) {
				self.htmlContent = self.domSanitizer.bypassSecurityTrustHtml(self.post.content.rendered)
        }
        console.log(this.post)
      if(self.post.title){
        self.htmlTitle = self.domSanitizer.bypassSecurityTrustHtml(self.post.title.rendered)
      }  
  }

}
