import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const { id: profileId } = useParams<{ id: string }>();

    if (!profileId) {
        return <Text text={t('error-loading-profile')} />;
    }

    return (
        <PageWrapper className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={profileId} />
            </VStack>
        </PageWrapper>
    );
};

export default memo(ProfilePage);
