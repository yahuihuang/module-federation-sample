import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfeOrderComponent } from './mfe-order-component';

describe('MfeOrderComponent', () => {
  let component: MfeOrderComponent;
  let fixture: ComponentFixture<MfeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
