import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  content: any;
  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  addTile(ele): void {
    this._add(ele);
  }

  _add(ele: string): void {
    // TODO: Add custom element to page
    // const content = document.getElementById('content');
    // if (content.hasChildNodes()) {
    //   content.innerHTML = null;
    // }
    // const tile = document.createElement(ele);
    // content.appendChild(tile);
    this.content = null;
    this.content = this.domSanitizer.bypassSecurityTrustHtml(ele);
  }
}
