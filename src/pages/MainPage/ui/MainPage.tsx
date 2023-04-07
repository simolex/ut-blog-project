/* eslint-disable i18next/no-literal-string */
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <PageWrapper>
            {t('Главная')}
            <div>Any Content</div>
            <div>Any Content</div>
            <div>Any Content</div>
            <ListBox
                defaultValue="Select..."
                onChange={(value: string) => {}}
                value={undefined}
                items={[
                    { value: '1', content: '111111111' },
                    { value: '2', content: '222222222', disabled: true },
                    { value: '3', content: '333333333' },
                ]}
            />
            <div>Any Content</div>
            <div>Any Content</div>
            <div>Any Content</div>
        </PageWrapper>
    );
};

export default memo(MainPage);
