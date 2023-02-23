/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} className={styles.links} onClick={onToggleModal}>
                {t('signin')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные
                тексты. Встретил, себя рукописи ты диких своего снова дороге великий первую
                безопасную от всех за парадигматическая залетают, то семь выйти текстов дал.
            </Modal>
        </div>
    );
};
