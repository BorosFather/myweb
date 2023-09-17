import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModellComponent } from './modell.component';

describe('ModellComponent', () => {
  let component: ModellComponent;
  let fixture: ComponentFixture<ModellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModellComponent]
    });
    fixture = TestBed.createComponent(ModellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
