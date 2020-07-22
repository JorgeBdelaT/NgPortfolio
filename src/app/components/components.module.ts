import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    NotFoundComponent,
    SideBarComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavBarComponent,
    NotFoundComponent,
    SideBarComponent,
  ],
})
export class ComponentsModule {}
