import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContentComponent } from './dashboard-content.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [DashboardContentComponent],
  imports: [CommonModule],
  exports: [DashboardContentComponent],
  entryComponents: [DashboardContentComponent],
})
export class DashboardContentModule {
  constructor(private injector: Injector) {
    const CustomElm = createCustomElement(DashboardContentComponent, {
      injector,
    });
    customElements.define('dashboard-content', CustomElm);
  }
}
