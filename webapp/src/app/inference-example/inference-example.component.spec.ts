import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InferenceExampleComponent} from './inference-example.component';

describe('InferenceExampleComponent', () => {
  let component: InferenceExampleComponent;
  let fixture: ComponentFixture<InferenceExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InferenceExampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InferenceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
