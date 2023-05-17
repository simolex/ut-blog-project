import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextAlign } from '@/shared/ui/deprecated/Text';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(styles.articleImageBlockComponent, {}, [className])}>
            <img className={styles.image} src={block.src} alt={block.title} title={block.title} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
