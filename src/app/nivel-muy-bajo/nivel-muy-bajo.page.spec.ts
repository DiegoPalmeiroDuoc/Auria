import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelMuyBajoPage } from './nivel-muy-bajo.page';

describe('NivelMuyBajoPage', () => {
  let component: NivelMuyBajoPage;
  let fixture: ComponentFixture<NivelMuyBajoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NivelMuyBajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
