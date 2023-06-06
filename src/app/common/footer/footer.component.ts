import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  contactForm!: FormGroup;
  panelServicioAlClienteOpenState: Boolean = false;
  panelNuestraEmpresaOpenState: Boolean = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      tyc: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
  }
}
