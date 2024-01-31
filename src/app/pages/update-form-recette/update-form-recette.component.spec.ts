import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormRecetteComponent } from './update-form-recette.component';

describe('UpdateFormRecetteComponent', () => {
  let component: UpdateFormRecetteComponent;
  let fixture: ComponentFixture<UpdateFormRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFormRecetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFormRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
