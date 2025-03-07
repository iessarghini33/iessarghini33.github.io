import { bootstrapApplication } from "@angular/platform-browser"
import { provideRouter, withViewTransitions } from "@angular/router"
import { AppComponent } from "./app/app.component"
import { routes } from "./app/app.routes"
import { TranslationService } from "./app/services/translation.service"

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withViewTransitions()), TranslationService],
}).catch((err) => console.error(err))

