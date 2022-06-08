import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public screenOrientacion: ScreenOrientation
  ) {
    // Bloqueo la pantalla de forma horizontal
    this.screenOrientacion.lock(this.screenOrientacion.ORIENTATIONS.LANDSCAPE);
  }

  /**
   * Desbloquea la pantalla y hace que se pueda girar
   */
  unlockScreen(){
    this.screenOrientacion.unlock();
  }
}
