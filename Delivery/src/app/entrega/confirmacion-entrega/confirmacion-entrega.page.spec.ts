import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionEntregaPage } from './confirmacion-entrega.page';

describe('ConfirmacionEntregaPage', () => {
  let component: ConfirmacionEntregaPage;
  let fixture: ComponentFixture<ConfirmacionEntregaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmacionEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
