FROM node:21-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY prisma ./prisma
RUN npm run typings
COPY tsconfig.json src ./
RUN npm run build

FROM node:21-alpine AS prod
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile --production

FROM node:21-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY prisma ./prisma
COPY --from=prod /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
EXPOSE ${PORT}
CMD ["npm", "run", "start-docker"]