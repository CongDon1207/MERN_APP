# TodoX - MERN Stack Todo Application

Ứng dụng quản lý công việc (Todo App) được xây dựng hoàn toàn bằng tay với MERN stack, UI hiện đại với Tailwind CSS và shadcn/ui components.

---

## 📁 Cấu trúc thư mục

```
todoX/
├── AGENTS.md                          # Quy tắc cho AI coding agents
├── README.md                          # File này
├── backend/                           # Server Node.js + Express + MongoDB
│   ├── package.json
│   └── src/
│       ├── server.js                  # Entry point của server
│       ├── config/
│       │   └── db.js                  # Kết nối MongoDB
│       ├── controller/
│       │   └── tasksControllers.js    # Controller xử lý logic tasks
│       ├── model/
│       │   └── Task.js                # Schema MongoDB cho Task
│       └── routes/
│           └── taskRouters.js         # Định nghĩa API routes
│
└── frontend/                          # React + Vite + Tailwind CSS
    ├── package.json
    ├── vite.config.js                 # Cấu hình Vite
    ├── tailwind.config.js             # Cấu hình Tailwind CSS
    ├── components.json                # Cấu hình shadcn/ui
    ├── eslint.config.js
    ├── jsconfig.json
    ├── index.html
    ├── public/
    └── src/
        ├── main.jsx                   # Entry point của React
        ├── App.jsx                    # Component chính
        ├── index.css                  # Global styles
        ├── assets/                    # Hình ảnh, fonts, v.v.
        ├── components/                # React components
        │   ├── AddTask.jsx
        │   ├── DateTimeFilter.jsx
        │   ├── Footer.jsx
        │   ├── Header.jsx
        │   ├── StatsAndFilter.jsx
        │   ├── TaskCard.jsx
        │   ├── TaskEmptyState.jsx
        │   ├── TaskList.jsx
        │   ├── TaskListPagination.jsx
        │   └── ui/                    # shadcn/ui components
        │       ├── badge.jsx
        │       ├── button.jsx
        │       ├── card.jsx
        │       ├── command.jsx
        │       ├── dialog.jsx
        │       ├── input.jsx
        │       ├── pagination.jsx
        │       └── popover.jsx
        ├── lib/
        │   ├── axios.js               # Axios instance config
        │   ├── data.js                # Constants & data
        │   └── utils.js               # Utility functions
        └── pages/
            ├── HomePage.jsx           # Trang chính
            └── NotFound.jsx           # Trang 404
```

---

## 🛠️ TECH STACK (MERN)

### Backend:
- **Node.js** - JavaScript runtime
- **Express.js** `^4.18.2` - Web framework
- **Mongoose** `^8.19.2` - MongoDB ODM
- **dotenv** `^17.2.3` - Quản lý biến môi trường
- **cors** `^2.8.5` - Cross-Origin Resource Sharing

**DevDependencies:**
- **nodemon** `^3.1.10` - Auto-reload server khi dev

### Frontend:
- **React** `^19.1.1` - UI library
- **Vite** `^7.1.7` - Build tool & dev server
- **Tailwind CSS** `^4.1.15` - Utility-first CSS framework
- **@tailwindcss/vite** `^4.1.15` - Vite plugin cho Tailwind
- **shadcn/ui** - Component library (Radix UI based)
- **Lucide React** `^0.546.0` - Icon library
- **Axios** `^1.12.2` - HTTP client
- **React Router** `^7.9.4` - Routing
- **Sonner** `^2.0.7` - Toast notifications

**Radix UI Components:**
- `@radix-ui/react-dialog` `^1.1.15`
- `@radix-ui/react-popover` `^1.1.15`
- `@radix-ui/react-slot` `^1.2.3`
- `cmdk` `^1.1.1` - Command palette

**Utility Libraries:**
- `tailwind-merge` `^3.3.1` - Merge Tailwind classes
- `clsx` `^2.1.1` - Conditional classnames
- `class-variance-authority` `^0.7.1` - CVA cho variants

