import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextClassificationResultComponent } from './text-classification-result.component';

describe('TextClassificationResultComponent', () => {
  let component: TextClassificationResultComponent;
  let fixture: ComponentFixture<TextClassificationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextClassificationResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextClassificationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
