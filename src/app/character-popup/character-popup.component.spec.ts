import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPopupComponent } from './character-popup.component';

describe('CharacterPopupComponent', () => {
  let component: CharacterPopupComponent;
  let fixture: ComponentFixture<CharacterPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterPopupComponent]
    });
    fixture = TestBed.createComponent(CharacterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
