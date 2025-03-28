import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBgComponent } from './three-bg.component';

describe('ThreeBgComponent', () => {
  let component: ThreeBgComponent;
  let fixture: ComponentFixture<ThreeBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
