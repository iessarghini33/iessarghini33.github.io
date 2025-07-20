export interface Project {
    id: number
    title: string
    shortDescription: string
    fullDescription: string
    imageUrl: string
    technologies: string[]
    date: string
  }

  export type ProjectHome = Partial<Project>;