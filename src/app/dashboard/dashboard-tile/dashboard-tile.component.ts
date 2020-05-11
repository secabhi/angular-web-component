import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
})
export class DashboardTileComponent implements OnInit {
  @Input() data;
  @Output() updateData = new EventEmitter();
  text: any;

  constructor(private httpservice: HttpServiceService) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  updateText(e) {
    this.text = e.target.value;
  }
  updateTextData() {
    //this.updateData.emit({ data: this.text });
    this.httpservice.getData();
  }
}
