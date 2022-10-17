# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18-alpine3.15 as build-stage
WORKDIR /app
COPY package.json /app
RUN npm install
# COPY . .
#RUN ls 
COPY . /app
# RUN npm ci && npm run build
RUN npm run build --prod 

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage app/dist/miso-proyecto-final-web/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf