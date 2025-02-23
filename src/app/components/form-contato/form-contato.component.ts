import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-contato',
  standalone: false,
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.scss'
})
export class FormContatoComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{5}-\d{4}$/)]]
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.getRawValue())
      this.formSubmitted = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => this.formSubmitted = false, 5000)
    }
  }

}
