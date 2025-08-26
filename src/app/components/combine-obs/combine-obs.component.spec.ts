import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineObsComponent } from './combine-obs.component';

describe('CombineObsComponent', () => {
  let component: CombineObsComponent;
  let fixture: ComponentFixture<CombineObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