**DevDependencies:**
- `@vitejs/plugin-react` `^5.0.4`
- `eslint` `^9.36.0` + plugins
- `@types/node` `^24.9.1`
- `@types/react` `^19.1.16`
- `@types/react-dom` `^19.1.9`
- `globals` `^16.4.0`
- `tw-animate-css` `^1.4.0`

### Database: 
- **MongoDB** - NoSQL database

---

## 📦 Hướng dẫn cài đặt

> **Đúng rồi!** Tất cả dependencies đã được khai báo trong `package.json`. Bạn chỉ cần chạy `npm install` là xong.

### 1. Clone repository

```bash
git clone <repository-url>
cd todoX
```

### 2. Cài đặt Backend

```bash
cd backend
npm install
```

Tất cả dependencies đã được khai báo trong `backend/package.json`:
- `express`, `mongoose`, `dotenv`, `cors`
- `nodemon` (dev)

### 3. Cài đặt Frontend

```bash
cd frontend
npm install
```

Tất cả dependencies đã được khai báo trong `frontend/package.json`:
- React, Vite, Tailwind CSS, shadcn/ui components, Axios, React Router, v.v.

> **Lưu ý:** Các shadcn/ui components đã được thêm vào thư mục `src/components/ui/`. Không cần chạy lại `npx shadcn add`.

### 4. Cấu hình môi trường

Tạo file `.env` trong thư mục `backend/`:

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/todoX
# hoặc
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todoX
NODE_ENV=development
```

---

## 🚀 Chạy ứng dụng

### Backend (Terminal 1)
```bash
cd backend
npm run dev      # Development mode với nodemon (auto-reload)
# hoặc
npm start        # Production mode
```

Server sẽ chạy tại: `http://localhost:5001`

### Frontend (Terminal 2)
```bash
cd frontend
npm run dev      # Development mode
```

Ứng dụng sẽ chạy tại: `http://localhost:5173` (hoặc port khác nếu 5173 đã dùng)

### Build production

```bash
cd frontend
npm run build    # Build vào thư mục dist/
npm run preview  # Preview production build
```

---

## 🌐 API Endpoints

### Tasks API (`/api/tasks`)

| Method | Endpoint | Mô tả | Query Params |
|--------|----------|-------|--------------|
| GET | `/api/tasks` | Lấy danh sách tasks | `?filter=today\|week\|month\|all` |
| POST | `/api/tasks` | Tạo task mới | Body: `{ title: string }` |
| PUT | `/api/tasks/:id` | Cập nhật task | Body: `{ title, status, completedAt }` |
| DELETE | `/api/tasks/:id` | Xóa task | - |

---

## 📝 Features

- ✅ Thêm, sửa, xóa task
- ✅ Đánh dấu hoàn thành/chưa hoàn thành
- ✅ Lọc theo trạng thái (Tất cả, Đang làm, Hoàn thành)
- ✅ Lọc theo thời gian (Hôm nay, Tuần này, Tháng này, Tất cả)
- ✅ Phân trang danh sách tasks
- ✅ Thống kê số lượng tasks
- ✅ UI hiện đại với Tailwind CSS & shadcn/ui
- ✅ Toast notifications
- ✅ Responsive design

---

## 🎨 UI Components (shadcn/ui)

Các components đã được thêm vào `src/components/ui/`:
- `button` - Nút bấm với nhiều variants
- `card` - Card container
- `input` - Input field
- `dialog` - Modal dialog
- `badge` - Badge/tag component
- `popover` - Popover dropdown
- `command` - Command palette
- `pagination` - Phân trang

---

## 🧑‍💻 Development Notes

- Backend sử dụng **ES Modules** (`"type": "module"` trong package.json)
- Frontend sử dụng **alias path** `@/` cho import (đã config trong `vite.config.js`)
- CORS đã được cấu hình cho phép frontend (localhost:5173) gọi API backend
- Tailwind CSS v4 sử dụng `@tailwindcss/vite` plugin

---

## 📄 License

ISC

---

**Tác giả:** CongDon1207  
**Repository:** [MERN_APP](https://github.com/CongDon1207/MERN_APP)
