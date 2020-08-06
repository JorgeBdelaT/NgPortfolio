import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactPageRoutingModule, ComponentsModule],
})
export class ContactPageModule {}
