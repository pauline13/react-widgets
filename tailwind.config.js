module.exports = {
    content: ['./index.tsx', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                layout: 'var(--color-layout)',
                bgc: 'var(--color-bg)',
                text: 'var(--color-text)',
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                error: 'var(--color-error)',
                warn: 'var(--color-warn)',
                success: 'var(--color-success)',
                line: 'var(--color-line)',
            },
        },
    },
    plugins: [],
};
