# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18-alpine3.15 as build-stage
WORKDIR /app
COPY package.json /app
RUN npm install
# COPY . .
#RUN ls 
COPY . /app
# RUN npm ci && npm run build
RUN npm run build  --prod --baseHref=/web/

FROM nginx:alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/miso-proyecto-final-web/ /usr/share/nginx/html/web
CMD ["nginx", "-g", "daemon off;"]