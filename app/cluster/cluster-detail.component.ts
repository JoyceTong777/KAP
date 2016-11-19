import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tg-cluster-detail',
  moduleId: module.id,
  templateUrl: 'cluster-detail.component.html'
  
})

export class ClusterDetailComponent implements OnInit {

 // rawUrl = 'https://www.baidu.com';
  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute) { 
  //  this.trustedUrl = sanitizer.bypassSecurityTrustResourceUrl(this.rawUrl);
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://'+ params['ip']));
  }
}
