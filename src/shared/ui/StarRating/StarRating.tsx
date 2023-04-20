import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star-52x52.svg';
import styles from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    onReset?: () => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, selectedStars = 0, onSelect, onReset } = props;

    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(styles.starRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(
                        styles.starIcon,
                        {
                            [styles.selected]: isSelected,
                            [styles.hovered]: currentStarCount >= starNumber,
                        },
                        [styles.normal],
                    )}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                />
            ))}
        </div>
    );
});
