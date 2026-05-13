import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceService } from '../services/finance.service';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finance.component.html'
})
export class FinanceComponent implements OnInit {

  financeData: any[] = [];

  constructor(private financeService: FinanceService) {}

  ngOnInit(): void {
    this.financeService.getFinanceData().subscribe((data: any) => {
      this.financeData = data;
    });
  }
}