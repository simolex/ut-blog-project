import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { LoaderGrid } from '@/shared/ui/LoaderGrid';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose } = props;
    return (
        <Modal className={classNames('', {}, [])} isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<LoaderGrid />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
