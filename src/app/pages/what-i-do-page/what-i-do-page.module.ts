import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIDoPageRoutingModule } from './what-i-do-page-routing.module';
import { WhatIDoPageComponent } from './what-i-do-page/what-i-do-page.component';

@NgModule({
  declarations: [WhatIDoPageComponent],
  imports: [CommonModule, WhatIDoPageRoutingModule],
})
export class WhatIDoPageModule {}
