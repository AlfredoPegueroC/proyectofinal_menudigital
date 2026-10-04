import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Randompage } from './randompage';

describe('Randompage', () => {
  let component: Randompage;
  let fixture: ComponentFixture<Randompage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Randompage],
    }).compileComponents();

    fixture = TestBed.createComponent(Randompage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
