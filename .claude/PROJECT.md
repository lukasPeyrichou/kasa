# Suivi du projet Kasa

Fichier de suivi d'avancement — à relire en début de session pour reprendre
là où on s'est arrêté. Mis à jour au fil des étapes, pas à la fin.

Dernière mise à jour : **16/09/2026, fin de l'étape 10 — projet terminé**.

## Reprise rapide

```bash
npm run dev      # serveur de dev (localhost:5173)
npm run lint     # oxlint
npm run build    # build de prod — doit toujours passer sans erreur
```

Repo : https://github.com/lukasPeyrichou/kasa (privé — à passer en public
avant la soutenance, ou inviter l'évaluateur)
Plan détaillé (hors repo) : `C:\Users\Advis\.claude\plans\nouveau-projet-on-va-flickering-lightning.md`
Figma dupliqué (accès édition) : `cTRr53Q53zS90AbL7kaF5c`

## État du dépôt

Les modifications faites hors session (commentaires retirés, footer
« © 2026 Kasa. Tous droits réservés », route `/404` nommée retirée, ébauche
de l'étape 9 dans `Housing.jsx`) ont été **conservées et commitées**.
Seule retouche : la faute « Tout droits réservés » → « Tous ».

Route `/404` : pas réintroduite. `<Navigate to="/404" replace />` tombe sur
le joker `*`, ce qui affiche la 404 avec l'URL `/404` — vérifié.

Rien n'est encore poussé depuis cette session : `git push` à faire.

## Décisions actées

| Sujet | Choix | Pourquoi |
|---|---|---|
| Build | Vite, `npm run dev` (pas d'alias `start`) | standard Vite, pas de raison de s'en écarter |
| Routeur | `react-router` **v8** (pas `react-router-dom`) | doc officielle à jour — le paquet a fusionné depuis la v8 |
| Import routeur | `from "react-router"` partout | v8 ne publie plus rien sous `react-router-dom` |
| Style de routes | `BrowserRouter` + `<Routes>/<Route>` déclaratif | pas de data router |
| Erreur id logement (étape 9) | `<Navigate to="/404" replace />` | évite que « retour » reboucle sur l'URL invalide |
| Styles | Sass (`@use`, pas `@import`) | obligatoire selon le brief |
| Nommage CSS | BEM (`bloc__element`) | lisible, un seul répertoire par composant |
| Structure composants | dossier par composant, `Nom.jsx` + `Nom.scss` côte à côte | |
| Données | `src/data/logements.json`, import ES direct | Vite gère le JSON nativement, pas de fetch/loading state hors sujet |
| Police | Montserrat auto-hébergée (`@fontsource`), sous-ensembles latin uniquement | 736 Ko → 352 Ko, pas d'appel à Google Fonts |
| Repo GitHub | `lukasPeyrichou/kasa`, **privé** | créé moi-même à la demande de l'utilisateur |
| `.claude/` | ignoré sauf `PROJECT.md` (ce fichier) | `launch.json` reste local, le suivi reste versionné |
| Lint | `oxlint` (fourni par le template Vite) | pas encore confirmé face aux coding guidelines Kasa |

## Avancement par étape

- [x] **Étape 1 — Initialisation** (commits `3fd6ad2`, `484961f`)
  React + Vite scaffoldé, Sass installé, repo git + GitHub créés,
  `logements.json` ajouté et validé (20 entrées, 20 ids uniques, aucune
  incomplète). `npm run dev` sert l'app.

- [x] **Étape 2 — React Router** (commit `e529843`)
  `react-router@8.3.0` installé. Exports vérifiés un par un (`BrowserRouter`,
  `Routes`, `Route`, `Navigate`, `Link`, `NavLink`, `useParams`, `Outlet`).

- [x] **Étape 3 — Routeur, layout, pages, styles** (commit `2ed1ca7`)
  `Router.jsx` en composant à part. `Layout` (Header + `<Outlet />` +
  Footer) déclaré comme route parente. 4 pages en coquilles. Design system
  Sass posé (`_variables.scss`, `_mixins.scss`, `main.scss`) avec les
  tokens relevés sur la maquette Figma (`D_Home`, node `3:0`). Logos
  exportés de Figma (`preserveAspectRatio="none"` retiré pour ne pas les
  déformer en responsive). Bannière recadrée en local (6,3 Mo → 104 Ko,
  cadrage identique à la maquette).

- [x] **Étape 4 — Page d'accueil** (commit `363291f`)
  `Banner` (titre optionnel, réutilisable sur À propos) et `Card` créés.
  20 logements mappés avec `key={id}`. **Aucun warning console** vérifié
  explicitement. Conformité maquette mesurée en desktop (grille 3×340px,
  gap 60/50, conteneur 1240px) et mobile 375px (1 colonne, pas de
  débordement horizontal). `loading="lazy"` sur les vignettes.

- [x] **Étape 5 — Page À propos** (commits `c29620e`, `8d79a66`)
  Composant `Collapse` (fermé au chargement, flèche qui pivote, animation
  de hauteur `grid-template-rows: 0fr → 1fr`). Vrais textes et vraie
  bannière intégrés.

- [x] **Étape 6 — Page 404** (commits `c29620e`, `ed1d264`)
  `404` en 288px/700 rouge, message, lien vers l'accueil. Responsive.

- [x] **Étape 7 — Carrousel (`Slideshow`)**
  Boucle dans les deux sens (`(i ± 1 + n) % n`), hauteur fixe 415px
  (255px mobile), `object-fit: cover`. Flèches et compteur masqués pour
  un logement à une seule image (vérifié sur `2139a317`). Compteur masqué
  en mobile, comme sur la maquette. `key={id}` sur le carrousel : il
  repart de la photo 1 quand on change de logement.

- [x] **Étape 8 — Page logement**
  Composants `Tag`, `Host` (prénom / nom sur deux lignes, photo ronde),
  `Rating` (`Number(rating)`, 5 étoiles SVG). `Collapse` réutilisé pour
  Description et Équipements (texte 18px ici contre 24px sur À propos).
  Mesures relevées sur la maquette à 1:1 (capture Figma pleine résolution)
  et vérifiées dans le navigateur : titre 36px à y=608, tags 115×25,
  avatar 64px, collapses 2×582px avec 76px d'écart. Mobile : titre 18px,
  étoiles à gauche / hôte à droite, collapses empilés.

- [x] **Étape 9 — Redirection id invalide**
  `/logement/id-bidon` → `/404` en `replace`. Vérifié.

- [x] **Étape 10 — Vérification finale** (16/09/2026)
  - `npm run lint` : 0 problème · `npm run build` : OK
  - Console : aucun warning ni erreur sur `/`, `/about`,
    `/logement/:id`, `/404`
  - Accueil : 20 vignettes · À propos : 4 collapses fermés au chargement
  - Carrousel : boucle 1/5 → 5/5 (précédent) et 5/5 → 1/5 (suivant)
  - Collapses indépendants, `aria-expanded` correct
  - `/nimportequoi` et id invalide → 404
  - Aucun débordement horizontal à 375px, 800px et 1440px, y compris
    avec le titre le plus long (`b9123946`)

## Entrées encore manquantes côté utilisateur

- Coding guidelines Kasa — pourrait remettre en cause `oxlint` (vs ESLint)
  et l'absence de PropTypes (React 19 les a supprimés pour les function
  components ; à revoir seulement si TypeScript est exigé)
- Valeurs exactes des écrans hors `D_Home` (carrousel, 404, À propos,
  mobile) : décision actée de les **estimer visuellement** plutôt que
  d'attendre les node-ids Figma ; à corriger au pixel si un écart saute
  aux yeux à l'étape 10

## Repères techniques

- **Design tokens** (relevés sur la maquette, dans `src/styles/_variables.scss`) :
  `$color-primary #ff6060`, `$color-background #f6f6f6`, conteneur
  `1240px`, radius `25px`/`10px`, `line-height 1.426`, Montserrat 500/700.
- **Structure** : `src/{layouts,components,pages,styles,data,assets}`,
  un dossier par composant.
- **Assets exportés de Figma** : `src/assets/logo-header.svg`,
  `logo-footer.svg`, `banner-home.jpg` (recadrée localement avec `sharp`,
  script jetable dans le scratchpad — pas conservé dans le repo).
