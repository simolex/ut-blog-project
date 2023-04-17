import { memo } from 'react';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-20x20.svg';

import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(styles.notificationButton, {}, [className])}
            direction="bottom left"
            trigger={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            }
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
