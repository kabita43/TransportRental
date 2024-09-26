
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Vehicle{
  type: string;
  quantity: number;
  available: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  vehicles: Vehicle[]=[
    { type: 'Car', quantity: 23, available: 13},
    { type: 'Bike/Scooter', quantity: 23, available: 13},
    { type: 'Bike', quantity: 23, available: 13},
  ]


  viewMore (){
    console.log('View more clicked');
  }
}

