import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMePageRoutingModule } from './about-me-page-routing.module';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, AboutMePageRoutingModule, ComponentsModule],
})
export class AboutMePageModule {}
