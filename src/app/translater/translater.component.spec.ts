import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslaterComponent } from './translater.component';

describe('TranslaterComponent', () => {
  let component: TranslaterComponent;
  let fixture: ComponentFixture<TranslaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
