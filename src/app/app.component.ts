import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./components/header/header.component"
import { FooterComponent } from "./components/footer/footer.component"
import { TranslationService } from "./services/translation.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <app-header></app-header>
      <main class="flex-grow container mx-auto px-4 py-8 mt-16">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  constructor(private translationService: TranslationService) {
    this.translationService.init()
  }
}
