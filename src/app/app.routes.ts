import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "cv",
    loadComponent: () => import("./pages/cv/cv.component").then((m) => m.CvComponent),
  },
  {
    path: "blog",
    loadComponent: () => import("./pages/blog/blog.component").then((m) => m.BlogComponent),
  },
  {
    path: "projects",
    loadComponent: () => import("./pages/projects/projects.component").then((m) => m.ProjectsComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
]
