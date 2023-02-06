import { useTheme } from "app/providers/ThemeProvider";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={styles.linkItem}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"} className={styles.linkItem}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
