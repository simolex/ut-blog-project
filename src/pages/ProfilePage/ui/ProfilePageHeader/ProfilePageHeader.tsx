import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData';
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        if (profileData?.id) {
            dispatch(updateProfileData());
        }
    }, [dispatch, profileData?.id]);

    return (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Text title={t('profile')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                            {t('profile-edit')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_STRONG}
                                // className={styles.editBtn}
                                onClick={onCancelEdit}
                            >
                                {t('profile-cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                // className={styles.editBtn}
                                onClick={onSaveEdit}
                            >
                                {t('profile-save')}
                            </Button>
                        </HStack>
                    )}
                </div>
            )}
        </HStack>
    );
});
