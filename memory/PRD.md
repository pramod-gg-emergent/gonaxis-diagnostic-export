# GONAXIS — Landing Page One-Page

## Problème initial (brief utilisateur)
Créer la landing page one-page de GONAXIS par étapes. GONAXIS aide les TPE, PME, artisans, commerçants et restaurateurs à identifier où ils perdent du temps ou de l'argent, puis à mettre en place des outils simples et intelligents. Devise : « Plus de temps. Plus d'argent. ». Design moderne, premium mais chaleureux : bleu pétrole principal, teal secondaire, accent corail, fond clair teinté. Pas de clichés IA, pas de photos stock.

## Architecture
- Frontend : React 19 + Tailwind + Framer Motion + lucide-react (CRA/craco)
- Backend : FastAPI (non utilisé pour l'instant, endpoints template)
- DB : MongoDB (non utilisée pour l'instant)
- Guidelines design : /app/design_guidelines.json (Outfit + Plus Jakarta Sans)

## Personas
- Artisan / commerçant / restaurateur / dirigeant de TPE-PME : veut gagner du temps et de la marge sans complexité technique.

## Exigences clés (fixes)
- Étape 1 uniquement : header sticky, hero, bloc de réassurance.
- CTA principal « Faire mon diagnostic » → ancre #diagnostic (placeholder).
- CTA secondaire « Découvrir GONAXIS » → #comment-ca-marche.
- Textes français exacts fournis par l'utilisateur.
- Responsive desktop + mobile, menu burger.

## Implémenté (2026-07)
- Header sticky glassmorphism : logo GONAXIS (marque géométrique navy/teal + point corail), 5 liens de navigation, CTA corail, menu burger mobile animé.
- Hero : badge devise, H1 avec dégradé navy→teal→cyan, sous-titre exact du brief, double CTA, ligne de réassurance (5 minutes • Sans engagement • Pensé pour les petites entreprises).
- Visuel hero : composition UI sans photo stock — carte « Aperçu diagnostic » interactive avec sélecteur de secteur (Artisan, Commerçant, Restaurateur, TPE/PME) qui met à jour temps récupéré et gains estimés (données indicatives simulées) + 5 cartes flottantes animées (Temps, Marge, Suivi client, Achats, Organisation). Sur mobile : grille de mini-cartes.
- Bloc réassurance : 4 bénéfices iconés (Simple à utiliser, Pensé pour les TPE, Résultats concrets, Technologie sans complexité), animations d'entrée en cascade.
- Métadonnées : lang fr, title et description GONAXIS.

## Vérifié
- Desktop 1366 / tablette 768 / mobile 375 : captures validées.
- Clic secteur « Restaurateur » → stat gains passe à +2 300 €.
- Menu burger mobile : ouverture/fermeture OK.
- Backend /api/ : 200 (template, inutilisé).

## Backlog priorisé (étapes suivantes demandées par l'utilisateur)
- P0 : Section « Comment ça marche » (#comment-ca-marche)
- P0 : Section Diagnostic / questionnaire (#diagnostic) — cible du CTA principal
- P1 : Section Solutions (#solutions)
- P1 : Section Contact (#contact) + footer
- P2 : Backend du diagnostic (enregistrement des réponses, envoi email)

## Prochaines tâches
1. Construire la section « Comment ça marche »
2. Construire le questionnaire de diagnostic
3. Sections Solutions / Contact / footer
