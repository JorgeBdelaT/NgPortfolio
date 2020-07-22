import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

@NgModule({
  declarations: [ExperiencePageComponent],
  imports: [CommonModule, ExperiencePageRoutingModule],
})
export class ExperiencePageModule {}
