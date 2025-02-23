import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minidashboard',
  standalone: false,
  templateUrl: './minidashboard.component.html',
  styleUrl: './minidashboard.component.scss'
})
export class MinidashboardComponent implements OnInit{
  clientsProgress = 0; // Progresso animado para "50+"
  efficiencyProgress = 0; // Progresso animado para "30%"
  trainingProgress = 0; // Progresso animado para "500+"

  ngOnInit() {
    setTimeout(() => {
      this.clientsProgress = 100;
      this.efficiencyProgress = 60;
      this.trainingProgress = 100;
    }, 500)
  }
}
