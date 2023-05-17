import { FC, memo } from 'react';

interface IconProps extends ExtendSVGProps<SVGSVGElement> {
    className?: string;
    Svg: FC<ExtendSVGProps<SVGSVGElement>>;
    title?: string;
    inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, title, inverted = false, ...otherProps } = props;

    return <Svg className={className} title={title} {...otherProps} />;
});
