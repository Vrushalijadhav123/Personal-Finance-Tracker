import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  // ngx-charts expects data in this format:
  pieChartData = [
    { name: 'Rent', value: 1200 },
    { name: 'Groceries', value: 400 },
    { name: 'Utilities', value: 150 },
    { name: 'Transport', value: 100 },
    { name: 'Entertainment', value: 200 }
  ];

  // Optional: color scheme
  colorScheme = 'vivid'; // <-- Use a built-in scheme like 'vivid', 'natural', 'cool', etc.

  barChartData = [
    { name: 'Jan', value: 1200 },
    { name: 'Feb', value: 950 },
    { name: 'Mar', value: 1100 },
    // ...add all months
  ];
}
