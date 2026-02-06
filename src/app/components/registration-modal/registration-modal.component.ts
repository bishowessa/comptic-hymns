import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../mock-courses';

@Component({
  selector: 'app-registration-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent {
  @Input() course: Course | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  registerForm: FormGroup;
  isLoading = false;
  currentStep: 'form' | 'middle' | 'success' = 'form';
  isSuccess = false; // Kept for backward compatibility check, but relying on currentStep is better

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onClose() {
    this.close.emit();
    if (this.currentStep === 'success') {
        this.reset();
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      // Simulate API
      setTimeout(() => {
        this.isLoading = false;
        this.currentStep = 'middle';
      }, 1500);
    }
  }

  onContinue() {
    this.currentStep = 'success';
    this.isSuccess = true;
  }

  reset() {
      this.currentStep = 'form';
      this.isSuccess = false;
      this.isLoading = false;
      this.registerForm.reset();
  }
}
