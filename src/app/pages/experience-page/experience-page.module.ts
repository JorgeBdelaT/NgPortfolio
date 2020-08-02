import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencePageRoutingModule } from './experience-page-routing.module';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ExperiencePageComponent],
  imports: [CommonModule, ExperiencePageRoutingModule, ComponentsModule],
})
export class ExperiencePageModule {}
