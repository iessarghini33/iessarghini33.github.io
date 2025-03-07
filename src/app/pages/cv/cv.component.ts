import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslationService } from "../../services/translation.service"

@Component({
  selector: "app-cv",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="max-w-5xl mx-auto">
      <header class="mb-10">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <img 
            src="/placeholder.svg?height=200&width=200" 
            alt="Profile Photo" 
            class="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left">
              Issam ESSARGHINI
            </h1>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
              {{ translations.title }}
            </h2>
            <div class="flex flex-col md:flex-row md:items-center text-gray-600 dark:text-gray-300 mb-6">
              <div class="mb-2 md:mb-0 md:mr-6">Chennevières sur marne, 94430 France</div>
              <div class="mb-2 md:mb-0 md:mr-6">+33 44 67 78</div>
              <div>{{'essarghini.issam@gmail.com'}}</div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">{{ translations.about }}</h2>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ translations.aboutText }}
          </p>
        </div>
      </header>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {{ translations.technicalSkills }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ translations.programmingLanguages }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">JavaScript</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">TypeScript</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">HTML5</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">CSS3</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Node.js</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Python</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Java</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ translations.frameworksAndLibraries }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Angular</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">React</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Angular Material</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Nest.js</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Express.js</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">NgRx</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">RxJS</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">{{ translations.toolsAndEnvironments }}</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Webpack</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Vite</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Git</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">Docker</span>
              </li>
              <li class="flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span class="text-gray-700 dark:text-gray-300">VS Code</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {{ translations.professionalExperience }}
        </h2>
        
        <div class="space-y-8">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
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
              <strong>{{ translations.project }}:</strong> {{ translations.carglassProjectDescription }}
            </p>
            <ul class="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>{{ translations.carglassPoint1 }}</li>
              <li>{{ translations.carglassPoint2 }}</li>
              <li>{{ translations.carglassPoint3 }}</li>
              <li>{{ translations.carglassPoint4 }}</li>
              <li>{{ translations.carglassPoint5 }}</li>
            </ul>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              <strong>{{ translations.technicalEnvironment }}:</strong> Angular 17/18, Typescript, Nest.js, Node.js, Ngrx, Rxjs, Nx, Tailwind CSS, Storybook, Jest, Cypress, PostgreSql, Gitlab, Jira, Docker, Datadog, Sentry, Figma, Vs code, Microservices
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <div class="flex flex-col md:flex-row justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">Omnilog, Paris France</h3>
              <span class="text-gray-600 dark:text-gray-300">12/2024 – 02/2025</span>
            </div>
            <h4 class="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
              {{ translations.seniorFrontEndEngineer }}
            </h4>
            <p class="text-gray-600 dark:text-gray-300 mb-2">
              <strong>{{ translations.client }}:</strong> Bayard/la-croix.com
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              <strong>{{ translations.project }}:</strong> {{ translations.bayardProjectDescription }}
            </p>
            <p class="mt-4 text-gray-600 dark:text-gray-300">
              <strong>{{ translations.technicalEnvironment }}:</strong> Typescript, Javascript, twig, webpack, scss, Jest, Gitlab, Jira, Docker, Vs code
            </p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {{ translations.education }}
        </h2>
        
        <div class="space-y-6">
          <div>
            <div class="flex flex-col md:flex-row justify-between mb-2">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ translations.engineeringDegree }}</h3>
              <span class="text-gray-600 dark:text-gray-300">2014-2016</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {{ translations.engineeringSchool }}
            </p>
          </div>
          
          <div>
            <div class="flex flex-col md:flex-row justify-between mb-2">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ translations.bachelorDegree }}</h3>
              <span class="text-gray-600 dark:text-gray-300">2011-2014</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {{ translations.bachelorSchool }}
            </p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {{ translations.languages }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ translations.english }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ translations.professionalProficiency }}</p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ translations.french }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ translations.fluent }}</p>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">{{ translations.arabic }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ translations.nativeLanguage }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
          {{ translations.interests }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">{{ translations.photography }}</h3>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">{{ translations.hiking }}</h3>
          </div>
          
          <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center">
            <div class="text-blue-600 dark:text-blue-400 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">{{ translations.basketball }}</h3>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class CvComponent {
  translations: any = {}
  currentLang: string

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLanguage()
    this.updateTranslations()
    this.translationService.languageChanged.subscribe((lang) => {
      this.currentLang = lang
      this.updateTranslations()
    })
  }

  updateTranslations(): void {
    const lang = this.translationService.getCurrentLanguage()

    if (lang === "fr") {
      this.translations = {
        title: "Ingénieur Front End Sénior",
        about: "À Propos",
        aboutText:
          "En tant qu'ingénieur Front End Senior avec plus de 7 ans d'expérience, je suis passionné par la création d'interfaces utilisateur performantes, accessibles et innovantes. Je recherche un poste stimulant au sein d'une équipe dynamique, où je pourrais mettre à profit mon expertise technique, mon leadership et ma capacité à résoudre des problèmes complexes pour livrer des solutions web qui dépassent les attentes.",
        technicalSkills: "Compétences Techniques",
        programmingLanguages: "Langages de Programmation",
        frameworksAndLibraries: "Frameworks et Librairies",
        toolsAndEnvironments: "Outils & Environnements",
        professionalExperience: "Expérience Professionnelle",
        seniorFrontEndEngineer: "Ingénieur Front End Sénior",
        client: "CLIENT",
        project: "PROJET",
        carglassProjectDescription:
          "Conception et développement d'une bibliothèque de composants Angular modulaires et réutilisables, permettant aux différents pays de créer leur site institutionnel et leur système de prise de rendez-vous",
        carglassPoint1: "Contexte de projet international avec une équipe distribuée entre Europe et Asie",
        carglassPoint2:
          "Développement des composants complexes et génériques, avec un focus sur la performance et la réutilisabilité et l'application des bonnes pratiques d'accessibilité",
        carglassPoint3: "Implémentation d'un système de theming avancé avec Tailwind CSS sans modifier le code de base",
        carglassPoint4: "Développement d'API robustes et scalables avec Nest.js et Node.js",
        carglassPoint5: "Uilisation de Storybook pour documenter et tester les composants de manière isolée",
        bayardProjectDescription: "L'implémentation de Subscribe with Google (SwG) sur le nouveau site laCroix",
        technicalEnvironment: "Environnement technique",
        education: "Formation",
        engineeringDegree: "Diplôme d'ingénieur d'État en génie informatique",
        engineeringSchool: "École Nationale des Sciences Appliquées AL Hoceima- Maroc",
        bachelorDegree: "Licence Science et Technique",
        bachelorSchool:
          "Filière SIR (Systèmes Informatiques Répartis) Faculté des Sciences et Techniques de Marrakech – Maroc",
        languages: "Langues",
        english: "Anglais",
        professionalProficiency: "Maitrise professionnelle",
        french: "Français",
        fluent: "Courant",
        arabic: "Arabe",
        nativeLanguage: "Langue maternelle",
        interests: "Centres d'Intérêt",
        photography: "Photographie",
        hiking: "Randonnée",
        basketball: "Basket-ball",
        present: "présent",
      }
    } else {
      this.translations = {
        title: "Senior Front End Engineer",
        about: "About",
        aboutText:
          "As a Senior Front End Engineer with over 7 years of experience, I am passionate about creating performant, accessible, and innovative user interfaces. I am looking for a challenging position within a dynamic team, where I could leverage my technical expertise, leadership, and problem-solving abilities to deliver web solutions that exceed expectations.",
        technicalSkills: "Technical Skills",
        programmingLanguages: "Programming Languages",
        frameworksAndLibraries: "Frameworks & Libraries",
        toolsAndEnvironments: "Tools & Environments",
        professionalExperience: "Professional Experience",
        seniorFrontEndEngineer: "Senior Front End Engineer",
        client: "CLIENT",
        project: "PROJECT",
        carglassProjectDescription:
          "Design and development of a library of modular and reusable Angular components, allowing different countries to create their institutional website and appointment booking system",
        carglassPoint1: "International project context with a team distributed between Europe and Asia",
        carglassPoint2:
          "Development of complex and generic components, with a focus on performance, reusability and application of accessibility best practices",
        carglassPoint3:
          "Implementation of an advanced theming system with Tailwind CSS without modifying the base code",
        carglassPoint4: "Development of robust and scalable APIs with Nest.js and Node.js",
        carglassPoint5: "Use of Storybook to document and test components in isolation",
        bayardProjectDescription: "Implementation of Subscribe with Google (SwG) on the new laCroix website",
        technicalEnvironment: "Technical environment",
        education: "Education",
        engineeringDegree: "State Engineering Degree in Computer Science",
        engineeringSchool: "National School of Applied Sciences AL Hoceima - Morocco",
        bachelorDegree: "Bachelor of Science and Technology",
        bachelorSchool:
          "SIR (Distributed Information Systems) Faculty of Sciences and Techniques of Marrakech - Morocco",
        languages: "Languages",
        english: "English",
        professionalProficiency: "Professional proficiency",
        french: "French",
        fluent: "Fluent",
        arabic: "Arabic",
        nativeLanguage: "Native language",
        interests: "Interests",
        photography: "Photography",
        hiking: "Hiking",
        basketball: "Basketball",
        present: "present",
      }
    }
  }
}

