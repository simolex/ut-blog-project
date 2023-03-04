import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <div className={styles.header}>
                <Text title={t('profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={styles.editBtn}>
                    {t('profile-edit')}
                </Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.lastname}
                    placeholder={t('profile-lastname')}
                    className={styles.input}
                />
                <Input
                    value={data?.first}
                    placeholder={t('profile-firstname')}
                    className={styles.input}
                />
            </div>
        </div>
    );
};
