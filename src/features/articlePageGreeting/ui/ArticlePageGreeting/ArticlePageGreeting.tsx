import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveUserSettings, useUserSettingsByKey } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';

interface ArticlePageGreetingProps {}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { t } = useTranslation('article');
    const [isOpen, setIsOpen] = useState(false);
    const isArticlePageWasOpened = useUserSettingsByKey('isArticlePageWasOpened') as boolean;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveUserSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const onClose = () => setIsOpen(false);

    const text = <Text title={t('article-page-greeting')} text={t('article-page-greeting-text')} />;
    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
