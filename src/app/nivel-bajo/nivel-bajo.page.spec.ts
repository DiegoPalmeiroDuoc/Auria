import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NivelBajoPage } from './nivel-bajo.page';

describe('NivelBajoPage', () => {
  let component: NivelBajoPage;
  let fixture: ComponentFixture<NivelBajoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NivelBajoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
