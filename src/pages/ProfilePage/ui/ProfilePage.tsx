import { EditableProfileCard } from 'features/editableProfileCard';
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    // const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <PageWrapper className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ProfilePageHeader />
                    <EditableProfileCard />
                </VStack>
            </PageWrapper>
        </DynamicModuleLoader>
    );
};

export default memo(ProfilePage);
