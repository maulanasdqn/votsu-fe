FROM node:gallium-alpine AS build
ENV PORT=8080
WORKDIR /app
COPY package.json ./
RUN echo $PORT
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
#CMD sed -i -e 's/\<PORT\>/'"$PORT"'/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
#CMD ["nginx", "-g", "daemon off;"]

#CMD ["npm", "run", "preview"]
