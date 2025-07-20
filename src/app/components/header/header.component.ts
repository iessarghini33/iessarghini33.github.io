import { Component, inject } from "@angular/core"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { TranslationService } from "../../services/translation.service"
import { ThemeService } from "../../services/theme.service"

@Component({
  selector: "app-header",
 
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./header.component.html" ,
})
export class HeaderComponent {
  private translationService = inject(TranslationService);
  private themeService = inject(ThemeService);
  isMobileMenuOpen = false
  currentLang = "fr"
  isDarkMode = false

  constructor() {
    this.currentLang = this.translationService.getCurrentLanguage()
    this.isDarkMode = this.themeService.isDarkMode()
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === "fr" ? "en" : "fr"
    this.translationService.setLanguage(this.currentLang)
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode
    this.themeService.setDarkMode(this.isDarkMode)
  }
}