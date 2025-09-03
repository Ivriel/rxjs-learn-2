import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexjsReactiveFormComponent } from './rexjs-reactive-form.component';

describe('RexjsReactiveFormComponent', () => {
  let component: RexjsReactiveFormComponent;
  let fixture: ComponentFixture<RexjsReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RexjsReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RexjsReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
