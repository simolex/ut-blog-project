import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/Text/Text';
import { classNames, Mods } from '@/shared/lib/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    const mods: Mods = {};

    return (
        <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={styles.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={styles.paragraph} />
            ))}
        </div>
    );
});
