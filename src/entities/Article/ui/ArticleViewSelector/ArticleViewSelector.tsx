import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import GridIcon from 'shared/assets/icons/view-grid-20x20.svg';
import ListIcon from 'shared/assets/icons/view-list-20x20.svg';
import { ArticleView } from '../../model/types/article';

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
                <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [styles.notSelected]: viewType.view !== view })}
                    />
                </Button>
            ))}
        </div>
    );
});
