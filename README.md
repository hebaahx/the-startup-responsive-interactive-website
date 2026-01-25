Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# DEPT® Weather Planner
Een responsive webapplicatie die gebruikers helpt activiteiten te plannen op basis van het actuele weer en de weersvoorspelling.

## Beschrijving
In dit project heb ik een responsive website ontworpen en ontwikkeld voor een startup: een weather planner.
De website is bruikbaar op mobiel, tablet en desktop, waarbij per schermgrootte een andere layout wordt toegepast.

Op mobiel is gekozen voor een one-column layout, waarbij alle content logisch onder elkaar staat. Deze volgorde is bewust gekozen, zodat de belangrijkste informatie (introductie en weersinformatie) als eerste zichtbaar is voor de gebruiker.

Op laptop en desktop wordt gebruikgemaakt van CSS Grid, waardoor de content wordt verdeeld over twee kolommen.
Aan de linkerkant staan:
- De introductie
- De weersvoorspelling voor de komende vijf dagen
- Een formulier om je aan te melden voor de dagelijkse weersvoorspelling
Aan de rechterkant staan:
- Het huidige weer
- Activiteiten die je wel en niet kunt doen op basis van het weer

<img width="1886" height="877" alt="image" src="https://github.com/user-attachments/assets/57017347-a77c-44c1-9c44-2f443896ec59" />

Live website:
https://hebaahx.github.io/the-startup-responsive-interactive-website/

## Toepaste onderdelen:
### Responsive design
De website is volledig responsive opgebouwd met mobile-first als uitgangspunt. Voor mobiele apparaten is gekozen voor een duidelijke en overzichtelijke layout met één kolom. Voor grotere schermen wordt de layout aangepast met behulp van CSS Grid, zodat de beschikbare ruimte optimaal wordt benut.

### Toegankelijkheid
Bij het ontwerpen en bouwen van de website is rekening gehouden met toegankelijkheid. Hiervoor zijn meerdere WCAG-audits uitgevoerd, waaronder:
* Toetsenbordnavigatie (Tab)
* Zichtbare focus states (:focus-visible)
* Kleurcontrast
* Semantische HTML-structuur
* Lighthouse Accessibility Test
Door deze controles is de website beter bruikbaar voor een grote groep gebruikers.

### Huisstijl
De website is ontwikkeld volgens de huisstijl van DEPT®.
De kleuren en typografie zijn vastgelegd in een styleguide. Vooraf heb ik een interface inventory gemaakt waarin herhalende elementen en stijlen in kaart zijn gebracht. Dit gaf overzicht en zorgde ervoor dat de huisstijl consistent is toegepast in het ontwerp en de code.
<img width="658" height="674" alt="image" src="https://github.com/user-attachments/assets/4128bf4f-0016-4c40-9238-b009da2803ff" />

### Interactie
De website bevat een interactieve functie waarbij gebruikers zich kunnen aanmelden voor een daily forecast.
De submitknop bevat een subtiele animatie en duidelijke hover- en focus-states, wat bijdraagt aan zowel gebruiksvriendelijkheid als toegankelijkheid.
<img width="940" height="365" alt="image" src="https://github.com/user-attachments/assets/80f16707-7442-45fd-a78c-73d6f5125f88" />


## Kenmerken
* HTML
De website heeft een duidelijke en consistente HTML-structuur gehouden. Er is gebruikgemaakt van semantische elementen zoals header, main, section en footer. Er is gebruik gemaakt van labels, dit zorgt voor overzichtelijkheid en maakt de pagina toegankelijk voor gebruikers en screenreaders.

* CSS
De website is gebouwd met een mobile-first aanpak. Voor desktop is de layout uitgebreid met CSS Grid en responsive gemaakt met behulp van media queries. Interactieve elementen zoals button en de input hebben hover- en focus-visible states voor een betere gebruikservaring en toegankelijkheid.

* JavaScript
Voor de interactie is het 3-stappenplan toegepast:
- Het element selecteren met querySelector
- Een event listener toegevoegd
- Actie uitvoeren 
https://github.com/hebaahx/the-startup-responsive-interactive-website/blob/17873476c8bdd8e7ddc4a0e0960797eec002d1fb/script.js#L1-L22
  


## Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).


