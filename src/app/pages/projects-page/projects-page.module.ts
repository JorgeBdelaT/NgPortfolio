import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ProjectsPageComponent],
  imports: [CommonModule, ProjectsPageRoutingModule, ComponentsModule],
})
export class ProjectsPageModule {}
