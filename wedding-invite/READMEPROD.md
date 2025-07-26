# 🖥️ Деплой свадебного приглашения на виртуальную машину

Подробная инструкция по развертыванию сайта-приглашения на виртуальной машине через SSH.

## 📋 Предварительные требования

- Доступ к виртуальной машине через SSH
- Установленный Git
- Установленный Node.js (версия 16+)
- Установленный nginx
- Доменное имя, направленное на IP сервера

## 🚀 Пошаговый деплой

### 1. **Клонирование и сборка**
```bash
# Клонируем репозиторий
git clone <ваш-репозиторий>
cd wedding-invite

# Устанавливаем зависимости
npm install

# Собираем проект для продакшена
npm run build
```

### 2. **Настройка веб-сервера (nginx)**

Создайте конфиг nginx:
```bash
sudo nano /etc/nginx/sites-available/wedding-invite
```

Содержимое конфига:
```nginx
server {
    listen 80;
    server_name ваш-домен.com www.ваш-домен.com;
    
    root /path/to/wedding-invite/dist;
    index index.html;
    
    # Обработка SPA (React Router)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### 3. **Активация сайта**
```bash
# Создаем символическую ссылку
sudo ln -s /etc/nginx/sites-available/wedding-invite /etc/nginx/sites-enabled/

# Проверяем конфигурацию
sudo nginx -t

# Перезапускаем nginx
sudo systemctl restart nginx
```

### 4. **Настройка SSL (HTTPS) с Let's Encrypt**
```bash
# Устанавливаем Certbot
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Получаем SSL сертификат
sudo certbot --nginx -d ваш-домен.com -d www.ваш-домен.com
```

### 5. **Автоматическое обновление**
Создайте скрипт для автоматического деплоя:
```bash
#!/bin/bash
# deploy.sh
cd /path/to/wedding-invite
git pull
npm install
npm run build
sudo systemctl reload nginx
```

Сделайте скрипт исполняемым:
```bash
chmod +x deploy.sh
```

## 🔧 Полезные команды для отладки

```bash
# Проверка статуса nginx
sudo systemctl status nginx

# Просмотр логов
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Проверка портов
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :443

# Проверка конфигурации nginx
sudo nginx -t

# Перезапуск nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
```

## 🐳 Альтернативные варианты деплоя

### **Простой Python сервер (для тестирования)**
```bash
cd wedding-invite/dist
python3 -m http.server 8000
```

### **Docker (если используете контейнеры)**
Создайте `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

Создайте `nginx.conf`:
```nginx
server {
    listen 80;
    server_name localhost;
    
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Сборка и запуск:
```bash
docker build -t wedding-invite .
docker run -p 80:80 wedding-invite
```

## 🔄 Обновление сайта

### **Ручное обновление**
```bash
cd /path/to/wedding-invite
git pull
npm install
npm run build
sudo systemctl reload nginx
```

### **Автоматическое обновление через cron**
Добавьте в crontab:
```bash
crontab -e
# Обновление каждый день в 3:00
0 3 * * * /path/to/deploy.sh >> /var/log/wedding-deploy.log 2>&1
```

## 🛡️ Безопасность

### **Настройка файрвола**
```bash
# Установка UFW
sudo apt install ufw

# Настройка правил
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### **Обновление системы**
```bash
sudo apt update && sudo apt upgrade -y
```

## 📊 Мониторинг

### **Проверка доступности**
```bash
# Проверка HTTP
curl -I http://ваш-домен.com

# Проверка HTTPS
curl -I https://ваш-домен.com
```

### **Мониторинг ресурсов**
```bash
# Использование диска
df -h

# Использование памяти
free -h

# Загрузка CPU
htop
```

## 🚨 Устранение неполадок

### **Сайт не загружается**
1. Проверьте статус nginx: `sudo systemctl status nginx`
2. Проверьте логи: `sudo tail -f /var/log/nginx/error.log`
3. Проверьте конфигурацию: `sudo nginx -t`

### **SSL сертификат не работает**
1. Проверьте статус certbot: `sudo certbot certificates`
2. Обновите сертификат: `sudo certbot renew`

### **Файлы не обновляются**
1. Проверьте права доступа: `ls -la /path/to/wedding-invite/dist`
2. Проверьте владельца файлов: `sudo chown -R www-data:www-data /path/to/wedding-invite/dist`

## ✅ Чек-лист готовности

- [ ] Проект собран (`npm run build`)
- [ ] nginx настроен и запущен
- [ ] SSL сертификат установлен
- [ ] Домен направлен на сервер
- [ ] Файрвол настроен
- [ ] Автоматическое обновление настроено
- [ ] Логирование настроено

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи nginx
2. Проверьте статус сервисов
3. Убедитесь в правильности конфигурации
4. Обратитесь к документации nginx/Let's Encrypt

---

**Удачного деплоя! 🎉** 