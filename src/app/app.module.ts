import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { createCustomElement } from '@angular/elements';
import { DasboardTableModule } from './dashboard/dasboard-table/dasboard-table.module';
import { DashboardContentModule } from './dashboard/dashboard-content/dashboard-content.module';
import { DashboardTileModule } from './dashboard/dashboard-tile/dashboard-tile.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    BrowserModule,
    DasboardTableModule,
    DashboardContentModule,
    DashboardTileModule,
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [DashboardPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const CustomElm = createCustomElement(DashboardPageComponent, {
      injector: this.injector,
    });
    customElements.define('dashboard-page', CustomElm);
  }
}
