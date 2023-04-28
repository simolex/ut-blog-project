## Запуск проекта

### 1. Установка зависимостей

```bash
npm install             # Установка зависимостей
```

### 2. Запуск backend + frontend частей проекта

```bash

npm run start:dev       # Webpack dev server + json server
                        # или
npm run start:dev:vite  # Vite + json server
```

---

## Скрипты

Скрипты исполняемые в консоли среды разработки проекта

<details>
<summary> Скрипты для режима разработки ( Development )</summary>

| Скрипт                      | Описание                                                                          |
| :-------------------------- | :-------------------------------------------------------------------------------- |
| `npm run start`             | Запуск frontend проекта на **_Webpack dev server_**                               |
| `npm run start:vite`        | Запуск frontend проекта на **_Vite_**                                             |
| `npm run build:dev`         | Сборка frontend проекта в режиме разработки                                       |
| `npm run build:dev:analize` | Сборка проекта в режиме разработки с включенным плагином **_Bundle analyzer_**    |
| `npm run json:server`       | Запуск backend проекта на **_Json server_**'e                                     |
| `npm run start:dev`         | Сборка frontend + backend проекта в режиме разработки на **_Webpack dev server_** |
| `npm run start:dev:vite`    | Сборка frontend + backend проекта в режиме разработки на **_Vite_**               |
| `npm run lint:ts`           | Проверка файлов **_\*.ts, \*.tsx_** линтером                                      |
| `npm run lint:ts:fix`       | Исправление файлов **_\*.ts, \*.tsx_** линтером                                   |
| `npm run lint:scss`         | Проверка файлов **_\*.scss_** линтером                                            |
| `npm run lint:scss:fix`     | Исправление файлов **_\*.scss_** линтером                                         |
| `npm run test:unit`         | Запуск unit - тестов в **_Jest_**                                                 |
| `npm run test:ui`           | Запуск скриншотных тестов в **_Loki_**                                            |
| `npm run test:ui:ok`        | Сохранение новых и измененных тестов в **_Loki_**                                 |
| `npm run test:ui:ci`        | Запуск скриншотных тестов в CI                                                    |
| `npm run test:ui:update`    | Обновление новых и измененных тестов в **_Loki_**                                 |
| `npm run test:ui:json`      | Генерация Json отчета для скриншотных тестов                                      |
| `npm run test:ui:html`      | Генерация HTML отчета для скриншотных тестов                                      |
| `npm run test:ui:report`    | Генерация полного (HTML+JSON) отчета для скриншотных тестов                       |
| `npm run storybook`         | Запуск Storybook                                                                  |
| `npm run storybook:build`   | Генерации статичной сборки Storybook                                              |
| `npm run prepare`           | Прекоммит хуки                                                                    |
| `npm run generate:slice`    | Скрипт для генерации FSD слайсов                                                  |
| `npm run update:imports`    | Скрит для перезаписи абсолютных путей импортов на пути с алиасом `'@'`            |

</details>
<details>
<summary> Скрипты для финальной сборки ( Production )</summary>

| Скрипт                       | Описание                                                                             |
| :--------------------------- | :----------------------------------------------------------------------------------- |
| `npm run build:prod`         | Сборка проекта в режиме финальной сборки                                             |
| `npm run build:prod:analize` | Сборка проекта в режиме финальной сборки с включенным плагином **_Bundle analyzer_** |

</details>

---

## Архитектура проекта

Проект написан в соответствии с методологией Features sliced design [^1].

---

## Литература

[^1]: [Features sliced design](https://feature-sliced.design/ru/)
