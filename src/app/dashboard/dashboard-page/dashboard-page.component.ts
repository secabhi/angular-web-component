import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  content: any;
  tileData = ['one', 'two', 'three'];
  constructor(
    private domSanitizer: DomSanitizer,
    private httpservice: HttpServiceService
  ) {}

  ngOnInit(): void {
    this.httpservice.tileData.subscribe((data) => {
      console.log(data);
    });
  }

  addTile(ele): void {
    this._add(ele);
  }

  _add(ele: string): void {
    // TODO: Add custom element to page
    const content = document.getElementById('content');
    if (content.hasChildNodes()) {
      content.innerHTML = null;
    }

    const tile = document.createElement(ele);
    tile.setAttribute('data', '' + this.tileData);
    tile.addEventListener('updateData', (e: any) => {
      console.log(e.detail);
    });
    content.appendChild(tile);
    // this.content = null;
    // this.content = this.domSanitizer.bypassSecurityTrustHtml(ele);
  }
}
