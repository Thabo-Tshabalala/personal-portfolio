import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBotComponent } from './personal-bot.component';

describe('PersonalBotComponent', () => {
  let component: PersonalBotComponent;
  let fixture: ComponentFixture<PersonalBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
