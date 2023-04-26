import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames';
import { Card } from '@/@/shared/ui';
import { HStack, VStack } from '@/@/shared/ui';
import { Text } from '@/@/shared/ui';
import { StarRating } from '@/@/shared/ui';
import { Modal } from '@/@/shared/ui';
import { Input } from '@/@/shared/ui';
import { Button, ButtonSize, ButtonTheme } from '@/@/shared/ui';
import { Drawer } from '@/@/shared/ui';

interface RatingCardProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [onAccept, starsCount, feedback]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('your-feedback')} value={feedback} onChange={setFeedback} />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])} fullWidth>
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('thank-for-feedback') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} onClose={cancelHandle} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_STRONG}>
                                {t('close')}
                            </Button>
                            <Button onClick={acceptHandle}>{t('send')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
                            {t('send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
