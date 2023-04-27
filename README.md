## Запуск проекта

##

### Установка зависимостей

```bash
npm install # Установка зависимостей
```

### Запуск backend + frontend частей проекта

```bash

npm run start:dev # Webpack dev server + json server
 # или
npm run start:dev:vite # Vite + json server
```

---

## Скрипты

Скрипты исполняемые в консоли среды разработки проекта

| Скрипт                       | Режим\* | Описание                                                                             |
| :--------------------------- | :-----: | :----------------------------------------------------------------------------------- |
| `npm run start`              |   Dev   | Запуск frontend проекта на **_Webpack dev server_**                                  |
| `npm run start:vite`         |   Dev   | Запуск frontend проекта на **_Vite_**                                                |
| `npm run build:dev`          |   Dev   | Сборка frontend проекта в режиме разработки                                          |
| `npm run build:dev:analize`  |   Dev   | Сборка проекта в режиме разработки с включенным плагином **_Bundle analyzer_**       |
| `npm run build:prod`         |  Prod   | Сборка проекта в режиме финальной сборки                                             |
| `npm run build:prod:analize` |  Prod   | Сборка проекта в режиме финальной сборки с включенным плагином **_Bundle analyzer_** |
| `npm run json:server`        |   Dev   | Запуск backend проекта на **_Json server_**'e                                        |
| `npm run start:dev`          |   Dev   | Сборка frontend + backend проекта в режиме разработки на **_Webpack dev server_**    |
| `npm run start:dev:vite`     |   Dev   | Сборка frontend + backend проекта в режиме разработки на **_Vite_**                  |
| `npm run lint:ts`            |   Dev   | Проверка файлов **_\*.ts, \*.tsx_** линтером                                         |
| `npm run lint:ts:fix`        |   Dev   | Исправление файлов **_\*.ts, \*.tsx_** линтером                                      |
| `npm run lint:scss`          |   Dev   | Проверка файлов **_\*.scss_** линтером                                               |
| `npm run lint:scss:fix`      |   Dev   | Исправление файлов **_\*.scss_** линтером                                            |
| `npm run test:unit`          |   Dev   | Запуск unit - тестов в **_Jest_**                                                    |
| `npm run test:ui`            |   Dev   | Запуск скриншотных тестов в **_Loki_**                                               |
| `npm run test:ui:ok`         |   Dev   | Сохранение новых и измененных тестов в **_Loki_**                                    |
| `npm run test:ui:ci`         |   Dev   | Запуск скриншотных тестов в CI                                                       |
| `npm run test:ui:update`     |   Dev   | Обновление новых и измененных тестов в **_Loki_**                                    |
| `npm run test:ui:json`       |   Dev   | Генерация Json отчета для скриншотных тестов                                         |
| `npm run test:ui:html`       |   Dev   | Генерация HTML отчета для скриншотных тестов                                         |
| `npm run test:ui:report`     |   Dev   | Генерация полного (HTML+JSON) отчета для скриншотных тестов                          |
| `npm run storybook`          |   Dev   | Запуск Storybook                                                                     |
| `npm run storybook:build`    |   Dev   | Генерации статичной сборки Storybook                                                 |
| `npm run prepare`            |   Dev   | Прекоммит хуки                                                                       |
| `npm run generate:slice`     |   Dev   | Скрипт для генерации FSD слайсов                                                     |
| `npm run update:imports`     |   Dev   | Скрит для перезаписи абсолютных путей импортов на пути с алиасом `'@'`               |

`* `Режим сборки: обозначается следующими сокращениями:

-   `dev ` - режим разработки ( development )
-   `prod ` - режим финальной сборки ( production )
