import { FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Icon.module.scss';

type SvgProps = Omit<ExtendSVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: FC<ExtendSVGProps<SVGSVGElement>>;
    title?: string;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const { className, Svg, title, width = 24, height = 24, clickable, ...otherProps } = props;

    const icon = (
        <Svg
            className={classNames(styles.icon, {}, [className])}
            title={title}
            width={width}
            height={height}
            {...otherProps}
        />
    );

    if (clickable) {
        return (
            <button type="button" className={styles.button} onClick={props.onClick}>
                {icon}
            </button>
        );
    }

    return icon;
});
