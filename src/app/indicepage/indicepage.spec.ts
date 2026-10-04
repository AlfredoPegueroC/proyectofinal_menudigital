import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Indicepage } from './indicepage';

describe('Indicepage', () => {
  let component: Indicepage;
  let fixture: ComponentFixture<Indicepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indicepage],
    }).compileComponents();

    fixture = TestBed.createComponent(Indicepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
