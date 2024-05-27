import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletGenerationComponent } from './wallet-generation.component';

describe('WalletGenerationComponent', () => {
  let component: WalletGenerationComponent;
  let fixture: ComponentFixture<WalletGenerationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletGenerationComponent]
    });
    fixture = TestBed.createComponent(WalletGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
