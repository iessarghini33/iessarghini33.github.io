import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslationService } from "../../services/translation.service"

interface BlogPost {
  id: number
  title: string
  description: string
  imageUrl: string
  externalUrl: string
  date: string
  tags: string[]
}

@Component({
  selector: "app-blog",
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
            (click)="filterByTag('all')" 
            [class.bg-blue-600]="selectedTag === 'all'"
            [class.text-white]="selectedTag === 'all'"
            [class.bg-gray-200]="selectedTag !== 'all'"
            [class.dark:bg-gray-700]="selectedTag !== 'all'"
            [class.text-gray-800]="selectedTag !== 'all'"
            [class.dark:text-white]="selectedTag !== 'all'"
            class="px-4 py-2 rounded-full text-sm font-medium transition">
            {{ translations.all }}
          </button>
          <button 
            *ngFor="let tag of uniqueTags" 
            (click)="filterByTag(tag)" 
            [class.bg-blue-600]="selectedTag === tag"
            [class.text-white]="selectedTag === tag"
            [class.bg-gray-200]="selectedTag !== tag"
            [class.dark:bg-gray-700]="selectedTag !== tag"
            [class.text-gray-800]="selectedTag !== tag"
            [class.dark:text-white]="selectedTag !== tag"
            class="px-4 py-2 rounded-full text-sm font-medium transition">
            {{ tag }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          *ngFor="let post of filteredPosts" 
          class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition hover:shadow-lg">
          <a [href]="post.externalUrl" target="_blank" rel="noopener noreferrer" class="block">
            <img [src]="post.imageUrl" [alt]="post.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex flex-wrap gap-2 mb-3">
                <span 
                  *ngFor="let tag of post.tags" 
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                  {{ tag }}
                </span>
              </div>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ post.title }}</h2>
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
    </div>
  `,
})
export class BlogComponent {
  translations: any = {}
  selectedTag = "all"
  blogPosts: BlogPost[] = []

  get filteredPosts(): BlogPost[] {
    if (this.selectedTag === "all") {
      return this.blogPosts
    }
    return this.blogPosts.filter((post) => post.tags.includes(this.selectedTag))
  }

  get uniqueTags(): string[] {
    const allTags = this.blogPosts.flatMap((post) => post.tags)
    return [...new Set(allTags)]
  }

  constructor(private translationService: TranslationService) {
    this.updateTranslations()
    this.translationService.languageChanged.subscribe(() => {
      this.updateTranslations()
    })
    this.loadBlogPosts()
  }

  updateTranslations(): void {
    const lang = this.translationService.getCurrentLanguage()

    if (lang === "fr") {
      this.translations = {
        title: "Blog",
        subtitle: "Découvrez mes articles et tutoriels sur le développement front-end et les technologies web.",
        all: "Tous",
        readMore: "Lire plus",
      }
    } else {
      this.translations = {
        title: "Blog",
        subtitle: "Discover my articles and tutorials on front-end development and web technologies.",
        all: "All",
        readMore: "Read more",
      }
    }
  }

  loadBlogPosts(): void {
    // Sample blog posts - in a real app, these would come from an API
    this.blogPosts = [
      {
        id: 1,
        title: "Building Scalable Angular Applications",
        description: "Learn how to structure your Angular applications for scalability and maintainability.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/1",
        date: "2025-02-15",
        tags: ["Angular", "Architecture"],
      },
      {
        id: 2,
        title: "Advanced TypeScript Patterns",
        description: "Explore advanced TypeScript patterns to improve your code quality and developer experience.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/2",
        date: "2025-01-28",
        tags: ["TypeScript", "Best Practices"],
      },
      {
        id: 3,
        title: "Optimizing Performance with Tailwind CSS",
        description: "Tips and tricks for optimizing your web application performance when using Tailwind CSS.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/3",
        date: "2025-01-10",
        tags: ["CSS", "Performance", "Tailwind"],
      },
      {
        id: 4,
        title: "State Management with NgRx",
        description: "A comprehensive guide to managing state in Angular applications using NgRx.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/4",
        date: "2024-12-20",
        tags: ["Angular", "NgRx", "State Management"],
      },
      {
        id: 5,
        title: "Building Accessible Web Applications",
        description: "Best practices for creating web applications that are accessible to all users.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/5",
        date: "2024-12-05",
        tags: ["Accessibility", "Best Practices"],
      },
      {
        id: 6,
        title: "Microservices Architecture with Node.js",
        description: "Learn how to design and implement a microservices architecture using Node.js and Express.",
        imageUrl: "/placeholder.svg?height=300&width=500",
        externalUrl: "https://example.com/blog/6",
        date: "2024-11-22",
        tags: ["Node.js", "Microservices", "Architecture"],
      },
    ]
  }

  filterByTag(tag: string): void {
    this.selectedTag = tag
  }
}

