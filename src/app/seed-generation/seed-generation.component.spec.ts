import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedGenerationComponent } from './seed-generation.component';

describe('SeedGenerationComponent', () => {
  let component: SeedGenerationComponent;
  let fixture: ComponentFixture<SeedGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeedGenerationComponent]
    });
    fixture = TestBed.createComponent(SeedGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
