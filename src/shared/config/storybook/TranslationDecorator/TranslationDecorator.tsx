import { I18nextProvider } from 'react-i18next';
import { Story } from '@storybook/react';
import { Suspense } from 'react';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

export const TranslationDecorator = (StoryComponent: Story) => (
    <Suspense fallback="">
        <I18nextProvider i18n={i18nForTests}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
);
