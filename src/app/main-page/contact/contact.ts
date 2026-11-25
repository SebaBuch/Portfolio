import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/services/language-service';

/**
 * Contact section with a form that is validated on blur and sent to sendMail.php.
 */
@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  /** Value of the name field. */
  name = '';
  /** Value of the email field. */
  email = '';
  /** Value of the message field. */
  message = '';
  /** True if the privacy checkbox is checked. */
  privacyAccepted = false;
  /** True after the user has left the name field once. */
  nameTouched = false;
  /** True after the user has left the email field once. */
  emailTouched = false;
  /** True after the user has left the message field once. */
  messageTouched = false;
  /** True after the user has clicked the privacy checkbox once. */
  privacyTouched = false;

  /** Current state of sending: 'idle', 'sending', 'success' or 'error'. */
  status = signal('idle');

  /**
   * @param languageService - Used for the translated texts and error messages
   */
  constructor(public languageService: LanguageService) { }

  /**
   * Checks if the name field is not empty.
   * @returns True if the name is valid
   */
  isNameValid(): boolean {
    return this.name.trim().length > 0;
  }

  /**
   * Checks if the email has an @ that is not at the start, a dot after it
   * and at least one character after the dot.
   * @returns True if the email is valid
   */
  isEmailValid(): boolean {
    const email = this.email.trim();
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1;
  }

  /**
   * Checks if the message field is not empty.
   * @returns True if the message is valid
   */
  isMessageValid(): boolean {
    return this.message.trim().length > 0;
  }

  /**
   * Checks all fields and the privacy checkbox.
   * @returns True if the form can be sent
   */
  isFormValid(): boolean {
    return this.isNameValid() && this.isEmailValid() && this.isMessageValid() && this.privacyAccepted;
  }

  /**
   * @returns True if the name error should be shown (field left and invalid)
   */
  showNameError(): boolean {
    return this.nameTouched && !this.isNameValid();
  }

  /**
   * @returns True if the email error should be shown (field left and invalid)
   */
  showEmailError(): boolean {
    return this.emailTouched && !this.isEmailValid();
  }

  /**
   * @returns True if the message error should be shown (field left and invalid)
   */
  showMessageError(): boolean {
    return this.messageTouched && !this.isMessageValid();
  }

  /**
   * @returns True if the privacy error should be shown (checkbox clicked and not checked)
   */
  showPrivacyError(): boolean {
    return this.privacyTouched && !this.privacyAccepted;
  }

  /**
   * Builds the options for the fetch request with the form data as JSON.
   * @returns The request options for fetch
   */
  getRequestOptions() {
    return {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: this.name, email: this.email, message: this.message })
    };
  }

  /**
   * Sends the form data to sendMail.php and sets the status for the feedback message.
   * Resets the form after a successful send.
   */
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

  /** Clears all fields and resets the touched states. */
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