import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: VFC<ExtendSVGProps<SVGSVGElement>>;
    title?: string;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, title } = props;

    return <Svg className={classNames(styles.icon, {}, [className])} title={title} />;
});
