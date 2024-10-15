import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaratulaComponent } from './caratula.component';

describe('CaratulaComponent', () => {
  let component: CaratulaComponent;
  let fixture: ComponentFixture<CaratulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaratulaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaratulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
