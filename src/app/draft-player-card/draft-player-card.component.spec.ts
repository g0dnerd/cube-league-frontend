import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftPlayerCardComponent } from './draft-player-card.component';

describe('DraftPlayerCardComponent', () => {
  let component: DraftPlayerCardComponent;
  let fixture: ComponentFixture<DraftPlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftPlayerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
