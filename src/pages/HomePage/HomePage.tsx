import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <p className="text-text">{t('Главная страница')}</p>
        </div>
    );
};

export default HomePage;
