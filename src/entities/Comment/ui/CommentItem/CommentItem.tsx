import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import styles from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.commentItem, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={24} width="45%" className={styles.username} />
                </div>
                <Skeleton height={48} width="100%" className={styles.content} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.commentItem, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user?.id}`} className={styles.header}>
                {/* Закон Деметры? [Вопрос] */}
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                {/* Закон Деметры? [Вопрос] */}
                <Text className={styles.username} title={comment?.user.username} />
            </AppLink>
            <Text className={styles.content} text={comment?.text} />
        </div>
    );
});
