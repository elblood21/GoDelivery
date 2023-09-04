import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleEntregaPage } from './detalle-entrega.page';

describe('DetalleEntregaPage', () => {
  let component: DetalleEntregaPage;
  let fixture: ComponentFixture<DetalleEntregaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
