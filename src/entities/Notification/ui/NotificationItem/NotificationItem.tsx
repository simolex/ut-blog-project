import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Card, CardVariant } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            variant={CardVariant.OUTLINED}
            className={classNames(styles.notificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={styles.link} href={item.href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
