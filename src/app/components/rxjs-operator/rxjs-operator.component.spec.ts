import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorComponent } from './rxjs-operator.component';

describe('RxjsOperatorComponent', () => {
  let component: RxjsOperatorComponent;
  let fixture: ComponentFixture<RxjsOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
