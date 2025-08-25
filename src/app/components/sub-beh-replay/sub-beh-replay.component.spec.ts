import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBehReplayComponent } from './sub-beh-replay.component';

describe('SubBehReplayComponent', () => {
  let component: SubBehReplayComponent;
  let fixture: ComponentFixture<SubBehReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBehReplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBehReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
