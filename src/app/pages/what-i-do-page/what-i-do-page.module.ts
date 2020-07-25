import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIDoPageRoutingModule } from './what-i-do-page-routing.module';
import { WhatIDoPageComponent } from './what-i-do-page/what-i-do-page.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [WhatIDoPageComponent],
  imports: [CommonModule, WhatIDoPageRoutingModule, ComponentsModule],
})
export class WhatIDoPageModule {}
