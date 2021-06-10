import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterSectionComponent } from './charter-section.component';

describe('CharterSectionComponent', () => {
  let component: CharterSectionComponent;
  let fixture: ComponentFixture<CharterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharterSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
