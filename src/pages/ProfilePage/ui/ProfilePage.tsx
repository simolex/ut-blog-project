import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// import styles from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
