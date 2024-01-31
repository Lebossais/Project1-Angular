import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationRecetteComponent } from './form-creation-recette.component';

describe('FormCreationRecetteComponent', () => {
  let component: FormCreationRecetteComponent;
  let fixture: ComponentFixture<FormCreationRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreationRecetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreationRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
