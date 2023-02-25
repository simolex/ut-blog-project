import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    SyntheticEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>();
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: SyntheticEvent<HTMLInputElement, Event>) => {
        if (e.target instanceof HTMLInputElement) {
            setCaretPosition(e?.target?.selectionStart || 0);
        }
    };

    return (
        <div className={classNames(styles.inputWrapper, {}, [className])}>
            {placeholder && <div className={styles.placeholder}>{`${placeholder}> `}</div>}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span className={styles.caret} style={{ left: `${caretPosition}ch` }} />
                )}
            </div>
        </div>
    );
});
