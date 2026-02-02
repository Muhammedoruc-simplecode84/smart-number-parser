# Smart Number Parser

A lightweight, dependency-free utility to convert human-friendly number inputs into clean, copy-ready numeric values.

Designed for forms, finance tools, dashboards, spreadsheets, and any UI where users enter values like:

- `450k`
- `1.2m`
- `2,500`
- `€450k`

---

## ✨ Features

- Supports `k` (thousand) and `m` (million) suffixes
- Ignores currency symbols (`€`, `$`, `£`)
- Handles commas and spaces
- Rejects malformed inputs (e.g. `450kk`, `1,2,3`)
- Rounds to whole numbers
- Copy-to-clipboard ready
- Zero dependencies
- Written in TypeScript
- Works in all modern browsers

---

## 🧠 Example Inputs

| Input      | Output   |
|------------|----------|
| `450k`     | 450000   |
| `1.2m`     | 1200000  |
| `2,500`   | 2500     |
| `€450k`   | 450000   |
| `450kk`   | ❌ invalid |

---

## 🔧 Usage (Core Function)

```ts
parseSmartNumber("450k");   // 450000
parseSmartNumber("1.2m");  // 1200000
parseSmartNumber("2,500"); // 2500

