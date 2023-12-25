import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelMedioAltoPage } from './nivel-medio-alto.page';

describe('NivelMedioAltoPage', () => {
  let component: NivelMedioAltoPage;
  let fixture: ComponentFixture<NivelMedioAltoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NivelMedioAltoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
