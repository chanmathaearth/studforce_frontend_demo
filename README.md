# STUDFORCE Frontend

เว็บแอปสำหรับโปรเจค STUDFORCE (Vue 3 + Vite + Pinia) ใช้ mock backend ในไฟล์ `src/services/mockApi.js` เพื่อให้รันได้โดยไม่ต้องใช้เซิร์ฟเวอร์จริง

## 🧰 สภาพแวดล้อมและการติดตั้ง

```sh
# ติดตั้ง dependency (npm)
npm install

# ติดตั้ง dependency (yarn)
yarn install
```

## 🚀 รันในโหมดพัฒนา (Hot Reload)

```sh
# ด้วย npm
npm run dev

# ด้วย yarn
yarn dev
```

จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:5173` (หรือพอร์ตที่ Vite แจ้ง)

## 🛠️ สร้างไฟล์สำหรับโปรดักชัน

```sh
# ด้วย npm
npm run build

# ด้วย yarn
yarn build
```

ไฟล์ build จะถูกสร้างในโฟลเดอร์ `dist/`

## 🧩 โครงสร้างสำคัญของโปรเจค

- `src/main.js` — ตรงนี้จะเรียกใช้ `initMockApi()` เพื่อให้แอปใช้ mock backend
- `src/services/mockApi.js` — โค้ด mock backend (เลียนแบบ API ของ backend)
- `src/stores/` — Pinia store (จัดการสินค้า, ตะกร้า, ลูกค้า ฯลฯ)
- `src/views/` — หน้าแต่ละหน้าในแอป

## 🧪 ปรับแต่ง mock backend

ถ้าต้องการแก้ข้อมูล mock (สินค้า, ลูกค้า, ตะกร้า) ให้แก้ที่:

- `src/services/mockApi.js`

แล้วรีเฟรชหน้าเว็บ (ไม่ต้อง restart server หากไฟล์ถูกจับด้วย Vite)
