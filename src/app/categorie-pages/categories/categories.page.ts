import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  parent: any;
  name: any;
  sku: any;
  categories: any = [];
  constructor(
    public shared: SharedDataService,
    public config: ConfigService,
    public router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.parent = this.activatedRoute.snapshot.paramMap.get('parent');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    if (this.parent == undefined) this.parent = 0;
    if (this.name == undefined) this.name = 0;
    if (this.name == 0) this.name = "Categories";
  }
  openProducts(id, name) {
    let count = 0;
    for (let val of this.shared.allCategories) {
      if (val.parent == id) {
        count++;
      }
    }
    if (count == 0) {
      this.router.navigateByUrl(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
    }
    else {
      this.router.navigateByUrl(this.config.currentRoute + "/categories/" + id + "/" + name);
    }

  }
  openParentProducts() {
    this.router.navigateByUrl(this.config.currentRoute + "/products/" + this.parent + "/" + this.name + "/_sku");
  }
}
