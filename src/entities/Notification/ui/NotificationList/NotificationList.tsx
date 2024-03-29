import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 7000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(styles.notificationList, {}, [className])}>
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
                <Skeleton width="100%" height={80} border="8px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(styles.notificationList, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
