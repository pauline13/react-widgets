import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'material-icons/iconfont/material-icons.css';
import { setupStore } from './app/store/store';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
);
