import { Component, inject } from "@angular/core"
import { TranslationService } from "../../services/translation.service"
import { BlogPost } from "../../interfaces/blog-post.interface"

@Component({
  selector: "app-blog",
 
  templateUrl: "./blog.component.html",
})
export class BlogComponent {
  private translationService = inject(TranslationService);
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

  constructor() {
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

