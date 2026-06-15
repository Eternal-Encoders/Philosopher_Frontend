## Клиентская часть проекта: *"Интерактивный AI-симулятор философских дилемм для студентов технических специальностей"*

## Deploy
- GitHub Pages: <https://eternal-encoders.github.io/Philosopher_Frontend/>

## Стек
- React, Vite, SCSS, TypeScript
- ESLint, Stylistic, Stylelint, Vitest
- Docker, Nginx

## Требования
- Node.js `>=22`
- pnpm `>=10`
- Docker (для запуска в контейнере)

## Локальный запуск
1. Установить зависимости:
```bash
pnpm install
```
2. Создать `.env` в корне проекта:
```bash
VITE_API_DOMAIN=https://your-api-domain
VITE_LLM_DOMAIN=https://your-llm-domain
VITE_PARSER_DOMAIN=https://your-parser-domain
```
3. Запустить dev-сервер:
```bash
pnpm dev
```

## Проверки качества
- Линт TypeScript:
```bash
pnpm lint:ts
```
- Линт SCSS:
```bash
pnpm lint:scss
```
- Тесты:
```bash
pnpm test:run
```
- Production build:
```bash
pnpm build
```

## Запуск через Docker
1. Создать `.env` (как в разделе локального запуска).
2. Собрать образ:
```bash
docker build -t philosopher-frontend:local .
```
3. Запустить контейнер:
```bash
docker run --rm -p 8080:80 philosopher-frontend:local
```
4. Открыть приложение: <http://localhost:8080>

## Docker Hub
Образ публикуется workflow `/.github/workflows/ghrc.yml`.

Теги:
- `<dockerhub-username>/philosopher-frontend:latest`
- `<dockerhub-username>/philosopher-frontend:<git-sha>`

Для публикации нужны GitHub Secrets:
- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
