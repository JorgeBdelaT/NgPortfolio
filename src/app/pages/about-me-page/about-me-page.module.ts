import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, AboutMePageRoutingModule],
})
export class AboutMePageModule {}
