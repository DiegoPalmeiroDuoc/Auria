import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  contrasena: string = '';

  // Aquí debes agregar un objeto que simule tu base de datos de usuarios
  usuarios = [
    { email: 'usuario1@example.com', contrasena: 'password1' },
    { email: 'usuario2@example.com', contrasena: 'password2' },
    // Agrega más usuarios si es necesario
  ];

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  iniciarSesion() {
    // Verifica si las credenciales coinciden con un usuario en la base de datos
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.email === this.email && usuario.contrasena === this.contrasena
    );

    if (usuarioEncontrado) {
      // Redirige al usuario a la página de "evaluacion"
      this.navCtrl.navigateForward('/evaluacion');
    } else {
      // Muestra un mensaje de error si la autenticación falla
      this.mostrarMensaje('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  }

  registrarse() {
    // Implementa la lógica para redirigir al usuario a la página de registro
    this.navCtrl.navigateForward('/registro');
  }

  olvidarContrasena() {
    // Implementa la lógica para enviar un correo de restablecimiento de contraseña
    this.mostrarMensaje('Se ha enviado un correo de restablecimiento de contraseña.');
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async mostrarMensajeBienvenida() {
    const alert = await this.alertController.create({
      header: '¡Bienvenido!',
      message: 'Hola, soy Julia, y estaré encantada de enseñarte.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
