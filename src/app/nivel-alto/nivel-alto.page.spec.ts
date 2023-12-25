import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelAltoPage } from './nivel-alto.page';

describe('NivelAltoPage', () => {
  let component: NivelAltoPage;
  let fixture: ComponentFixture<NivelAltoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NivelAltoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
