import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

// const article = {
//     id: '1',
//     title: 'Javascript news, Javascript news, Javascript news',
//     subtitle: 'Что нового в JS за 2022 год?',
//     img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
//     views: 1022,
//     user: {
//         id: '1',
//         username: 'Brain',
//         avatar: 'https://7img.net/users/1112/16/48/08/avatars/1-96.jpg',
//     },
//     createdAt: '26.02.2022',
//     type: ['IT', 'ECONOMICS', 'SCIENCE'],
//     blocks: [
//         {
//             id: '1',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                 'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//             ],
//         },
//         {
//             id: '4',
//             type: 'CODE',
//             code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
//         },
//         {
//             id: '5',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
//                 'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//             ],
//         },
//         {
//             id: '2',
//             type: 'IMAGE',
//             src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//             title: 'Рисунок 1 - скриншот сайта',
//         },
//         {
//             id: '3',
//             type: 'CODE',
//             code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
//         },
//         {
//             id: '7',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//                 'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
//             ],
//         },
//         {
//             id: '8',
//             type: 'IMAGE',
//             src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
//             title: 'Рисунок 1 - скриншот сайта',
//         },
//         {
//             id: '9',
//             type: 'TEXT',
//             title: 'Заголовок этого блока',
//             paragraphs: [
//                 'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
//             ],
//         },
//     ],
// } as Article;

// new Array(16).fill(0).map((item, index) => ({
//     ...article,
//     id: String(index),
// }))

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlePage());
    }, [dispatch]);

    if (error) {
        return (
            <PageWrapper className={classNames(styles.articleDetailsPage, {}, [className])}>
                {t('article-not-found')}
            </PageWrapper>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPage} className={className} isLoading={isLoading}>
                <ArticlePageFilters />
                <ArticleInfiniteList />
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
