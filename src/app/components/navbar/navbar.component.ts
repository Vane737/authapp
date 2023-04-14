import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Debe ser publico cuando se lo quiere utilizar en el html
  // privado para usarlo solo en este doc

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService ) {

  }
}
