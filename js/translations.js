// Multi-Language Translation System for ZLF Music Library
// Supports: Indonesian, English, Spanish, French, German, Japanese, Korean, Chinese

const translations = {
    // Indonesian (Default)
    id: {
        // Navigation
        home: "Beranda",
        myLibrary: "Perpustakaan Saya",
        recentlyPlayed: "Terakhir Diputar",
        
        // Sidebar
        quickLinks: "Tautan Cepat",
        sections: "Bagian",
        featured: "Unggulan",
        statistics: "Statistik",
        updates: "Pembaruan",
        favoriteSongs: "Lagu Favorit",
        topSongs: "Lagu Teratas",
        myPlaylists: "Playlist Saya",
        myArtists: "Artis Saya",
        
        // User Profile
        premiumUser: "Pengguna Premium",
        
        // Hero Section
        premiumCollection: "Koleksi Premium",
        welcomeTitle: "Selamat Datang di Alam Semesta Musik Anda",
        welcomeSubtitle: "Temukan dan nikmati playlist pilihan ZLF, tangga lagu teratas, dan artis favorit",
        exploreLibrary: "Jelajahi Perpustakaan",
        viewFeatured: "Lihat Unggulan",
        
        // Library Header
        playlistCollection: "Koleksi Playlist",
        myMusicLibrary: "Perpustakaan Musik Saya",
        playlists: "playlist",
        songs: "lagu",
        
        // Stats Section
        yourStats: "Statistik Anda",
        totalPlaylists: "Total Playlist",
        favoriteArtists: "Artis Favorit",
        topCharts: "Tangga Lagu",
        favSongs: "Lagu Favorit",
        
        // Featured Section
        featuredCollections: "Koleksi Unggulan",
        featuredDesc: "Playlist pilihan dan artis favorit yang dikurasi khusus",
        
        // Featured Cards
        favoriteMix: "Campuran Favorit",
        favoriteMixDesc: "Koleksi lagu favorit terbaik",
        topChartsTitle: "Tangga Lagu Teratas",
        topChartsDesc: "Lagu teratas yang sedang trending",
        discoveryPlaylist: "Playlist Penemuan",
        discoveryDesc: "Temukan musik baru setiap minggu",
        
        // Update Section
        updateHistory: "Riwayat Pembaruan",
        updateDesc: "Lacak semua fitur baru dan perbaikan",
        version: "Versi",
        premiumRedesign: "Redesain Premium",
        completeUIOverhaul: "Perombakan UI lengkap dengan tema premium gelap",
        advancedSearch: "Pencarian Lanjutan",
        searchDesc: "Pencarian real-time dengan filter",
        viewToggle: "Toggle Tampilan",
        viewToggleDesc: "Beralih antara tampilan grid dan list",
        lazyLoading: "Lazy Loading",
        lazyLoadingDesc: "Optimasi kinerja",
        
        // Music Recommendations
        musicRecs: "Rekomendasi Musik",
        recsDesc: "Temukan musik baru berdasarkan genre favorit Anda",
        pop: "Pop",
        popDesc: "Lagu pop terbaru dan terpopuler",
        rock: "Rock",
        rockDesc: "Klasik rock dan hits modern",
        hiphop: "Hip Hop",
        hiphopDesc: "Beats dan lirik terbaik",
        electronic: "Elektronik",
        electronicDesc: "EDM, house, dan techno",
        indie: "Indie",
        indieDesc: "Artis independen dan suara unik",
        jazz: "Jazz",
        jazzDesc: "Jazz klasik dan kontemporer",
        
        // Quote Section
        quote: "\"Musik adalah bahasa universal umat manusia.\"",
        quoteAuthor: "- Henry Wadsworth Longfellow",
        
        // Search & Filter
        searchPlaceholder: "Cari playlist, artis, atau lagu...",
        searchInLibrary: "Cari di perpustakaan...",
        filterAll: "Semua",
        filterFavorites: "Favorit",
        filterPlaylists: "Playlist",
        filterArtists: "Artis",
        
        // View Toggle
        gridView: "Tampilan Grid",
        listView: "Tampilan List",
        
        // Loading & Messages
        loading: "Memuat...",
        noResults: "Tidak ada hasil ditemukan",
        loadMore: "Muat Lebih Banyak",
        
        // Footer
        madeWith: "Dibuat dengan",
        by: "oleh",
        forZLF: "untuk ZLF",
        
        // Buttons
        playNow: "Putar Sekarang",
        addToLibrary: "Tambah ke Perpustakaan",
        share: "Bagikan",
        
        // Language Selector
        language: "Bahasa",
        selectLanguage: "Pilih Bahasa",
        
        // About Section
        aboutCollection: "Tentang Koleksi Ini",
        aboutCollectionDesc: "Jelajahi perpustakaan musik ZLF yang dikurasi dengan cermat menampilkan playlist teratas, lagu trending, dan artis favorit dari seluruh dunia.",
        important: "Penting",
        spotifyNote: "Untuk menghapus mode \"Preview\", silakan masuk ke Spotify di browser Anda. Catatan: Pemutaran penuh mungkin tidak berfungsi di perangkat mobile.",
        
        // Theme
        darkMode: "Mode Gelap",
        lightMode: "Mode Terang",
        switchToDark: "Beralih ke Mode Gelap",
        switchToLight: "Beralih ke Mode Terang",
    },
    
    // English
    en: {
        // Navigation
        home: "Home",
        myLibrary: "My Library",
        recentlyPlayed: "Recently Played",
        
        // Sidebar
        quickLinks: "Quick Links",
        sections: "Sections",
        featured: "Featured",
        statistics: "Statistics",
        updates: "Updates",
        favoriteSongs: "Favorite Songs",
        topSongs: "Top Songs",
        myPlaylists: "My Playlists",
        myArtists: "My Artists",
        
        // User Profile
        premiumUser: "Premium User",
        
        // Hero Section
        premiumCollection: "Premium Collection",
        welcomeTitle: "Welcome to Your Music Universe",
        welcomeSubtitle: "Discover and enjoy ZLF's curated playlists, top charts, and favorite artists",
        exploreLibrary: "Explore Library",
        viewFeatured: "View Featured",
        
        // Library Header
        playlistCollection: "Playlist Collection",
        myMusicLibrary: "My Music Library",
        playlists: "playlists",
        songs: "songs",
        
        // Stats Section
        yourStats: "Your Statistics",
        totalPlaylists: "Total Playlists",
        favoriteArtists: "Favorite Artists",
        topCharts: "Top Charts",
        favSongs: "Favorite Songs",
        
        // Featured Section
        featuredCollections: "Featured Collections",
        featuredDesc: "Curated playlists and favorite artists handpicked for you",
        
        // Featured Cards
        favoriteMix: "Favorite Mix",
        favoriteMixDesc: "Best of your favorite tracks",
        topChartsTitle: "Top Charts",
        topChartsDesc: "Trending songs of the week",
        discoveryPlaylist: "Discovery Playlist",
        discoveryDesc: "New music every week",
        
        // Update Section
        updateHistory: "Update History",
        updateDesc: "Track all new features and improvements",
        version: "Version",
        premiumRedesign: "Premium Redesign",
        completeUIOverhaul: "Complete UI overhaul with dark premium theme",
        advancedSearch: "Advanced Search",
        searchDesc: "Real-time search with filtering",
        viewToggle: "View Toggle",
        viewToggleDesc: "Switch between grid and list view",
        lazyLoading: "Lazy Loading",
        lazyLoadingDesc: "Performance optimization",
        
        // Music Recommendations
        musicRecs: "Music Recommendations",
        recsDesc: "Discover new music based on your favorite genres",
        pop: "Pop",
        popDesc: "Latest and greatest pop hits",
        rock: "Rock",
        rockDesc: "Classic rock and modern hits",
        hiphop: "Hip Hop",
        hiphopDesc: "Best beats and lyrics",
        electronic: "Electronic",
        electronicDesc: "EDM, house, and techno",
        indie: "Indie",
        indieDesc: "Independent artists and unique sounds",
        jazz: "Jazz",
        jazzDesc: "Classic and contemporary jazz",
        
        // Quote Section
        quote: "\"Music is the universal language of mankind.\"",
        quoteAuthor: "- Henry Wadsworth Longfellow",
        
        // Search & Filter
        searchPlaceholder: "Search playlists, artists, or songs...",
        searchInLibrary: "Search in library...",
        filterAll: "All",
        filterFavorites: "Favorites",
        filterPlaylists: "Playlists",
        filterArtists: "Artists",
        
        // View Toggle
        gridView: "Grid View",
        listView: "List View",
        
        // Loading & Messages
        loading: "Loading...",
        noResults: "No results found",
        loadMore: "Load More",
        
        // Footer
        madeWith: "Made with",
        by: "by",
        forZLF: "for ZLF",
        
        // Buttons
        playNow: "Play Now",
        addToLibrary: "Add to Library",
        share: "Share",
        
        // Language Selector
        language: "Language",
        selectLanguage: "Select Language",
        
        // About Section
        aboutCollection: "About This Collection",
        aboutCollectionDesc: "Explore ZLF's carefully curated music library featuring top playlists, trending songs, and favorite artists from around the world.",
        important: "Important",
        spotifyNote: "To remove \"Preview\" mode, please log in to Spotify in your browser. Note: Full playback may not work on mobile devices.",
    },
    
    // Spanish (Español)
    es: {
        home: "Inicio",
        myLibrary: "Mi Biblioteca",
        recentlyPlayed: "Reproducido Recientemente",
        quickLinks: "Enlaces Rápidos",
        sections: "Secciones",
        featured: "Destacado",
        statistics: "Estadísticas",
        updates: "Actualizaciones",
        favoriteSongs: "Canciones Favoritas",
        topSongs: "Mejores Canciones",
        myPlaylists: "Mis Listas",
        myArtists: "Mis Artistas",
        premiumUser: "Usuario Premium",
        premiumCollection: "Colección Premium",
        welcomeTitle: "Bienvenido a Tu Universo Musical",
        welcomeSubtitle: "Descubre y disfruta las listas seleccionadas de ZLF, charts y artistas favoritos",
        exploreLibrary: "Explorar Biblioteca",
        viewFeatured: "Ver Destacados",
        playlistCollection: "Colección de Listas",
        myMusicLibrary: "Mi Biblioteca Musical",
        playlists: "listas",
        songs: "canciones",
        yourStats: "Tus Estadísticas",
        totalPlaylists: "Total de Listas",
        favoriteArtists: "Artistas Favoritos",
        topCharts: "Top Charts",
        favSongs: "Canciones Favoritas",
        featuredCollections: "Colecciones Destacadas",
        featuredDesc: "Listas de reproducción y artistas favoritos seleccionados para ti",
        favoriteMix: "Mix Favorito",
        favoriteMixDesc: "Lo mejor de tus pistas favoritas",
        topChartsTitle: "Top Charts",
        topChartsDesc: "Canciones en tendencia de la semana",
        discoveryPlaylist: "Lista de Descubrimiento",
        discoveryDesc: "Música nueva cada semana",
        updateHistory: "Historial de Actualizaciones",
        updateDesc: "Rastrea todas las nuevas funciones y mejoras",
        version: "Versión",
        premiumRedesign: "Rediseño Premium",
        completeUIOverhaul: "Renovación completa de UI con tema premium oscuro",
        advancedSearch: "Búsqueda Avanzada",
        searchDesc: "Búsqueda en tiempo real con filtros",
        viewToggle: "Alternar Vista",
        viewToggleDesc: "Cambiar entre vista de cuadrícula y lista",
        lazyLoading: "Carga Diferida",
        lazyLoadingDesc: "Optimización de rendimiento",
        musicRecs: "Recomendaciones Musicales",
        recsDesc: "Descubre nueva música basada en tus géneros favoritos",
        pop: "Pop",
        popDesc: "Los últimos y mejores éxitos pop",
        rock: "Rock",
        rockDesc: "Rock clásico y éxitos modernos",
        hiphop: "Hip Hop",
        hiphopDesc: "Los mejores ritmos y letras",
        electronic: "Electrónica",
        electronicDesc: "EDM, house y techno",
        indie: "Indie",
        indieDesc: "Artistas independientes y sonidos únicos",
        jazz: "Jazz",
        jazzDesc: "Jazz clásico y contemporáneo",
        quote: "\"La música es el lenguaje universal de la humanidad.\"",
        quoteAuthor: "- Henry Wadsworth Longfellow",
        searchPlaceholder: "Buscar listas, artistas o canciones...",
        searchInLibrary: "Buscar en biblioteca...",
        filterAll: "Todo",
        filterFavorites: "Favoritos",
        filterPlaylists: "Listas",
        filterArtists: "Artistas",
        gridView: "Vista de Cuadrícula",
        listView: "Vista de Lista",
        loading: "Cargando...",
        noResults: "No se encontraron resultados",
        loadMore: "Cargar Más",
        madeWith: "Hecho con",
        by: "por",
        forZLF: "para ZLF",
        playNow: "Reproducir Ahora",
        addToLibrary: "Agregar a Biblioteca",
        share: "Compartir",
        language: "Idioma",
        selectLanguage: "Seleccionar Idioma",
        
        // About Section
        aboutCollection: "Acerca de Esta Colección",
        aboutCollectionDesc: "Explora la biblioteca musical cuidadosamente seleccionada de ZLF con las mejores listas, canciones en tendencia y artistas favoritos de todo el mundo.",
        important: "Importante",
        spotifyNote: "Para eliminar el modo \"Preview\", inicia sesión en Spotify en tu navegador. Nota: La reproducción completa puede no funcionar en dispositivos móviles.",
    },
    
    // French (Français)
    fr: {
        home: "Accueil",
        myLibrary: "Ma Bibliothèque",
        recentlyPlayed: "Récemment Joué",
        quickLinks: "Liens Rapides",
        sections: "Sections",
        featured: "En Vedette",
        statistics: "Statistiques",
        updates: "Mises à Jour",
        favoriteSongs: "Chansons Favorites",
        topSongs: "Meilleures Chansons",
        myPlaylists: "Mes Playlists",
        myArtists: "Mes Artistes",
        premiumUser: "Utilisateur Premium",
        premiumCollection: "Collection Premium",
        welcomeTitle: "Bienvenue dans Votre Univers Musical",
        welcomeSubtitle: "Découvrez et profitez des playlists sélectionnées de ZLF, des charts et artistes favoris",
        exploreLibrary: "Explorer la Bibliothèque",
        viewFeatured: "Voir en Vedette",
        playlistCollection: "Collection de Playlists",
        myMusicLibrary: "Ma Bibliothèque Musicale",
        playlists: "playlists",
        songs: "chansons",
        yourStats: "Vos Statistiques",
        totalPlaylists: "Total de Playlists",
        favoriteArtists: "Artistes Favoris",
        topCharts: "Top Charts",
        favSongs: "Chansons Favorites",
        featuredCollections: "Collections en Vedette",
        featuredDesc: "Playlists et artistes favoris sélectionnés pour vous",
        favoriteMix: "Mix Favori",
        favoriteMixDesc: "Le meilleur de vos pistes favorites",
        topChartsTitle: "Top Charts",
        topChartsDesc: "Chansons tendance de la semaine",
        discoveryPlaylist: "Playlist Découverte",
        discoveryDesc: "Nouvelle musique chaque semaine",
        updateHistory: "Historique des Mises à Jour",
        updateDesc: "Suivez toutes les nouvelles fonctionnalités et améliorations",
        version: "Version",
        premiumRedesign: "Refonte Premium",
        completeUIOverhaul: "Refonte complète de l'interface avec thème premium sombre",
        advancedSearch: "Recherche Avancée",
        searchDesc: "Recherche en temps réel avec filtrage",
        viewToggle: "Basculer la Vue",
        viewToggleDesc: "Basculer entre grille et liste",
        lazyLoading: "Chargement Différé",
        lazyLoadingDesc: "Optimisation des performances",
        musicRecs: "Recommandations Musicales",
        recsDesc: "Découvrez de la nouvelle musique selon vos genres favoris",
        pop: "Pop",
        popDesc: "Les derniers et meilleurs hits pop",
        rock: "Rock",
        rockDesc: "Rock classique et hits modernes",
        hiphop: "Hip Hop",
        hiphopDesc: "Meilleurs beats et paroles",
        electronic: "Électronique",
        electronicDesc: "EDM, house et techno",
        indie: "Indie",
        indieDesc: "Artistes indépendants et sons uniques",
        jazz: "Jazz",
        jazzDesc: "Jazz classique et contemporain",
        quote: "\"La musique est le langage universel de l'humanité.\"",
        quoteAuthor: "- Henry Wadsworth Longfellow",
        searchPlaceholder: "Rechercher playlists, artistes ou chansons...",
        searchInLibrary: "Rechercher dans la bibliothèque...",
        filterAll: "Tout",
        filterFavorites: "Favoris",
        filterPlaylists: "Playlists",
        filterArtists: "Artistes",
        gridView: "Vue Grille",
        listView: "Vue Liste",
        loading: "Chargement...",
        noResults: "Aucun résultat trouvé",
        loadMore: "Charger Plus",
        madeWith: "Fait avec",
        by: "par",
        forZLF: "pour ZLF",
        playNow: "Jouer Maintenant",
        addToLibrary: "Ajouter à la Bibliothèque",
        share: "Partager",
        language: "Langue",
        selectLanguage: "Sélectionner la Langue",
        
        // About Section
        aboutCollection: "À Propos de Cette Collection",
        aboutCollectionDesc: "Explorez la bibliothèque musicale soigneusement sélectionnée de ZLF avec les meilleures playlists, chansons tendance et artistes favoris du monde entier.",
        important: "Important",
        spotifyNote: "Pour supprimer le mode \"Preview\", connectez-vous à Spotify dans votre navigateur. Note: La lecture complète peut ne pas fonctionner sur les appareils mobiles.",
    },
    
    // German (Deutsch)
    de: {
        home: "Startseite",
        myLibrary: "Meine Bibliothek",
        recentlyPlayed: "Kürzlich Gespielt",
        quickLinks: "Schnelllinks",
        sections: "Abschnitte",
        featured: "Empfohlen",
        statistics: "Statistiken",
        updates: "Aktualisierungen",
        favoriteSongs: "Lieblingssongs",
        topSongs: "Top Songs",
        myPlaylists: "Meine Playlists",
        myArtists: "Meine Künstler",
        premiumUser: "Premium Nutzer",
        premiumCollection: "Premium Kollektion",
        welcomeTitle: "Willkommen in Ihrem Musik-Universum",
        welcomeSubtitle: "Entdecken und genießen Sie ZLFs kuratierte Playlists, Top-Charts und Lieblingskünstler",
        exploreLibrary: "Bibliothek Erkunden",
        viewFeatured: "Empfohlene Ansehen",
        playlistCollection: "Playlist Kollektion",
        myMusicLibrary: "Meine Musikbibliothek",
        playlists: "Playlists",
        songs: "Songs",
        yourStats: "Ihre Statistiken",
        totalPlaylists: "Playlists Gesamt",
        favoriteArtists: "Lieblingskünstler",
        topCharts: "Top Charts",
        favSongs: "Lieblingssongs",
        featuredCollections: "Empfohlene Kollektionen",
        featuredDesc: "Kuratierte Playlists und Lieblingskünstler speziell für Sie",
        favoriteMix: "Favoriten-Mix",
        favoriteMixDesc: "Das Beste Ihrer Lieblingstracks",
        topChartsTitle: "Top Charts",
        topChartsDesc: "Trending Songs der Woche",
        discoveryPlaylist: "Entdeckungs-Playlist",
        discoveryDesc: "Jede Woche neue Musik",
        updateHistory: "Update-Verlauf",
        updateDesc: "Verfolgen Sie alle neuen Funktionen und Verbesserungen",
        version: "Version",
        premiumRedesign: "Premium Redesign",
        completeUIOverhaul: "Komplette UI-Überarbeitung mit dunklem Premium-Theme",
        advancedSearch: "Erweiterte Suche",
        searchDesc: "Echtzeit-Suche mit Filterung",
        viewToggle: "Ansicht Umschalten",
        viewToggleDesc: "Zwischen Raster und Liste wechseln",
        lazyLoading: "Lazy Loading",
        lazyLoadingDesc: "Performance-Optimierung",
        musicRecs: "Musik-Empfehlungen",
        recsDesc: "Entdecken Sie neue Musik basierend auf Ihren Lieblingsgenres",
        pop: "Pop",
        popDesc: "Neueste und beste Pop-Hits",
        rock: "Rock",
        rockDesc: "Klassischer Rock und moderne Hits",
        hiphop: "Hip Hop",
        hiphopDesc: "Beste Beats und Texte",
        electronic: "Elektronisch",
        electronicDesc: "EDM, House und Techno",
        indie: "Indie",
        indieDesc: "Unabhängige Künstler und einzigartige Sounds",
        jazz: "Jazz",
        jazzDesc: "Klassischer und zeitgenössischer Jazz",
        quote: "\"Musik ist die universelle Sprache der Menschheit.\"",
        quoteAuthor: "- Henry Wadsworth Longfellow",
        searchPlaceholder: "Playlists, Künstler oder Songs suchen...",
        searchInLibrary: "In Bibliothek suchen...",
        filterAll: "Alle",
        filterFavorites: "Favoriten",
        filterPlaylists: "Playlists",
        filterArtists: "Künstler",
        gridView: "Rasteransicht",
        listView: "Listenansicht",
        loading: "Laden...",
        noResults: "Keine Ergebnisse gefunden",
        loadMore: "Mehr Laden",
        madeWith: "Gemacht mit",
        by: "von",
        forZLF: "für ZLF",
        playNow: "Jetzt Abspielen",
        addToLibrary: "Zur Bibliothek Hinzufügen",
        share: "Teilen",
        language: "Sprache",
        selectLanguage: "Sprache Auswählen",
        
        // About Section
        aboutCollection: "Über Diese Sammlung",
        aboutCollectionDesc: "Entdecken Sie ZLFs sorgfältig kuratierte Musikbibliothek mit Top-Playlists, Trending-Songs und Lieblingskünstlern aus aller Welt.",
        important: "Wichtig",
        spotifyNote: "Um den \"Preview\"-Modus zu entfernen, melden Sie sich in Ihrem Browser bei Spotify an. Hinweis: Vollständige Wiedergabe funktioniert möglicherweise nicht auf mobilen Geräten.",
    },
    
    // Japanese (日本語)
    ja: {
        home: "ホーム",
        myLibrary: "マイライブラリ",
        recentlyPlayed: "最近再生した曲",
        quickLinks: "クイックリンク",
        sections: "セクション",
        featured: "注目",
        statistics: "統計",
        updates: "更新情報",
        favoriteSongs: "お気に入りの曲",
        topSongs: "トップソング",
        myPlaylists: "マイプレイリスト",
        myArtists: "マイアーティスト",
        premiumUser: "プレミアムユーザー",
        premiumCollection: "プレミアムコレクション",
        welcomeTitle: "音楽の宇宙へようこそ",
        welcomeSubtitle: "ZLFが厳選したプレイリスト、トップチャート、お気に入りのアーティストを発見して楽しもう",
        exploreLibrary: "ライブラリを探索",
        viewFeatured: "注目を見る",
        playlistCollection: "プレイリストコレクション",
        myMusicLibrary: "マイミュージックライブラリ",
        playlists: "プレイリスト",
        songs: "曲",
        yourStats: "あなたの統計",
        totalPlaylists: "総プレイリスト数",
        favoriteArtists: "お気に入りのアーティスト",
        topCharts: "トップチャート",
        favSongs: "お気に入りの曲",
        featuredCollections: "注目のコレクション",
        featuredDesc: "あなたのために厳選されたプレイリストとお気に入りのアーティスト",
        favoriteMix: "お気に入りミックス",
        favoriteMixDesc: "あなたのお気に入りトラックのベスト",
        topChartsTitle: "トップチャート",
        topChartsDesc: "今週のトレンド曲",
        discoveryPlaylist: "ディスカバリープレイリスト",
        discoveryDesc: "毎週新しい音楽",
        updateHistory: "更新履歴",
        updateDesc: "すべての新機能と改善を追跡",
        version: "バージョン",
        premiumRedesign: "プレミアムリデザイン",
        completeUIOverhaul: "ダークプレミアムテーマによる完全なUI刷新",
        advancedSearch: "高度な検索",
        searchDesc: "フィルタリング付きリアルタイム検索",
        viewToggle: "表示切替",
        viewToggleDesc: "グリッドとリスト表示を切り替え",
        lazyLoading: "遅延読み込み",
        lazyLoadingDesc: "パフォーマンスの最適化",
        musicRecs: "音楽のおすすめ",
        recsDesc: "お気に入りのジャンルに基づいて新しい音楽を発見",
        pop: "ポップ",
        popDesc: "最新かつ最高のポップヒット",
        rock: "ロック",
        rockDesc: "クラシックロックとモダンヒット",
        hiphop: "ヒップホップ",
        hiphopDesc: "最高のビートと歌詞",
        electronic: "エレクトロニック",
        electronicDesc: "EDM、ハウス、テクノ",
        indie: "インディー",
        indieDesc: "独立系アーティストとユニークなサウンド",
        jazz: "ジャズ",
        jazzDesc: "クラシックと現代のジャズ",
        quote: "「音楽は人類の普遍的な言語である。」",
        quoteAuthor: "- ヘンリー・ワズワース・ロングフェロー",
        searchPlaceholder: "プレイリスト、アーティスト、曲を検索...",
        searchInLibrary: "ライブラリ内を検索...",
        filterAll: "すべて",
        filterFavorites: "お気に入り",
        filterPlaylists: "プレイリスト",
        filterArtists: "アーティスト",
        gridView: "グリッド表示",
        listView: "リスト表示",
        loading: "読み込み中...",
        noResults: "結果が見つかりません",
        loadMore: "さらに読み込む",
        madeWith: "で作成",
        by: "作成者",
        forZLF: "ZLFのために",
        playNow: "今すぐ再生",
        addToLibrary: "ライブラリに追加",
        share: "共有",
        language: "言語",
        selectLanguage: "言語を選択",
        
        // About Section
        aboutCollection: "このコレクションについて",
        aboutCollectionDesc: "ZLFが厳選した音楽ライブラリをご覧ください。世界中のトッププレイリスト、トレンド曲、お気に入りのアーティストを特集しています。",
        important: "重要",
        spotifyNote: "「Preview」モードを削除するには、ブラウザでSpotifyにログインしてください。注意：モバイルデバイスではフル再生が機能しない場合があります。",
    },
    
    // Korean (한국어)
    ko: {
        home: "홈",
        myLibrary: "내 라이브러리",
        recentlyPlayed: "최근 재생",
        quickLinks: "빠른 링크",
        sections: "섹션",
        featured: "추천",
        statistics: "통계",
        updates: "업데이트",
        favoriteSongs: "좋아하는 노래",
        topSongs: "인기곡",
        myPlaylists: "내 플레이리스트",
        myArtists: "내 아티스트",
        premiumUser: "프리미엄 사용자",
        premiumCollection: "프리미엄 컬렉션",
        welcomeTitle: "음악 세계에 오신 것을 환영합니다",
        welcomeSubtitle: "ZLF가 선별한 플레이리스트, 인기 차트, 좋아하는 아티스트를 발견하고 즐기세요",
        exploreLibrary: "라이브러리 탐색",
        viewFeatured: "추천 보기",
        playlistCollection: "플레이리스트 컬렉션",
        myMusicLibrary: "내 음악 라이브러리",
        playlists: "플레이리스트",
        songs: "노래",
        yourStats: "나의 통계",
        totalPlaylists: "전체 플레이리스트",
        favoriteArtists: "좋아하는 아티스트",
        topCharts: "인기 차트",
        favSongs: "좋아하는 노래",
        featuredCollections: "추천 컬렉션",
        featuredDesc: "당신을 위해 선별된 플레이리스트와 좋아하는 아티스트",
        favoriteMix: "즐겨찾기 믹스",
        favoriteMixDesc: "가장 좋아하는 트랙 모음",
        topChartsTitle: "인기 차트",
        topChartsDesc: "이번 주 트렌딩 노래",
        discoveryPlaylist: "발견 플레이리스트",
        discoveryDesc: "매주 새로운 음악",
        updateHistory: "업데이트 기록",
        updateDesc: "모든 새로운 기능과 개선사항 추적",
        version: "버전",
        premiumRedesign: "프리미엄 리디자인",
        completeUIOverhaul: "다크 프리미엄 테마로 완전한 UI 개편",
        advancedSearch: "고급 검색",
        searchDesc: "필터링이 있는 실시간 검색",
        viewToggle: "보기 전환",
        viewToggleDesc: "그리드와 리스트 보기 간 전환",
        lazyLoading: "지연 로딩",
        lazyLoadingDesc: "성능 최적화",
        musicRecs: "음악 추천",
        recsDesc: "좋아하는 장르를 기반으로 새로운 음악 발견",
        pop: "팝",
        popDesc: "최신 최고의 팝 히트곡",
        rock: "록",
        rockDesc: "클래식 록과 현대 히트곡",
        hiphop: "힙합",
        hiphopDesc: "최고의 비트와 가사",
        electronic: "일렉트로닉",
        electronicDesc: "EDM, 하우스, 테크노",
        indie: "인디",
        indieDesc: "독립 아티스트와 독특한 사운드",
        jazz: "재즈",
        jazzDesc: "클래식과 현대 재즈",
        quote: "\"음악은 인류의 보편적 언어이다.\"",
        quoteAuthor: "- 헨리 워즈워스 롱펠로",
        searchPlaceholder: "플레이리스트, 아티스트, 노래 검색...",
        searchInLibrary: "라이브러리에서 검색...",
        filterAll: "전체",
        filterFavorites: "즐겨찾기",
        filterPlaylists: "플레이리스트",
        filterArtists: "아티스트",
        gridView: "그리드 보기",
        listView: "리스트 보기",
        loading: "로딩 중...",
        noResults: "결과를 찾을 수 없습니다",
        loadMore: "더 보기",
        madeWith: "제작",
        by: "제작자",
        forZLF: "ZLF를 위해",
        playNow: "지금 재생",
        addToLibrary: "라이브러리에 추가",
        share: "공유",
        language: "언어",
        selectLanguage: "언어 선택",
        
        // About Section
        aboutCollection: "이 컬렉션 소개",
        aboutCollectionDesc: "전 세계의 인기 플레이리스트, 트렌딩 노래, 좋아하는 아티스트를 특징으로 하는 ZLF의 신중하게 선별된 음악 라이브러리를 탐색하세요.",
        important: "중요",
        spotifyNote: "\"Preview\" 모드를 제거하려면 브라우저에서 Spotify에 로그인하세요. 참고: 모바일 기기에서는 전체 재생이 작동하지 않을 수 있습니다.",
    },
    
    // Chinese Simplified (简体中文)
    zh: {
        home: "主页",
        myLibrary: "我的资料库",
        recentlyPlayed: "最近播放",
        quickLinks: "快速链接",
        sections: "部分",
        featured: "精选",
        statistics: "统计",
        updates: "更新",
        favoriteSongs: "喜爱的歌曲",
        topSongs: "热门歌曲",
        myPlaylists: "我的播放列表",
        myArtists: "我的艺术家",
        premiumUser: "高级用户",
        premiumCollection: "高级收藏",
        welcomeTitle: "欢迎来到您的音乐宇宙",
        welcomeSubtitle: "发现和享受ZLF精选的播放列表、热门榜单和最喜欢的艺术家",
        exploreLibrary: "探索资料库",
        viewFeatured: "查看精选",
        playlistCollection: "播放列表收藏",
        myMusicLibrary: "我的音乐资料库",
        playlists: "播放列表",
        songs: "歌曲",
        yourStats: "您的统计",
        totalPlaylists: "播放列表总数",
        favoriteArtists: "喜爱的艺术家",
        topCharts: "热门榜单",
        favSongs: "喜爱的歌曲",
        featuredCollections: "精选收藏",
        featuredDesc: "为您精心挑选的播放列表和最喜欢的艺术家",
        favoriteMix: "最爱混音",
        favoriteMixDesc: "您最喜欢曲目的精选",
        topChartsTitle: "热门榜单",
        topChartsDesc: "本周热门歌曲",
        discoveryPlaylist: "发现播放列表",
        discoveryDesc: "每周新音乐",
        updateHistory: "更新历史",
        updateDesc: "跟踪所有新功能和改进",
        version: "版本",
        premiumRedesign: "高级重新设计",
        completeUIOverhaul: "采用深色高级主题的完整UI改造",
        advancedSearch: "高级搜索",
        searchDesc: "带过滤的实时搜索",
        viewToggle: "视图切换",
        viewToggleDesc: "在网格和列表视图之间切换",
        lazyLoading: "延迟加载",
        lazyLoadingDesc: "性能优化",
        musicRecs: "音乐推荐",
        recsDesc: "根据您喜欢的流派发现新音乐",
        pop: "流行",
        popDesc: "最新最棒的流行歌曲",
        rock: "摇滚",
        rockDesc: "经典摇滚和现代热门",
        hiphop: "嘻哈",
        hiphopDesc: "最佳节奏和歌词",
        electronic: "电子",
        electronicDesc: "EDM、浩室和铁克诺",
        indie: "独立",
        indieDesc: "独立艺术家和独特声音",
        jazz: "爵士",
        jazzDesc: "经典和当代爵士",
        quote: "\"音乐是人类的通用语言。\"",
        quoteAuthor: "- 亨利·沃兹沃斯·朗费罗",
        searchPlaceholder: "搜索播放列表、艺术家或歌曲...",
        searchInLibrary: "在资料库中搜索...",
        filterAll: "全部",
        filterFavorites: "收藏",
        filterPlaylists: "播放列表",
        filterArtists: "艺术家",
        gridView: "网格视图",
        listView: "列表视图",
        loading: "加载中...",
        noResults: "未找到结果",
        loadMore: "加载更多",
        madeWith: "制作于",
        by: "作者",
        forZLF: "为ZLF",
        playNow: "立即播放",
        addToLibrary: "添加到资料库",
        share: "分享",
        language: "语言",
        selectLanguage: "选择语言",
        
        // About Section
        aboutCollection: "关于此收藏",
        aboutCollectionDesc: "探索ZLF精心策划的音乐库，包含来自世界各地的热门播放列表、热门歌曲和最喜欢的艺术家。",
        important: "重要",
        spotifyNote: "要删除\"预览\"模式，请在浏览器中登录Spotify。注意：完整播放可能无法在移动设备上运行。",
    },
};

