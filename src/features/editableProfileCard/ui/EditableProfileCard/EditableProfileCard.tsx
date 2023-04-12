import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames, Mods } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import styles from './EditableProfileCard.module.scss';
import { ValidateProfileError } from 'features/editableProfileCard/model/types/editableProfileCardSchema';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const mods: Mods = {};

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const dispatch = useAppDispatch();
    const { id: profileId } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('profile-server-error'),
        [ValidateProfileError.NO_DATA]: t('profile-error-no-data'),
        [ValidateProfileError.INCORECT_USER_DATA]: t('profile-incorect-user-data'),
        [ValidateProfileError.INCORECT_AGE]: t('profile-incorect-age'),
        [ValidateProfileError.INCORECT_CITY]: t('profile-incorect-city'),
    };

    useInitialEffect(() => {
        if (profileId) {
            dispatch(fetchProfileData(profileId));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || '') }));
        },
        [dispatch],
    );
    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );
    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );
    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );
    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );
    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    return (
        <div className={classNames(styles.editableProfileCard, {}, [className])}>
            {validateErrors?.length &&
                validateErrors.map((error) => (
                    <Text
                        key={error}
                        variant={TextVariant.ERROR}
                        text={validateErrorTranslates[error]}
                    />
                ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                readonly={readonly}
            />
        </div>
    );
});
