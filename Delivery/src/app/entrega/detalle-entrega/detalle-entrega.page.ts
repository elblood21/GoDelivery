import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjetoService } from '../../service/objeto.service';


@Component({
  selector: 'app-detalle-entrega',
  templateUrl: './detalle-entrega.page.html',
  styleUrls: ['./detalle-entrega.page.scss'],
})
export class DetalleEntregaPage implements OnInit {

  entrega: any;
  estadoSeleccionado: string = '';
  

  constructor(private route: ActivatedRoute,
    private objetoService : ObjetoService
    ) {
  }

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.entrega = this.objetoService.obtenerRetirosEntregaDetalle(id);
      console.log(this.entrega)
    } else {
      // Manejar el caso en el que 'id' es null, por ejemplo, mostrar un mensaje de error o redirigir a otra página.
    }
    console.log(this.estadoSeleccionado)
    this.estadoSeleccionado = this.entrega.estado_pedido;
}

cambiarEstado() {
  console.log('Nuevo estado seleccionado:', this.entrega.estado_pedido);
  this.entrega.estado_pedido = this.estadoSeleccionado;
  // Aquí puedes realizar la lógica que desees en función del nuevo estado seleccionado
  // Por ejemplo, puedes actualizar el estado en tu servicio si es necesario.
  this.objetoService.actualizarRetiro(this.entrega);
      console.log(this.entrega.estado_pedido)
}
}