import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcomponentComponent } from './pcomponent.component';

describe('PcomponentComponent', () => {
  let component: PcomponentComponent;
  let fixture: ComponentFixture<PcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
