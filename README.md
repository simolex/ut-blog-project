## Запуск проекта

<br/>

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

<br/>

## Скрипты

<br/>


Скрипты исполняемые в консоли среды разработки проекта

<details>
<summary> Скрипты для режима разработки ( Development )</summary>

| Скрипт                      | Описание                                                                          |
| :-------------------------- | :-------------------------------------------------------------------------------- |
| `npm run start`             | Запуск frontend проекта на **_Webpack dev server_**                               |
| `npm run start:vite`        | Запуск frontend проекта на **_Vite_**                                             |
| `npm run build:dev`         | Сборка frontend проекта в режиме разработки                                       |
| `npm run build:dev:analize` | Сборка проекта в режиме разработки с включенным плагином **_Bundle analyzer_**[^6]    |
| `npm run json:server`       | Запуск backend проекта на **_Json server_**'e                                     |
| `npm run start:dev`         | Сборка frontend + backend проекта в режиме разработки на **_Webpack dev server_** |
| `npm run start:dev:vite`    | Сборка frontend + backend проекта в режиме разработки на **_Vite_**               |
| `npm run lint:ts`           | Проверка файлов **_\*.ts, \*.tsx_** линтером                                      |
| `npm run lint:ts:fix`       | Исправление файлов **_\*.ts, \*.tsx_** линтером                                   |
| `npm run lint:scss`         | Проверка файлов **_\*.scss_** линтером                                            |
| `npm run lint:scss:fix`     | Исправление файлов **_\*.scss_** линтером                                         |
| `npm run test:unit`         | Запуск unit - тестов в **_Jest_**[^3]                                                 |
| `npm run test:ui`           | Запуск скриншотных тестов в **_Loki_**[^4]                                            |
| `npm run test:ui:ok`        | Сохранение новых и измененных тестов в **_Loki_**[^4]                                 |
| `npm run test:ui:ci`        | Запуск скриншотных тестов в CI                                                    |
| `npm run test:ui:update`    | Обновление новых и измененных тестов в **_Loki_**[^4]                                 |
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

<br/>


## Архитектура проекта

<br/>


Проект написан в соответствии с методологией **Features sliced design**[^1]

Документация: [Features sliced design](https://feature-sliced.design/ru/)

---

<br/>


## Работа с переводами

<br/>

В проекте используется библиотека **_react-i18next_**[^2] для работы с переводами. 
Файлы переводов хранятся в папке `public/locales`,  в формате JSON. 
Языковые фразы и термины представлены в виде пары `Ключ: Значение`

- `Ключ` - смысловые фразы, латинскими символами в формате snakecase
- `Значение` - перевод фразы на соответствующем языке, ограниченное кавычками

Документация: [react-i18next](https://react.i18next.com/)

---

<br/>

## Тестирование 

<br/>

Реализовано тестирование проекта 4-я видами тестов.

|| Вид теста | Запуск |
|:---:|:---|:---|
|1| Функциональные unit-тесты на **_Jest_**[^3]|`npm run test:unit`|
|2| Компонентные тесты с **_React testing library_**[^4]|`npm run test:unit`|
|3| Скриншотные тесты с **_Loki_**[^5]|`npm run test:ui`|
|4| e2e тестирование с **_Cypress_**[^7]|`npm run test:e2e`|

Подробнее о [тестирование проекта](/docs/tests.md)

---

<br/>

## Линтинг

<br/>

В проекте используется **_eslint_**[^8] для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin [**_eslint-plugin-path-checker_**](https://www.npmjs.com/package/eslint-plugin-simolex-plugin-lint)[^9],

который содержит 3 правила
1) **path-checker** - запрещает использовать абсолютные импорты в рамках одного модуля
2) **layer-imports** - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) **public-api-imports** - разрешает импорт из других модулей только из public api. Имеет auto fix


|| Скрипты линтера | Запуск |
|:---:|:---|:---|
|1|Проверка ts файлов линтером| `npm run lint:ts` |
|2|Исправление ts файлов линтером| `npm run lint:ts:fix` |
|3|Проверка scss файлов style линтером| `npm run lint:scss` |
|4|Исправление scss файлов style линтером | `npm run lint:scss:fix` |

---

<br/>

## Storybook

<br/>

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью **_storybook-addon-mock_**.

Файл со сторикейсами создает рядом с компонентом с расширением `*.stories.tsx`

|| Скрипты  | Запуск |
|:---:|:---|:---|
|1|Запустить оболочку Storybook| `npm run storybook` |

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@/shared/ui/Text';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (props) => <Card {...props} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="Title" text="text text" />,
};

export const NormalDark = Template.bind({});
NormalDark.args = { children: <Text title="Title" text="text text" /> };
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
```
---
<br/>

## Конфигурация проекта

<br/>

Для разработки проект содержит 2 конфигурации:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

---

<br/>

## CI pipeline и pre commit хуки

<br/>

Конфигурация github actions находится в `/.github/workflows`.
В **_CI_** прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

----

<br/>

## Работа с данными

<br/>

Взаимодействие с данными осуществляется с помощью **_Redux Toolkit_**[^10].
По возможности переиспользуемые сущности необходимо нормализовать с помощью **_EntityAdapter_**

Запросы на сервер отправляются с помощью [RTK Query](/src/shared/api/rtkApi.ts)[^11]

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

<br/>

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

---

<br/>

#### Ссылки на документацию 

[^1]: [Features sliced design](https://feature-sliced.design/ru/)
[^2]: [react-i18next](https://react.i18next.com/)
[^3]: [Jest](https://jestjs.io/docs/getting-started)
[^4]: [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
[^5]: [Loki](https://loki.js.org/getting-started.html)
[^6]: [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
[^7]: [Cypress](https://www.cypress.io/)
[^8]: [eslint](https://eslint.org/docs/latest/use/getting-started)
[^9]: Специализированный Линтер плагин [simolex-plugin-lint](https://github.com/simolex/eslint-plugin-path-checker)
[^10]: [Redux Toolkit (RTK)](https://redux-toolkit.js.org/)
[^11]: [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)