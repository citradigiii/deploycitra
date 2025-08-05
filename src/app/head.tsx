export default function Head() {
    return (
        <>
            {/* Google Ads (gtag.js) */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17291988819"></script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-9CSEEB7E03"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-17291988819');
                        gtag('config', 'G-9CSEEB7E03');
                    `,
                }}
            />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />

            {/* Title */}
            <title>Wujudkan Brand Digital untuk Hotel Anda | Citra Digital Hotel</title>

            {/* Meta Tags */}
            <meta
                name="description"
                content="Jasa web hotel murah dan AI automatisasi CS khusus penginapan — harga termurah mulai dari 499k, kualitas profesional dan terpercaya."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="hotel, jasa web hotel murah, AI CS, automatisasi, penginapan, layanan digital hotel" />
            <meta name="author" content="Citra Digital Hotel" />
        </>
    )
}
