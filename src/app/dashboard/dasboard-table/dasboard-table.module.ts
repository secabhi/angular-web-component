import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardTableComponent } from './dasboard-table.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [DasboardTableComponent],
  imports: [CommonModule],
  exports: [DasboardTableComponent],
  entryComponents: [DasboardTableComponent],
})
export class DasboardTableModule {
  constructor(private injector: Injector) {
    const CustomElm = createCustomElement(DasboardTableComponent, {
      injector,
    });
    customElements.define('dashboard-table', CustomElm);
  }
}
