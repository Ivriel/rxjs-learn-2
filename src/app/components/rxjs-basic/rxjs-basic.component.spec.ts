import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasicComponent } from './rxjs-basic.component';

describe('RxjsBasicComponent', () => {
  let component: RxjsBasicComponent;
  let fixture: ComponentFixture<RxjsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
