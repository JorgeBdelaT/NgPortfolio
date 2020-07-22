import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIDoPageComponent } from './what-i-do-page.component';

describe('WhatIDoPageComponent', () => {
  let component: WhatIDoPageComponent;
  let fixture: ComponentFixture<WhatIDoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WhatIDoPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIDoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
