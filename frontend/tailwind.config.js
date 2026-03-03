module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4f46e5', // Indigo
                secondary: '#10b981', // Emerald
                accent: '#6366f1',
                neutral: '#f9fafb',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
            }
        },
    },
    plugins: [],
}
