import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  email: string = '';
  contrasena: string = '';

  constructor(
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) {}

  camposCompletos() {
    return this.nombre && this.validarEmail(this.email) && this.validarContrasena(this.contrasena);
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el correo electrónico
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  validarContrasena(contrasena: string): boolean {
    // Validar que la contraseña tenga al menos 5 caracteres
    return contrasena.length >= 5;
  }

  async guardarRegistro() {
    if (this.camposCompletos()) {
      const loading = await this.loadingController.create({
        message: 'Registrando...',
        duration: 3000,
      });

      await loading.present();

      const cuentasJSON = localStorage.getItem('cuentas');
      const cuentas = cuentasJSON ? JSON.parse(cuentasJSON) : [];

      cuentas.push({
        nombre: this.nombre,
        email: this.email,
        contrasena: this.contrasena,
      });

      localStorage.setItem('cuentas', JSON.stringify(cuentas));

      await loading.onDidDismiss();
      this.navCtrl.navigateBack('/login');
    }
  }

  volverAtras() {
    this.navCtrl.navigateBack('/login');
  }
}
