import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language = 'fr'; // Default language
  languageChanged = new EventEmitter<string>();

  constructor() {}

  init(): void {
    // Check if language is stored in localStorage
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      this.language = storedLang;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'fr' || browserLang === 'en') {
        this.language = browserLang;
      }
    }
  }

  getCurrentLanguage(): string {
    return this.language;
  }

  setLanguage(lang: string): void {
    this.language = lang;
    localStorage.setItem('language', lang);
    this.languageChanged.emit(lang);
  }
}
