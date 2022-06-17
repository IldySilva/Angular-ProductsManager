import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProductsDetailsComponent } from './see-products-details.component';

describe('SeeProductsDetailsComponent', () => {
  let component: SeeProductsDetailsComponent;
  let fixture: ComponentFixture<SeeProductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeProductsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
