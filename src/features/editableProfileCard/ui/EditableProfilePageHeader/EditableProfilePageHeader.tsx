import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/@/shared/ui';
import { HStack } from '@/@/shared/ui';
import { Text } from '@/@/shared/ui';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfilePageHeaderProps {
    className?: string;
}

export const EditableProfilePageHeader = memo((props: EditableProfilePageHeaderProps) => {
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
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid="EditableProfilePageHeader.EditButton"
                        >
                            {t('profile-edit')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_STRONG}
                                onClick={onCancelEdit}
                                data-testid="EditableProfilePageHeader.CancelButton"
                            >
                                {t('profile-cancel')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSaveEdit}
                                data-testid="EditableProfilePageHeader.SaveButton"
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
