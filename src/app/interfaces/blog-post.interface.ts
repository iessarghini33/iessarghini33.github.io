export interface BlogPost {
    id: number
    title: string
    description: string
    imageUrl: string
    externalUrl: string
    date: string
    tags: string[]
  }

export type Post = Partial<BlogPost>;