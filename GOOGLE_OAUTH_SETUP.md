# Настройка Google OAuth

Для полной работы входа через Google необходимо настроить Google OAuth приложение и добавить учетные данные в переменные окружения.

## Шаги настройки:

### 1. Создание Google OAuth приложения

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Включите Google+ API:
   - Перейдите в "APIs & Services" > "Library"
   - Найдите "Google+ API" и включите его
4. Создайте OAuth 2.0 учетные данные:
   - Перейдите в "APIs & Services" > "Credentials"
   - Нажмите "Create Credentials" > "OAuth 2.0 Client IDs"
   - Выберите "Web application"
   - Добавьте авторизованные redirect URIs:
     - `http://localhost:3001/api/auth/callback/google` (для разработки)
     - `https://yourdomain.com/api/auth/callback/google` (для продакшена)

### 2. Настройка переменных окружения

1. Скопируйте `.env.example` в `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Добавьте ваши Google OAuth учетные данные в `.env.local`:

   ```env
   GOOGLE_CLIENT_ID="ваш_google_client_id"
   GOOGLE_CLIENT_SECRET="ваш_google_client_secret"
   ```

3. Убедитесь, что также настроены другие обязательные переменные:
   ```env
   NEXTAUTH_URL="http://localhost:3001"
   NEXTAUTH_SECRET="ваш_секретный_ключ"
   DATABASE_URL="ваша_строка_подключения_к_базе_данных"
   ```

### 3. Перезапуск приложения

После добавления переменных окружения перезапустите сервер разработки:

```bash
npm run dev
```

## Проверка работы

1. Откройте `http://localhost:3001/auth/sign-in`
2. Нажмите на кнопку "Войти через Google"
3. Вы должны быть перенаправлены на страницу авторизации Google
4. После успешной авторизации вы будете перенаправлены обратно в приложение

## Что уже настроено

✅ Google OAuth провайдер добавлен в NextAuth конфигурацию  
✅ UI кнопки для входа через Google создан  
✅ Переменные окружения добавлены в схему валидации  
✅ Маршрутизация API настроена

Осталось только получить учетные данные от Google и добавить их в переменные окружения.
