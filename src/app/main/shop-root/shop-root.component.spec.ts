import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopRootComponent } from './shop-root.component';

describe('ShopRootComponent', () => {
  let component: ShopRootComponent;
  let fixture: ComponentFixture<ShopRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
