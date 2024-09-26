import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualInfoComponent } from './individual-info.component';

describe('IndividualInfoComponent', () => {
  let component: IndividualInfoComponent;
  let fixture: ComponentFixture<IndividualInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
