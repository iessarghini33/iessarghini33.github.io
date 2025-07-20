import { Component, inject } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslationService } from "../../services/translation.service"
import { Project } from "../../interfaces/project.interface"



@Component({
  selector: "app-projects",
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  private translationService = inject(TranslationService);
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

  constructor() {
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

