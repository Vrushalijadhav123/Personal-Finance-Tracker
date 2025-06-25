import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { CreateExpenseComponent } from '../create-expense/create-expense.component';
import { SharedModule } from '../../shared/shared.module';
import { ExpensesService, Expense } from '../expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  imports: [SharedModule, CommonModule]
})
export class ExpensesComponent implements OnInit {
  displayedColumns: string[] = [
    'id', 'date', 'category', 'amount', 'currency', 'paymentMethod', 'description', 'notes', 'actions'
  ];
  dataSource = new MatTableDataSource<Expense>([]);

  constructor(
    public dialog: MatDialog,
    private expensesService: ExpensesService
  ) {}

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expensesService.getExpenses().subscribe(expenses => {
      this.dataSource.data = expenses;
    });
  }

  openDialog(expense?: Expense) {
    const dialogRef = this.dialog.open(CreateExpenseComponent, {
      width: '400px',
      data: { expense }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (expense && expense.id) {
          // Optionally implement update logic here if your backend supports it
        } else {
          // Create flow
          this.expensesService.addExpense(result).subscribe(() => {
            this.loadExpenses();
          });
        }
      }
    });
  }

  deleteExpense(expense: Expense) {
    if (expense.id) {
      this.expensesService.deleteExpense(expense.id).subscribe(() => {
        this.loadExpenses();
      });
    }
  }
}
