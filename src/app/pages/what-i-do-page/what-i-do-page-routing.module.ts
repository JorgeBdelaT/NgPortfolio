import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatIDoPageComponent } from './what-i-do-page/what-i-do-page.component';

const routes: Routes = [{ path: '', component: WhatIDoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatIDoPageRoutingModule {}
