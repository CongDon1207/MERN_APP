# A fully hand-coded project

## TECH (MERN)

### Backend:
- Node.js 
- Express.js v4.18.2
- Mongoose v8.19.2
- dotenv v17.2.3

### Frontend:
- React v19.1.1
- Vite v7.1.7
- Tailwind CSS v4.1.15
- shadcn/ui components
- Lucide React v0.546.0
- Axios v1.12.2
- React Router v7.9.4

### Database: 
- MongoDB

---

## Hướng dẫn cài đặt

### 1. Cài đặt Backend

```bash
cd backend
npm install
```

**Các thư viện chính đã được cài đặt:**

```bash
# Dependencies
npm install express@^4.18.2          # Web framework
npm install mongoose@^8.19.2         # MongoDB ODM
npm install dotenv@^17.2.3           # Environment variables

# DevDependencies
npm install -D nodemon@^3.1.10       # Auto-reload server
```

### 2. Cài đặt Frontend

```bash
cd frontend
npm install
```

**Các thư viện chính đã được cài đặt:**

```bash
# Core Dependencies
npm install react@^19.1.1 react-dom@^19.1.1
npm install vite@^7.1.7
npm install axios@^1.12.2            # HTTP client
npm install react-router@^7.9.4     # Routing

# Tailwind CSS & Styling
npm install tailwindcss@^4.1.15
npm install @tailwindcss/vite@^4.1.15
npm install tailwind-merge@^3.3.1    # Merge Tailwind classes
npm install clsx@^2.1.1              # Conditional classnames
npm install class-variance-authority@^0.7.1  # CVA for variants

# shadcn/ui & Radix UI Components
npx shadcn@latest init                        # Initialize shadcn/ui
npm install @radix-ui/react-dialog@^1.1.15
npm install @radix-ui/react-popover@^1.1.15
npm install @radix-ui/react-slot@^1.2.3
npm install cmdk@^1.1.1              # Command palette

# Icons & Notifications
npm install lucide-react@^0.546.0    # Icon library
npm install sonner@^2.0.7            # Toast notifications

# DevDependencies
npm install -D @vitejs/plugin-react@^5.0.4
npm install -D eslint@^9.36.0
npm install -D @eslint/js@^9.36.0
npm install -D eslint-plugin-react-hooks@^5.2.0
npm install -D eslint-plugin-react-refresh@^0.4.22
npm install -D @types/node@^24.9.1
npm install -D @types/react@^19.1.16
npm install -D @types/react-dom@^19.1.9
npm install -D globals@^16.4.0
npm install -D tw-animate-css@^1.4.0
```

**Lệnh cài shadcn/ui components đã sử dụng:**

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add badge
npx shadcn@latest add popover
npx shadcn@latest add command
npx shadcn@latest add pagination
```

---

## Chạy ứng dụng

### Backend
```bash
cd backend
npm run dev      # Development mode with nodemon
# hoặc
npm start        # Production mode
```

### Frontend
```bash
cd frontend
npm run dev      # Development mode
npm run build    # Build for production
npm run preview  # Preview production build
```
