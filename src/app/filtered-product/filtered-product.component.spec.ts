import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredProductComponent } from './filtered-product.component';

describe('FilteredProductComponent', () => {
  let component: FilteredProductComponent;
  let fixture: ComponentFixture<FilteredProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredProductComponent]
    });
    fixture = TestBed.createComponent(FilteredProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
