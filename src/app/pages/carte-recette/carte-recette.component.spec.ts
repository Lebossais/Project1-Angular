import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRecetteComponent } from './carte-recette.component';

describe('CarteRecetteComponent', () => {
  let component: CarteRecetteComponent;
  let fixture: ComponentFixture<CarteRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteRecetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
