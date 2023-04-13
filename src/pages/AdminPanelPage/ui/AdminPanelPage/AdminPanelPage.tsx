import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import styles from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}
const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation('admin');

    return (
        <PageWrapper className={classNames(styles.adminPanelPage, {}, [className])}>
            {t('admin-panel-page')}
        </PageWrapper>
    );
});

export default AdminPanelPage;
