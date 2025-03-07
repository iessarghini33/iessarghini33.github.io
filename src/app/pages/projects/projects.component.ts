import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslationService } from "../../services/translation.service"

interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  imageUrl: string
  technologies: string[]
  date: string
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-5xl mx-auto">
      <header class="mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ translations.title }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          {{ translations.subtitle }}
        </p>
      </header>

      <div class="mb-8">
        <div class="flex flex-wrap gap-2">
          <button 
            (click)="filterByTechnology('all')" 
            [class.bg-blue-600]="selectedTechnology === 'all'"
            [class.text-white]="selectedTechnology === 'all'"
            [class.bg-gray-200]="selectedTechnology !== 'all'"
            [class.dark:bg-gray-700]="selectedTechnology !== 'all'"
            [class.text-gray-800]="selectedTechnology !== 'all'"
            [class.dark:text-white]="selectedTechnology !== 'all'"
            class="px-4 py-2 rounded-full text-sm font-medium transition">
            {{ translations.all }}
          </button>
          <button 
            *ngFor="let tech of uniqueTechnologies" 
            (click)="filterByTechnology(tech)" 
            [class.bg-blue-600]="selectedTechnology === tech"
            [class.text-white]="selectedTechnology === tech"
            [class.bg-gray-200]="selectedTechnology !== tech"
            [class.dark:bg-gray-700]="selectedTechnology !== tech"
            [class.text-gray-800]="selectedTechnology !== tech"
            [class.dark:text-white]="selectedTechnology !== tech"
            class="px-4 py-2 rounded-full text-sm font-medium transition">
            {{ tech }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          *ngFor="let project of filteredProjects" 
          class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg cursor-pointer"
          (click)="openProjectDetails(project)">
          <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-48 object-cover">
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                *ngFor="let tech of project.technologies" 
                class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                {{ tech }}
              </span>
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.shortDescription }}</p>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <div *ngIf="selectedProject" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{{ selectedProject.title }}</h2>
        <img [src]="selectedProject.imageUrl" [alt]="selectedProject.title" class="w-full h-64 object-cover rounded-lg mb-4">
        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ selectedProject.fullDescription }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            *ngFor="let tech of selectedProject.technologies" 
            class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
            {{ tech }}
          </span>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ selectedProject.date }}</p>
        <button 
          (click)="closeProjectDetails()" 
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          {{ translations.close }}
        </button>
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  translations: any = {}
  projects: Project[] = []
  selectedTechnology = "all"
  selectedProject: Project | null = null

  get filteredProjects(): Project[] {
    if (this.selectedTechnology === "all") {
      return this.projects
    }
    return this.projects.filter((project) => project.technologies.includes(this.selectedTechnology))
  }

  get uniqueTechnologies(): string[] {
    const allTechnologies = this.projects.flatMap((project) => project.technologies)
    return [...new Set(allTechnologies)]
  }

  constructor(private translationService: TranslationService) {
    this.updateTranslations()
    this.translationService.languageChanged.subscribe(() => {
      this.updateTranslations()
    })
    this.loadProjects()
  }

  updateTranslations(): void {
    const lang = this.translationService.getCurrentLanguage()

    if (lang === "fr") {
      this.translations = {
        title: "Projets",
        subtitle: "Découvrez mes projets récents et mes réalisations.",
        all: "Tous",
        close: "Fermer",
      }
    } else {
      this.translations = {
        title: "Projects",
        subtitle: "Explore my recent projects and achievements.",
        all: "All",
        close: "Close",
      }
    }
  }

  loadProjects(): void {
    // This is sample data. In a real application, you would fetch this from an API
    this.projects = [
      {
        id: 1,
        title: "E-commerce Platform",
        shortDescription: "A full-stack e-commerce solution with Angular and Node.js.",
        fullDescription:
          "Developed a comprehensive e-commerce platform using Angular for the frontend and Node.js for the backend. The project includes features such as user authentication, product catalog, shopping cart, and payment integration.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        technologies: ["Angular", "Node.js", "MongoDB", "Express"],
        date: "2025-01",
      },
      {
        id: 2,
        title: "Task Management App",
        shortDescription: "A React-based task management application with real-time updates.",
        fullDescription:
          "Created a task management application using React and Firebase. The app allows users to create, assign, and track tasks in real-time. It includes features like drag-and-drop task organization, team collaboration, and deadline notifications.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        technologies: ["React", "Firebase", "Redux", "Material-UI"],
        date: "2024-11",
      },
      {
        id: 3,
        title: "Fitness Tracking Dashboard",
        shortDescription: "An Angular dashboard for visualizing fitness data from wearable devices.",
        fullDescription:
          "Designed and implemented a fitness tracking dashboard using Angular and D3.js. The dashboard integrates with various wearable device APIs to collect and visualize user fitness data, including steps, heart rate, and sleep patterns.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        technologies: ["Angular", "D3.js", "TypeScript", "RxJS"],
        date: "2024-09",
      },
    ]
  }

  filterByTechnology(technology: string): void {
    this.selectedTechnology = technology
  }

  openProjectDetails(project: Project): void {
    this.selectedProject = project
  }

  closeProjectDetails(): void {
    this.selectedProject = null
  }
}

