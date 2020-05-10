import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { DashboardTileComponent } from './dashboard-tile.component';

@NgModule({
  declarations: [DashboardTileComponent],
  exports: [DashboardTileComponent],
  entryComponents: [DashboardTileComponent],
  imports: [CommonModule],
})
export class DashboardTileModule {
  constructor(private injector: Injector) {
    const CustomElm = createCustomElement(DashboardTileComponent, { injector });
    customElements.define('dashboard-tile', CustomElm);
  }
}
