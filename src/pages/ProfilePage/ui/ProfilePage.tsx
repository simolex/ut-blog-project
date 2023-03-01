import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
// import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(
                // styles.profilePage
                '',
                {},
                [className],
            )}
        >
            {t('profile-page')}
        </div>
    );
};

export default ProfilePage;
