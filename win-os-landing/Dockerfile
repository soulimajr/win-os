# Serve o export estático do Next.js (gerado localmente em `out/`) via Nginx.
FROM nginx:alpine
COPY out/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
