import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Linkcard } from './linkcard';

describe('Linkcard', () => {
  let component: Linkcard;
  let fixture: ComponentFixture<Linkcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linkcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Linkcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
