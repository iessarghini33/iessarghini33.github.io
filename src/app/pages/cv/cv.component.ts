import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { TranslationService } from "../../services/translation.service"

@Component({
  selector: "app-cv",
 
  imports: [CommonModule],
  templateUrl: "./cv.component.html",
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

