import { Component, inject, signal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink } from "@angular/router"
import { TranslationService } from "../../services/translation.service"
import { Post } from "../../interfaces/blog-post.interface";
import { ProjectHome } from "../../interfaces/project.interface";


@Component({
  selector: "app-home",
  imports: [CommonModule, RouterLink],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  private translationService = inject(TranslationService);
  private currentLang =  signal<string>('')
  translations: any = {};
  latestBlogPosts: Post[] = [];
  featuredProjects: ProjectHome[] = [];

  constructor() {
    this.currentLang.set(this.translationService.getCurrentLanguage());
    this.updateTranslations();
    this.translationService.languageChanged.subscribe((lang) => {
      this.currentLang.set(lang);
      this.updateTranslations();
    })
    this.loadLatestBlogPosts();
    this.loadFeaturedProjects();
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
    this.latestBlogPosts = [
      {
        id: 1,
        title: "10 Hidden Gems in Angular That You Should Use",
        description: "In this article, I’ll list 10 useful but not well-known Angular features that you should start using in your projects.",
        imageUrl: "/assets/images/blog1.png",
        externalUrl: "https://medium.com/@ie33/10-hidden-gems-in-angular-that-you-should-use-152fcffde7d3",
        date: "07-03-2025",
      },
      {
        id: 2,
        title: "Why Angular Still Matters: A Developer’s Journey Through Its Evolution",
        description: "In this article, I’ll talk about my journey with Angular's evolution.",
        imageUrl: "/assets/images/blog2.webp",
        externalUrl: "https://medium.com/@ie33/why-angular-still-matters-a-developers-journey-through-its-evolution-8cbc6e257764",
        date: "26-02-2025",
      },
    ]
  }

  loadFeaturedProjects(): void {
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
