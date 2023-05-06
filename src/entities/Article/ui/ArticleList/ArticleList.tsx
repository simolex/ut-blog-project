import {
    forwardRef,
    FunctionComponent,
    HTMLAttributeAnchorTarget,
    memo,
    Ref,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    Virtuoso,
    VirtuosoGrid,
    VirtuosoGridHandle,
    ListProps,
    GridScrollSeekPlaceholderProps,
} from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ARTICLE_ITEM_SESSIONSTORAGE_INDEX } from '../../model/const';
import styles from './ArticleList.module.scss';
import { TestIdProps } from '@/shared/types/testid';

interface ArticleListProps extends TestIdProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPage?: () => void;
    virtualized?: boolean;
    Header?: FunctionComponent;
}

interface ArticleListContext {
    isLoading?: boolean;
    view?: ArticleView;
}

const List = forwardRef(({ style, children }: ListProps, listRef: Ref<HTMLDivElement>) => (
    <div
        className={styles.listWrapper}
        style={{ ...style }}
        ref={listRef}
        data-testid="ArticleList.List"
    >
        {children}
    </div>
));

const getSkeleton = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

const ArticleItemPlaceholder = (props: GridScrollSeekPlaceholderProps) => {
    const { index } = props;
    return (
        <div className={classNames('', {}, [styles.ItemContainer])}>
            <ArticleListItemSkeleton key={index} className={styles.card} view={ArticleView.GRID} />
        </div>
    );
};

const Footer = memo((props: { context?: ArticleListContext }) => {
    const { context } = props;

    if (context?.isLoading) {
        return (
            <div className={classNames('', {}, [styles.itemsWrapper, styles.footer])}>
                {getSkeleton(context?.view ?? ArticleView.LIST)}
            </div>
        );
    }
    return null;
});

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.LIST,
        target,
        onLoadNextPage,
        virtualized = true,
        'data-testid': dataTestId = 'ArticleList',
        Header,
    } = props;
    const { t } = useTranslation('article');
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_ITEM_SESSIONSTORAGE_INDEX) || 1;
        setSelectedArticleId(Number(paged));
    }, []);

    useEffect(() => {
        // TODO
        let timeout: any;
        if (view === ArticleView.GRID) {
            timeout = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 300);
        }
        return () => clearTimeout(timeout);
    }, [selectedArticleId, view]);

    const renderArticle = (index: number, item: Article) => (
        <ArticleListItem article={item} view={view} target={target} key={item?.id} index={index} />
    );

    if (!isLoading && !articles?.length) {
        return (
            <div className={classNames(styles.articleList, {}, [className])}>
                <Text title={t('article-not-found')} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
            {view === 'LIST' ? (
                <Virtuoso
                    data-testid={dataTestId}
                    style={{ height: '100%' }}
                    context={{ isLoading, view: ArticleView.LIST }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPage}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        List,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    data-testid={dataTestId}
                    style={{ height: '100%' }}
                    context={{ isLoading, view: ArticleView.GRID }}
                    ref={virtuosoGridRef}
                    totalCount={articles?.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ArticleItemPlaceholder,
                        Footer,
                    }}
                    endReached={onLoadNextPage}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={styles.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 50,
                    }}
                />
            )}
        </div>
    );
});
