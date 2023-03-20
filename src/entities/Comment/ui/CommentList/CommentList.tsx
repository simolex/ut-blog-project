import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import styles from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
    error?: string;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading, error } = props;
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(styles.commentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(styles.commentList, {}, [className])}>
            {comments?.length ? (
                comments?.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        className={styles.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text={t('comment-not-found')} />
            )}
        </div>
    );
});
