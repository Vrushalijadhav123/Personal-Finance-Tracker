import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../Layout/header/header.component';
import { FooterComponent } from '../Layout/footer/footer.component';
import { SidebarComponent } from '../Layout/sidebar/sidebar.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
