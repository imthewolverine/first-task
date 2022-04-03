module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "teal": {
                    550: '#20B9B6'
                },
                "indigo": {
                    850: "#270786"
                }
            },
            backgroundImage: {
                'bg-humuus-bn': "url('https://res.cloudinary.com/dzih5nqhg/image/upload/v1643689552/interactive.mn/photo-1574790398664-0cb03682ed1c_cl3ihs.jpg')"

            }
        },
    },
    plugins: [],
}