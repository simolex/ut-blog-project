import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input/Input';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { LoaderGrid } from '@/shared/ui/LoaderGrid/LoaderGrid';
import { Text, TextAlign, TextVariant } from '@/shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    isLoading?: boolean;
    data?: Profile;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly = true,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCurrency,
        onChangeCountry,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                justify="center"
                className={classNames(styles.profileCard, {}, [className, styles.loading])}
                max
            >
                <LoaderGrid />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                justify="center"
                max
                className={classNames(styles.profileCard, {}, [className, styles.error])}
            >
                <Text
                    variant={TextVariant.ERROR}
                    title={t('error-loading-profile')}
                    text={t('error-loading-profile-action-1')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }
    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(styles.profileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt="" size={120} />
                </HStack>
            )}
            <Input
                value={data?.lastname}
                placeholder={t('profile-lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.Lastname"
            />
            <Input
                value={data?.first}
                placeholder={t('profile-firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.Firstname"
            />
            <Input
                value={data?.age as string}
                placeholder={t('profile-age')}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.Age"
            />

            <CountrySelect
                className={styles.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
                data-testid="ProfileCard.Country"
            />
            <CurrencySelect
                className={styles.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
                data-testid="ProfileCard.Currency"
            />
            <Input
                value={data?.city}
                placeholder={t('profile-city')}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.City"
            />
            <Input
                value={data?.username}
                placeholder={t('profile-username')}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.Username"
            />
            <Input
                value={data?.avatar}
                placeholder={t('profile-avatar')}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard.Avatar"
            />
        </VStack>
    );
});
