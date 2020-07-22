import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

const routes: Routes = [{ path: '', component: ExperiencePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencePageRoutingModule {}
