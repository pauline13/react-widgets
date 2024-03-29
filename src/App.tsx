import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import { Suspense } from 'react';
import { NotesPage } from './pages/NotesPage';
import Loader from './components/Loader';
import PokePage from './pages/PokePage/PokePage';

function App() {
    return (
        <>
            <Layout>
                <Suspense fallback={<Loader className="flex justify-center pt-10" />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/notes" element={<NotesPage />} />
                        <Route path="/poke" element={<PokePage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </>
    );
}

export default App;