// Language names with flags
const languageNames = {
    id: { name: "Indonesia", flag: "🇮🇩" },
    en: { name: "English", flag: "🇺🇸" },
    es: { name: "Español", flag: "🇪🇸" },
    fr: { name: "Français", flag: "🇫🇷" },
    de: { name: "Deutsch", flag: "🇩🇪" },
    ja: { name: "日本語", flag: "🇯🇵" },
    ko: { name: "한국어", flag: "🇰🇷" },
    zh: { name: "简体中文", flag: "🇨🇳" },
};

// Translation Manager Class
class TranslationManager {
    constructor() {
        this.currentLang = this.getSavedLanguage() || 'id';
        this.translations = translations;
        this.languageNames = languageNames;
    }

    // Get saved language from localStorage
    getSavedLanguage() {
        return localStorage.getItem('zlfMusicLanguage');
    }

    // Save language to localStorage
    saveLanguage(lang) {
        localStorage.setItem('zlfMusicLanguage', lang);
    }

    // Set current language
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            this.saveLanguage(lang);
            this.updatePageLanguage();
            return true;
        }
        return false;
    }

    // Get translation for a key
    t(key) {
        return this.translations[this.currentLang][key] || key;
    }

    // Update all translatable elements on the page
    updatePageLanguage() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            // Update text or placeholder based on element type
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;

        // Dispatch event for custom handlers
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: this.currentLang } 
        }));
    }

    // Get current language info
    getCurrentLanguageInfo() {
        return {
            code: this.currentLang,
            ...this.languageNames[this.currentLang]
        };
    }

    // Get all available languages
    getAvailableLanguages() {
        return Object.keys(this.languageNames).map(code => ({
            code,
            ...this.languageNames[code]
        }));
    }
}

// Initialize global translation manager
const i18n = new TranslationManager();

// Auto-initialize on DOM load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        i18n.updatePageLanguage();
    });
}
