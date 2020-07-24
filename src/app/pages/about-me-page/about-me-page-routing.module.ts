import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

const routes: Routes = [{ path: '', component: AboutMePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMePageRoutingModule {}
