import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkMode = false

  constructor() {
    this.initTheme()
  }

  private initTheme(): void {
    // Check if theme preference is stored in localStorage
    const storedTheme = localStorage.getItem("darkMode")

    if (storedTheme) {
      this.darkMode = storedTheme === "true"
    } else {
      // Check if user prefers dark mode at OS level
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      this.darkMode = prefersDark
    }

    // Apply theme
    this.applyTheme()
  }

  isDarkMode(): boolean {
    return this.darkMode
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode = isDark
    localStorage.setItem("darkMode", isDark.toString())
    this.applyTheme()
  }

  private applyTheme(): void {
    if (this.darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
}
