import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicGetterSetterComponent } from './magic-getter-setter.component';

describe('MagicGetterSetterComponent', () => {
  let component: MagicGetterSetterComponent;
  let fixture: ComponentFixture<MagicGetterSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicGetterSetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicGetterSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw an error for setting invalid magic name', () => {
    expect(function() { component.name = '' } ).toThrow(new Error('Magic name should not be empty!'));
  })
});
