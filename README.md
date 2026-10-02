# stillen_leonberg

Instagram- und Substack-Content für **@stillen-leonberg**.

- `content-bibliothek/` – Content-Bibliothek und Monatsplanung (Excel)
- `beitraege/JJJJ-MM/` – fertige Beiträge (Slides/Grafiktext, Caption, Hashtags, Alt-Text), eine Datei pro Beitrag
- `beitraege/JJJJ-MM/grafiken/` – fertige Instagram-Grafiken (PNG, 1080 × 1350 px)
- `design/` – Vorlagen im Design von @stillen_leonberg (Schriften: Playfair Display, Montserrat)

## Grafiken neu erzeugen

Die Texte der Slides stehen in `design/posts/*.js`. Nach einer Änderung:

```
node design/render.js                        # alle Beiträge
node design/render.js design/posts/2026-10-W1.js   # nur eine Woche
```

Benötigt Node.js mit `playwright`.
