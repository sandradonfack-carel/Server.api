# 📚 Support1-API

Une API REST construite avec **Node.js** et **Express.js** pour la gestion des cours universitaires.

---

## 🚀 Technologies utilisées

- **Runtime** : Node.js
- **Framework** : Express.js
- **Format de données** : JSON

---

## 📁 Structure du projet

```
support1-api/
├── server.js          # Point d'entrée de l'application
├── routes/
│   └── courses.js     # Routes de gestion des cours
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/TON_USERNAME/support1-api.git

# Accéder au dossier
cd support1-api

# Installer les dépendances
npm install
```

---

## ▶️ Lancer le serveur

```bash
node server.js
```

Le serveur démarre sur : `http://localhost:3000`

---

## 🛣️ Endpoints disponibles

### Base

| Méthode | Route | Description |
|--------|-------|-------------|
| GET | `/` | Message de bienvenue |

### Cours (`/api/courses`)

| Méthode | Route | Description |
|--------|-------|-------------|
| GET | `/api/courses` | Récupérer tous les cours |
| GET | `/api/courses/:id` | Récupérer un cours par ID |
| POST | `/api/courses` | Créer un nouveau cours |
| PUT | `/api/courses/:id` | Modifier un cours existant |
| DELETE | `/api/courses/:id` | Supprimer un cours |

---

## 📝 Exemples de requêtes

### Créer un cours (POST)

```json
POST /api/courses
Content-Type: application/json

{
  "title": "Algorithmique",
  "teacher": "Dr NJI",
  "credits": 6
}
```

### Modifier un cours (PUT)

```json
PUT /api/courses/1
Content-Type: application/json

{
  "title": "Algorithmique avancée"
}
```

---

## 📦 Format d'un cours

```json
{
  "id": 1,
  "title": "Algorithmique",
  "teacher": "Dr NJI",
  "credits": 6
}
```

---

## 👤 Auteur

Développé par **Donfack**  
Université — Projet Support1-API

---

## 📄 Licence

Ce projet est à usage éducatif.
