import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobFormComponent } from './edit-job-form.component';

describe('EditJobFormComponent', () => {
  let component: EditJobFormComponent;
  let fixture: ComponentFixture<EditJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJobFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
