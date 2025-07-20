import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private language = 'fr';
  languageChanged = new EventEmitter<string>();

  constructor() {}

  init(): void {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      this.language = storedLang;
    } else {
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
