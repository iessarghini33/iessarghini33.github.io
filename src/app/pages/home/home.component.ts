import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { TranslationService } from "../../services/translation.service"

interface BlogPost {
  id: number
  title: string
  description: string
  imageUrl: string
  externalUrl: string
  date: string
}

interface Project {
  id: number
  title: string
  shortDescription: string
  imageUrl: string
  technologies: string[]
}

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="py-12">
      <div class="max-w-4xl mx-auto text-center">
        <div class="flex flex-col items-center mb-8">
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Profile Photo" 
            class="w-40 h-40 rounded-full object-cover border-4 border-blue-600 mb-4 shadow-lg"
          />
          <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Issam ESSARGHINI
          </h2>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {{ translations.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          {{ translations.subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            routerLink="/cv" 
            class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            {{ translations.viewCv }}
          </a>
          <a 
            routerLink="/blog" 
            class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            {{ translations.viewBlog }}
          </a>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-100 dark:bg-gray-800 rounded-lg my-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {{ translations.highlightedSkills }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">Angular</h3>
          </div>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">TypeScript</h3>
          </div>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">Tailwind CSS</h3>
          </div>
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">Node.js</h3>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {{ translations.latestExperience }}
        </h2>
        <div class="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6">
          <div class="flex flex-col md:flex-row justify-between mb-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Omnilog, Paris France</h3>
            <span class="text-gray-600 dark:text-gray-300">12/2020 – {{ translations.present }}</span>
          </div>
          <h4 class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
            {{ translations.seniorFrontEndEngineer }}
          </h4>
          <p class="text-gray-600 dark:text-gray-300 mb-2">
            <strong>{{ translations.client }}:</strong> Carglass/Belron
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>{{ translations.project }}:</strong> {{ translations.projectDescription }}
          </p>
          <a 
            routerLink="/cv" 
            class="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center">
            {{ translations.seeFullCv }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {{ translations.featuredProjects }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let project of featuredProjects" 
               class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg">
            <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.shortDescription }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  *ngFor="let tech of project.technologies" 
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-8">
          <a routerLink="/projects" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            {{ translations.viewAllProjects }}
          </a>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {{ translations.latestBlogPosts }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let post of latestBlogPosts" 
               class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg">
            <a [href]="post.externalUrl" target="_blank" rel="noopener noreferrer" class="block">
              <img [src]="post.imageUrl" [alt]="post.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ post.title }}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</span>
                  <span class="text-blue-600 dark:text-blue-400 inline-flex items-center">
                    {{ translations.readMore }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="text-center mt-8">
          <a routerLink="/blog" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            {{ translations.viewAllPosts }}
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  translations: any = {}
  latestBlogPosts: BlogPost[] = []
  featuredProjects: Project[] = []
  currentLang: string

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLanguage()
    this.updateTranslations()
    this.translationService.languageChanged.subscribe((lang) => {
      this.currentLang = lang
      this.updateTranslations()
    })
    this.loadLatestBlogPosts()
    this.loadFeaturedProjects()
  }

  updateTranslations(): void {
    const lang = this.translationService.getCurrentLanguage()

    if (lang === "fr") {
      this.translations = {
        title: "Ingénieur Front End Sénior",
        subtitle:
          "Passionné par la création d'interfaces utilisateur performantes, accessibles et innovantes avec plus de 7 ans d'expérience.",
        viewCv: "Voir mon CV",
        viewBlog: "Voir mon Blog",
        highlightedSkills: "Compétences clés",
        latestExperience: "Expérience récente",
        seniorFrontEndEngineer: "Ingénieur Front End Sénior",
        client: "CLIENT",
        project: "PROJET",
        projectDescription:
          "Conception et développement d'une bibliothèque de composants Angular modulaires et réutilisables, permettant aux différents pays de créer leur site institutionnel et leur système de prise de rendez-vous",
        seeFullCv: "Voir le CV complet",
        present: "présent",
        latestBlogPosts: "Derniers articles de blog",
        readMore: "Lire la suite",
        viewAllPosts: "Voir tous les articles",
        featuredProjects: "Projets en vedette",
        viewAllProjects: "Voir tous les projets",
      }
    } else {
      this.translations = {
        title: "Senior Front End Engineer",
        subtitle:
          "Passionate about creating performant, accessible, and innovative user interfaces with over 7 years of experience.",
        viewCv: "View my CV",
        viewBlog: "View my Blog",
        highlightedSkills: "Key Skills",
        latestExperience: "Recent Experience",
        seniorFrontEndEngineer: "Senior Front End Engineer",
        client: "CLIENT",
        project: "PROJECT",
        projectDescription:
          "Design and development of a library of modular and reusable Angular components, allowing different countries to create their institutional website and appointment booking system",
        seeFullCv: "See full CV",
        present: "present",
        latestBlogPosts: "Latest Blog Posts",
        readMore: "Read more",
        viewAllPosts: "View all posts",
        featuredProjects: "Featured Projects",
        viewAllProjects: "View all projects",
      }
    }
  }

  loadLatestBlogPosts(): void {
    // This is sample data. In a real application, you would fetch this from an API
    this.latestBlogPosts = [
      {
        id: 1,
        title: "Building Scalable Angular Applications",
        description: "Learn how to structure your Angular applications for scalability and maintainability.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/1",
        date: "2025-02-15",
      },
      {
        id: 2,
        title: "Advanced TypeScript Patterns",
        description: "Explore advanced TypeScript patterns to improve your code quality and developer experience.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/2",
        date: "2025-01-28",
      },
    ]
  }

  loadFeaturedProjects(): void {
    // This is sample data. In a real application, you would fetch this from an API
    this.featuredProjects = [
      {
        id: 1,
        title: "E-commerce Platform",
        shortDescription: "A full-stack e-commerce solution with Angular and Node.js.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        technologies: ["Angular", "Node.js", "MongoDB", "Express"],
      },
      {
        id: 2,
        title: "Task Management App",
        shortDescription: "A React-based task management application with real-time updates.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Firebase", "Redux", "Material-UI"],
      },
    ]
  }
}
