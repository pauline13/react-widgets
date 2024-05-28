import { Theme, useTheme } from '../../../app/providers/ThemeProvider';
import Button, { ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.FILL}
            className={`${className} p-3`}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <Icon name="light_mode" />
            ) : (
                <Icon name="dark_mode" />
            )}
        </Button>
    );
};

export default ThemeSwitcher;
