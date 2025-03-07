import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterLinkActive } from "@angular/router"
import { TranslationService } from "../../services/translation.service"
import { ThemeService } from "../../services/theme.service"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
              <a routerLink="/" class="hover:text-blue-600 dark:hover:text-blue-400 transition">
                IE's Portfolio
              </a>
            </h1>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            <a 
              routerLink="/" 
              routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white font-medium" 
              [routerLinkActiveOptions]="{exact: true}"
              class="px-3 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition">
              {{ currentLang === 'fr' ? 'Accueil' : 'Home' }}
            </a>
            <a 
              routerLink="/cv" 
              routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white font-medium"
              class="px-3 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition">
              CV
            </a>
            <a 
              routerLink="/projects" 
              routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white font-medium"
              class="px-3 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition">
              {{ currentLang === 'fr' ? 'Projets' : 'Projects' }}
            </a>
            <a 
              routerLink="/blog" 
              routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white font-medium"
              class="px-3 py-1 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition">
              Blog
            </a>
          </nav>
          
          <div class="flex items-center space-x-4">
            <button 
              (click)="toggleLanguage()" 
              class="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              {{ currentLang === 'fr' ? 'EN' : 'FR' }}
            </button>
            
            <button 
              (click)="toggleTheme()" 
              class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              <svg *ngIf="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg *ngIf="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            
            <button 
              (click)="toggleMobileMenu()" 
              class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile menu -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden mt-4 space-y-2">
          <a 
            routerLink="/" 
            routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white" 
            [routerLinkActiveOptions]="{exact: true}"
            class="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition"
            (click)="closeMobileMenu()">
            {{ currentLang === 'fr' ? 'Accueil' : 'Home' }}
          </a>
          <a 
            routerLink="/cv" 
            routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white"
            class="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition"
            (click)="closeMobileMenu()">
            CV
          </a>
          <a 
            routerLink="/projects" 
            routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white"
            class="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition"
            (click)="closeMobileMenu()">
            {{ currentLang === 'fr' ? 'Projets' : 'Projects' }}
          </a>
          <a 
            routerLink="/blog" 
            routerLinkActive="bg-blue-600 text-white dark:bg-blue-600 dark:text-white"
            class="block px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition"
            (click)="closeMobileMenu()">
            Blog
          </a>
        </div>
      </div>
    </header>
    <div class="h-16"></div>
  `,
})
export class HeaderComponent {
  isMobileMenuOpen = false
  currentLang = "fr"
  isDarkMode = false

  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService,
  ) {
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