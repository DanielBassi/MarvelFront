import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-master',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout-master.component.html',
  styleUrl: './layout-master.component.css',
  standalone: true
})
export class LayoutMasterComponent {

}
