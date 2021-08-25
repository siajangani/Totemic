import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonaaciComponent } from './fibonaaci.component';
import { FibonaaciPipe } from './fibonaaci.pipe';
import { FibonaaciService } from './fibonaaci.service';

describe('FibonaaciComponent', () => {
  let component: FibonaaciComponent;
  let fixture: ComponentFixture<FibonaaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonaaciComponent, FibonaaciPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonaaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

 
describe('FibonaaciService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [FibonaaciService]
  }));
 
  it('should return valid fibonaaci value for 10', () => {
    const service: FibonaaciService = TestBed.inject(FibonaaciService);
    expect(service.getFibonaaci(10)).toEqual(55);
  });
 
  it('should return valid fibonaaci value for 8', () => {
    const service: FibonaaciService = TestBed.inject(FibonaaciService);
    expect(service.getFibonaaci(8)).toEqual(21);
  });
});
