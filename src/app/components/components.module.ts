import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TypingBoxComponent } from './typing-box/typing-box.component';
import { TypingComponent } from './typing-box/typing/typing.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavBarComponent,
    NotFoundComponent,
    SideBarComponent,
    TypingBoxComponent,
    TypingComponent,
    CardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    NavBarComponent,
    NotFoundComponent,
    SideBarComponent,
    TypingBoxComponent,
    CardComponent,
  ],
})
export class ComponentsModule {}
