import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { Comment } from '../../model/types/comment';
import styles from './CommentItem.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentItemProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(styles.commentItem, {}, [className, styles.loading])}
                data-testid="CommentItem.Loader"
            >
                <div className={styles.header}>
                    <Skeleton height={30} width={30} border="50%" />
                    <Skeleton height={24} width="45%" className={styles.username} />
                </div>
                <Skeleton height={48} width="100%" className={styles.content} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <VStack
            gap="8"
            max
            className={classNames(styles.commentItem, {}, [className])}
            data-testid="CommentItem.Content"
        >
            <AppLink to={getRouteProfile(comment.user?.id)} className={styles.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text className={styles.username} title={comment?.user.username} />
            </AppLink>
            <Text className={styles.content} text={comment?.text} />
        </VStack>
    );
});
