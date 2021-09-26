import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowjobComponent } from './showjob.component';

describe('ShowjobComponent', () => {
  let component: ShowjobComponent;
  let fixture: ComponentFixture<ShowjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
