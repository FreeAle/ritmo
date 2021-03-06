import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({ name: 'sainitizeHtml', pure: false })
export class sanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
  
}