import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsPageRoutingModule } from './skills-page-routing.module';
import { SkillsPageComponent } from './skills-page/skills-page.component';

@NgModule({
  declarations: [SkillsPageComponent],
  imports: [CommonModule, SkillsPageRoutingModule],
})
export class SkillsPageModule {}
