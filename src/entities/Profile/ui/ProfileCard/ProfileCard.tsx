import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { classNames } from 'shared/lib/classNames';
import { Mods } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { LoaderGrid } from 'shared/ui/LoaderGrid/LoaderGrid';
import { Text, TextAlign, TextVariant } from 'shared/ui/Text/Text';
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
    // eslint-disable-next-line operator-linebreak
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
            <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
                <LoaderGrid />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.profileCard, {}, [className, styles.error])}>
                <Text
                    variant={TextVariant.ERROR}
                    title={t('error-loading-profile')}
                    text={t('error-loading-profile-action-1')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }
    const mods: Mods = {
        [styles.editing]: !readonly,
    };

    return (
        <div className={classNames(styles.profileCard, mods, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="" size={120} />
                    </div>
                )}
                <Input
                    value={data?.lastname}
                    placeholder={t('profile-lastname')}
                    className={styles.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.first}
                    placeholder={t('profile-firstname')}
                    className={styles.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.age as string}
                    placeholder={t('profile-age')}
                    className={styles.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                {/* <CountrySelect
                    className={styles.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={styles.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                /> */}
                <Input
                    value={data?.city}
                    placeholder={t('profile-city')}
                    className={styles.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('profile-username')}
                    className={styles.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('profile-avatar')}
                    className={styles.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});
