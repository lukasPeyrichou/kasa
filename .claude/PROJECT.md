# Suivi du projet Kasa

Fichier de suivi d'avancement — à relire en début de session pour reprendre
là où on s'est arrêté. Mis à jour au fil des étapes, pas à la fin.

Dernière mise à jour : **09/09/2026, fin de l'étape 4**.

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

## ⚠️ État du dépôt à relire en priorité

Le dernier commit poussé est `363291f` (fin d'étape 4). Le working tree
contient en plus des **modifications non commitées**, faites en dehors du
suivi normal des étapes (origine non identifiée — pas issues des sessions
Claude tracées ici) :

- suppression de plusieurs commentaires explicatifs (`Router.jsx`,
  `Banner.jsx`, `Banner.scss`, `Card.jsx`, `main.jsx`, `Home.scss`,
  `_mixins.scss`)
- `Router.jsx` : la route nommée `/404` a été retirée (seul le joker `*`
  reste) — fonctionnellement équivalent, mais ce n'est plus ce qui était
  prévu pour l'étape 9
- `src/pages/Housing/Housing.jsx` contient déjà une ébauche de la logique
  de l'**étape 9** (recherche du logement par id + `<Navigate to="/404" />`
  si absent), alors que les étapes 5 à 8 n'ont pas encore été faites

Décision pour l'instant : **on garde ces changements tels quels**, non
commités. À committer explicitement quand on reprend, une fois qu'on aura
revu s'il faut réintroduire la route `/404` nommée.

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

- [ ] **Étape 5 — Page À propos**
  Bloquant : **textes des 4 collapses** (Fiabilité, Respect, Service,
  Sécurité) pas encore récupérés — à prendre dans le prototype Figma.
  Composant `Collapse` à créer : fermé par défaut, toggle animé au clic.

- [ ] **Étape 6 — Page 404**
  Pas commencée formellement (la coquille existe, contenu à faire).
  ⚠️ Voir la note ci-dessus sur la route `/404` retirée de `Router.jsx`.

- [ ] **Étape 7 — Carrousel (`Slideshow`)**
  Pas commencée. Cas de test déjà identifiés dans les données : logements
  à une seule image → `2139a317` et `cb02d69b` (ne doivent afficher ni
  flèches ni numérotation).

- [ ] **Étape 8 — Page logement**
  Pas commencée. Réutilisera `Collapse` (étape 5) pour Description et
  Équipements. ⚠️ `rating` dans le JSON est une **chaîne** (`"5"`, pas
  `5`) — penser à `Number(rating)` dans le composant `Rating`.

- [ ] **Étape 9 — Redirection id invalide**
  Logique déjà ébauchée dans le working tree non commité (voir section
  ci-dessus) : `logements.find(l => l.id === id)` puis
  `<Navigate to="/404" replace />` si `undefined`. À revalider une fois
  les étapes 7-8 faites.

- [ ] **Étape 10 — Vérification finale**
  Pas commencée.

## Entrées encore manquantes côté utilisateur

- Coding guidelines Kasa — pourrait remettre en cause `oxlint` (vs ESLint)
  et l'absence de PropTypes (React 19 les a supprimés pour les function
  components ; à revoir seulement si TypeScript est exigé)
- Textes des 4 collapses de la page À propos — bloquant pour l'étape 5
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
