# Nuxt 3 To-Do App

Wie der Titel schon sagt, habe ich mich für Option A die ToDo Liste entschieden.

![Desktop View](https://github.com/Vhreya/ToDo-List-App/blob/main/public/grafik.png?raw=true)
![Mobile View](https://github.com/Vhreya/ToDo-List-App/blob/main/public/ScreenshotMobileView.png?raw=true)

## Das Projekt wurde mit folgenden Technologien und Konzepten umgesetzt:

* Framework: Nuxt 3
* UI-Bibliothek: Vue 3 (Composition API)
* Styling: Tailwind CSS (via @nuxtjs/tailwindcss Modul)
* Paketmanager: npm

## Setup & Installation

Um das Projekt lokal auszuführen, befolge bitte die folgenden Schritte:

#### Repository klonen
    
* git clone (https://github.com/Vhreya/ToDo-List-App)
* cd ToDo-List-App


#### Abhängigkeiten installieren
    
* npm install


#### Entwicklungsserver starten

* npm run dev
 

#### Andwendung öfnnen

Öffne deinen Browser und navigiere zu http://localhost:3000.

## Offener PR

* https://github.com/Vhreya/ToDo-List-App/pull/1

## Verfügbare Scripts

* npm run dev: Startet den Nuxt-Entwicklungsserver im Watch-Modus.
* npm run build: Erstellt eine optimierte, produktionsreife Version der Anwendung.
* npm run preview: Startet einen lokalen Server, um die produktionsreife Version zu testen.


## Notizen

Der Main brunch enthält die ursprüngliche Version, die funktioniert aber nicht optimiert ist.

Der Refacotr/code-cleanup brunch ist eine verbesserte Version, nach einem Code-Review.
Dieser enthält sauberere Lösungen mit mehr nativen Vue Elementen.
z.B. verbessertes Data handling durch eine Single Source of Truth.

Der feature/local-storage-composable branch enthält die Composal für die LocalStorage Logik.
Hier befindet sich auch der PR.

feature/input-cancel-on-esc/blur enthält noch ein kleines extra feature für das Inputfeld.
Damit lässt sich die Erstellung eines neuen Tasks bequem und natürlicher per ESC-Taste bzw durch klicken irgendwo außerhalb des Feldes abbrechen, anstatt die Enter Taste erneut drücken zu müssen.
