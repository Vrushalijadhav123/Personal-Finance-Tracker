import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CreateExpenseComponent } from '../create-expense/create-expense.component';
import { SharedModule } from '../../shared/shared.module';

export interface Expense {
  date: Date;
  category: string;
  amount: number;
  paymentMethod: string;
  description: string;
  recurring: boolean;
  tags: string;
  vendor: string;
  attachment?: string;
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  imports:[SharedModule,CommonModule]
})
export class ExpensesComponent {
  displayedColumns: string[] = [
    'date', 'category', 'amount', 'paymentMethod', 'description',
    'recurring', 'tags', 'vendor', 'attachment', 'actions'
  ];
  dataSource = new MatTableDataSource<Expense>([
    {
      date: new Date('2025-06-21'),
      category: 'Groceries',
      amount: 1200,
      paymentMethod: 'UPI',
      description: 'Big Bazaar groceries',
      recurring: false,
      tags: 'Monthly',
      vendor: 'Big Bazaar',
      attachment: ''
    }
  ]);

  constructor(public dialog: MatDialog) {}

  openDialog(expense?: Expense) {
    const dialogRef = this.dialog.open(CreateExpenseComponent, {
      width: '400px',
      data: { expense }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (expense) {
          // Edit flow
          const index = this.dataSource.data.indexOf(expense);
          if (index !== -1) {
            this.dataSource.data[index] = { ...result };
            this.dataSource._updateChangeSubscription();
          }
        } else {
          // Create flow
          this.dataSource.data = [...this.dataSource.data, result];
        }
      }
    });
  }

  deleteExpense(expense: Expense) {
    this.dataSource.data = this.dataSource.data.filter(e => e !== expense);
  }
}
