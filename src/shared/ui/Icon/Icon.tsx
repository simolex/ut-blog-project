import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps extends ExtendSVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<ExtendSVGProps<SVGSVGElement>>;
    title?: string;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, title, inverted = false, ...otherProps } = props;

    const iconStyle = inverted ? styles.inverted : styles.icon;
    return <Svg className={classNames(iconStyle, {}, [className])} title={title} {...otherProps} />;
});
