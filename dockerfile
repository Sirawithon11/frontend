# 1. Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

# คัดลอกเฉพาะ package*.json เพื่อให้ cache layer ทำงานได้
COPY package.json package-lock.json ./

# ติดตั้ง dependencies ลง node_module ใหม่ แบบ clean install ติดตั้ง version ที่ตรงกับใน package.json 100%  แต่ npm install version อาจไม่ตรง และถ้า local มี/ไม่มี node_module จะไม่นำมาติดตั้งด้วย(สร้างใหม่) 
RUN npm ci

# คัดลอกโค้ดทั้งหมดแล้ว build ต่อ
COPY . .

#สร้างไฟล์ .next เหมือน binary file(.exe) ใน golang
RUN npm run build

# 2. Production Stage
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# คัดลอก package* เพื่อติดตั้งเฉพาะ production dependencies
COPY package.json package-lock.json ./
#ทำการ “clean install” ให้ตรงกับ package-lock.json 100% จาก local แต่ ไม่เอา node_module มาด้วย   (--omit=dev คือ  ละเว้น (omit) devDependencies ไม่ติดตั้งแพ็กเกจในกลุ่ม devDependencies ให้เลย
#ส่งผลให้ไดเรกทอรี node_modules ในสุดมีแค่แพ็กเกจที่จำเป็นสำหรับรันแอปจริง)
RUN npm ci --omit=dev

# คัดลอก build output จาก builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

EXPOSE 3000

CMD ["npm","start"]