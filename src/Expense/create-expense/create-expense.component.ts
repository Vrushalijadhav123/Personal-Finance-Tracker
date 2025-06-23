import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

export interface ExpenseDialogData {
  expense?: any;
}

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,SharedModule]
})
export class CreateExpenseComponent {
  expenseForm: FormGroup;

  data: ExpenseDialogData;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) data: ExpenseDialogData
  ) {
    this.data = data;
    this.expenseForm = this.fb.group({
      date: [data.expense?.date || '', Validators.required],
      category: [data.expense?.category || '', Validators.required],
      amount: [data.expense?.amount || '', [Validators.required, Validators.min(0.01)]],
      paymentMethod: [data.expense?.paymentMethod || '', Validators.required],
      description: [data.expense?.description || ''],
      recurring: [data.expense?.recurring || false],
      tags: [data.expense?.tags || ''],
      vendor: [data.expense?.vendor || ''],
      attachment: [data.expense?.attachment || '']
    });
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      this.dialogRef.close(this.expenseForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
