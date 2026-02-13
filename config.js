// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Moje milovaná Aničko",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "pro moji lasku💝💌",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🫰🏼', '🔮', '💒', '💋'],  // Heart emojis
        bears: ['🧸', '🐻', '🍊']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Máš mě ráda?:3",                                    // First interaction
            yesBtn: "Ano",                                             // Text for "Yes" button
            noBtn: "Ne",                                               // Text for "No" button
            secretAnswer: ".. Já tě MOC MILUJI! ❤️"           // Secret hover message
        },
        second: {
            text: "Jak moc mě miluješ?",                          // For the love meter
            startText: "Takhle moc!",                                   // Text before the percentage
            nextBtn: "Další ❤️"                                         // Text for the next button
        },
        third: {
            text: "Budeš můj Valentýn 14.2.2026? 🌹", // The big question!
            yesBtn: "Ano!",                                             // Text for "Yes" button
            noBtn: "Ne"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "AAAA Tahkle moc?? 🥰🚀",  // Shows when they go past 5000%
        high: "Do nekonečna a ještě dál! 🚀",              // Shows when they go past 1000%
        normal: "A dál! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Jsem ta nejšťastnější osoba na světě! ❤️",
        message: "Brzo dostaneš dáreček, a pevné vřelé objetí a obrovskou pusu na výletě v Polsku!",
        emojis: "💒🔮💋🍊",  // These will bounce around
        image: "https://res.cloudinary.com/dmswytrwi/image/upload/v1770946918/NIK_3941-2_cciqei.jpg"            // YOUR_IMAGE_URL_HERE (e.g., "https://example.com/photo.jpg" or "my-photo.jpg")
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ff52a0",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ddaed3",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ffa47f",     // Button color (should stand out against the background)
        buttonHover: "#e491c9",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#c3110c"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.3         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dmswytrwi/video/upload/v1770945469/Led_Zeppelin_-_Tangerine_myfreemp3_mp3cut.net_h4gltv.mp3", // Music streaming URL
        startText: "🎵 Hrej muziku",        // Button text to start music
        stopText: "🔇 zastav muziku",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
