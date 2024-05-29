import i18next from 'i18next';
import Button, { ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface LanguageSwitcherProps {
    className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const toggle = async () => {
        i18next.changeLanguage(i18next.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ButtonTheme.FILL} onClick={toggle} className={`${className} p-3`}>
            <Icon name="language" />
        </Button>
    );
};

export default LanguageSwitcher;
