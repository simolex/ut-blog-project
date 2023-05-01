import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import ListIcon from '@/shared/assets/icons/view-list-20x20.svg';
import GridIcon from '@/shared/assets/icons/view-grid-20x20.svg';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(styles.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    className={styles.button}
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                        width={24}
                        height={24}
                    />
                </Button>
            ))}
        </div>
    );
});
