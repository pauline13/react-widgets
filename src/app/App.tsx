import Layout from '../widgets/Layout/ui/Layout';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './router';

function App() {
    const { theme } = useTheme();
    return (
        <div className={`${theme}`}>
            <Layout>
                <AppRouter />
            </Layout>
        </div>
    );
}

export default App;
