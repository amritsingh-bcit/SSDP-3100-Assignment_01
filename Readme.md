# Assignment_01

---

## Installation Steps

- Clone the repository

```bash
git clone https://github.com/amritsingh-bcit/SSDP-3100-Assignment_01
cd project-folder
```

- Install Dependencies

```bash
npm install
npm run dev
```

-run Project

```bash
npm run dev
```

The server will start on

```bash
http://localhost:3000
```

---

### Page Routes

| Route       | Description           |
| ----------- | --------------------- |
| `/`         | Home page             |
| `/about`    | About page            |
| `/projects` | Projects listing page |
| `/contact`  | Contact page          |

---

### API Routes

| Method | Route                | Description                         |
|--------|----------------------|-------------------------------------|
| GET    | `/api/projects`      | Returns all projects (JSON)         |
| GET    | `/api/projects/:id`  | Returns single project by ID        |