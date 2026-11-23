import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  name = '';
  email = '';
  message = '';
  pivacyAccepted = false;
  nameTouched = false;
  emailTouched = false;
  messageTouched = false;
  privacyTouched = false;

  status = signal('idle');

  constructor(public languageService: LanguageService) { }

  isNameValid(): boolean {
    return this.name.trim().length > 0;
  }

  isEmailValid(): boolean {
    const email = this.email.trim();
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1;
  }

  isMessageValid(): boolean {
    return this.message.trim().length > 0;
  }

  isFormValid(): boolean {
    return this.isNameValid() && this.isEmailValid() && this.isMessageValid() && this.privacyAccepted;
  }

  showNameError(): boolean {
    return this.nameTouched && !this.isNameValid();
  }

  showEmailError(): boolean {
    return this.emailTouched && !this.isEmailValid();
  }

  showMessageError(): boolean {
    return this.messageTouched && !this.isMessageValid();
  }

  showPrivacyError(): boolean {
    return this.privacyTouched && !this.privacyAccepted;
  }

  getRequestOptions() {
    return {
      method: 'POST',
      headers: { 'Content_Type': 'application/json' },
      body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
    };
  }

  async sendForm() {
    if (!this.isFormValid()) {
      return;
    }
    this.status.set('sending');
    try {
      const response = await fetch('/sendMail.php', this.getRequestOptions());
      if (!response.ok) {
        throw new Error('Server error');
      }
      this.status.set('success');
      this.resetForm();
    } catch (error) {
      this.status.set('error');
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
    this.nameTouched = false;
    this.emailTouched = false;
    this.messageTouched = false;
    this.privacyTouched = false;
  }
}