// Main JavaScript functionality for the Nullianism website

// Language translations
const translations = {
    ru: {
        home: 'Главная',
        about: 'О Нуллианстве',
        commandments: '0 Заповеди',
        rituals: '0 Ритуалы',
        manifesto: '0 Манифест',
        contact: 'Контакты',
        learnMore: 'Узнайте больше',
        explorePrinciples: 'Исследуйте наши принципы',
        readManifesto: 'Читайте манифест',
        darkTheme: 'Темная тема',
        lightTheme: 'Светлая тема',
        
        // Main page content
        heroTitle: '0 НУЛЛИАНСТВО',
        heroSubtitle: 'Вместо крестика нолик, вместо веры любознательность, вместо догмы наука.',
        heroDescription: 'В мире, разделенном догмами, мы выбираем Путь Любознательности. Нуллианство — это не вера в нечто, а приверженность бесконечному познанию. Символ нашего пути — ноль: отправная точка для любого открытия, готовность признавать ошибки и постоянно расти.',
        principlesTitle: 'Принципы Нуллианства',
        curiosityTitle: 'Любознательность',
        curiosityDesc: 'Основа нашего мировоззрения — бесконечное стремление к познанию',
        scienceTitle: 'Научный метод',
        scienceDesc: 'Доказательства и факты — наш путь к истине',
        opennessTitle: 'Открытость',
        opennessDesc: 'Готовность изменить взгляды при появлении новых данных',
        philosophyTitle: 'Изучите Философию Нуллианства',
        philosophyDesc: 'Познакомьтесь с основными текстами и практиками нашего движения',
        manifestoCardTitle: '0 Манифест Любознательности',
        manifestoCardDesc: 'Декларация принципов для всех, кто выбирает путь познания',
        commandmentsCardTitle: '0 Заповеди',
        commandmentsCardDesc: 'Десять принципов, которые направляют нуллианцев в их стремлении к истине',
        ritualsCardTitle: '0 Ритуалы',
        ritualsCardDesc: 'Практики и упражнения для развития критического мышления',
        videoTitle: 'Видео о Нуллианстве',
        videoDesc: 'Узнайте больше о философии Нуллианства из этого видео',
        readManifestoBtn: 'Читать манифест',
        studyCommandments: 'Изучить заповеди',
        studyRituals: 'Изучить ритуалы',
        
        // Footer
        footerCopyright: '© 2023 Nullianism. Все права защищены.',
        footerSocial: 'Следите за развитием Нуллианства',
        telegramLink: 'Канал Панчина в Telegram',

        // Header and Footer links
        aboutNullianism: 'О Нуллианстве',
        zeroCommandments: '0 Заповеди',
        zeroRituals: '0 Ритуалы',
        manifestoCuriosity: 'Манифест Любознательности',
        contacts: 'Контакты'
    },
    en: {
        home: 'Home',
        about: 'About Nullianism',
        commandments: '0 Commandments',
        rituals: '0 Rituals',
        manifesto: '0 Manifesto',
        contact: 'Contact',
        learnMore: 'Learn More',
        explorePrinciples: 'Explore Principles',
        readManifesto: 'Read Manifesto',
        darkTheme: 'Dark Theme',
        lightTheme: 'Light Theme',
        
        // Main page content
        heroTitle: '0 NULLIANISM',
        heroSubtitle: 'Instead of a cross - a zero, instead of faith - curiosity, instead of dogma - science.',
        heroDescription: 'In a world divided by dogmas, we choose the Path of Curiosity. Nullianism is not a belief in something, but a commitment to endless knowledge. The symbol of our path is zero: the starting point for any discovery, the willingness to acknowledge mistakes and constantly grow.',
        principlesTitle: 'Principles of Nullianism',
        curiosityTitle: 'Curiosity',
        curiosityDesc: 'The foundation of our worldview — infinite striving for knowledge',
        scienceTitle: 'Scientific Method',
        scienceDesc: 'Evidence and facts — our path to truth',
        opennessTitle: 'Openness',
        opennessDesc: 'Readiness to change views when new data appears',
        philosophyTitle: 'Study the Philosophy of Nullianism',
        philosophyDesc: 'Get acquainted with the main texts and practices of our movement',
        manifestoCardTitle: '0 Manifesto of Curiosity',
        manifestoCardDesc: 'Declaration of principles for all who choose the path of knowledge',
        commandmentsCardTitle: '0 Commandments',
        commandmentsCardDesc: 'Ten principles that guide nullianists in their pursuit of truth',
        ritualsCardTitle: '0 Rituals',
        ritualsCardDesc: 'Practices and exercises for developing critical thinking',
        videoTitle: 'Video about Nullianism',
        videoDesc: 'Learn more about the philosophy of Nullianism from this video',
        readManifestoBtn: 'Read manifesto',
        studyCommandments: 'Study commandments',
        studyRituals: 'Study rituals',
        
        // Footer
        footerCopyright: '© 2023 Nullianism. All rights reserved.',
        footerSocial: 'Follow the development of Nullianism',
        telegramLink: 'Panchin\'s Telegram Channel',

        // Header and Footer links
        aboutNullianism: 'About Nullianism',
        zeroCommandments: '0 Commandments',
        zeroRituals: '0 Rituals',
        manifestoCuriosity: 'Manifesto of Curiosity',
        contacts: 'Contact'
    }
};

// Current language (default: Russian)
let currentLanguage = localStorage.getItem('nullianism-language') || 'ru';

// Apply theme immediately to prevent flash
(function() {
    const savedTheme = localStorage.getItem('nullianism-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Theme management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('nullianism-theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.createThemeToggle();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = this.currentTheme === 'dark' ? 
                translations[currentLanguage].lightTheme : 
                translations[currentLanguage].darkTheme;
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('nullianism-theme', this.currentTheme);
        this.applyTheme();
    }

    createThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Language management
class LanguageManager {
    constructor() {
        this.init();
    }

    init() {
        this.applyLanguage();
        this.createLanguageToggle();
    }

    applyLanguage() {
        // Update navigation and common elements with data-translate
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });

        // Update specific content based on page
        this.updatePageSpecificContent();

        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
        }
    }

    updatePageSpecificContent() {
        // Always update main page content regardless of current text
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const titleText = currentLanguage === 'ru' ? 'НУЛЛИАНСТВО' : 'NULLIANISM';
            heroTitle.innerHTML = `<span class="zero-symbol floating-zero">0</span> ${titleText}`;
        }

        // Update text content for main page
        const heroSubtitle = document.querySelector('.hero p:first-of-type');
        if (heroSubtitle) {
            heroSubtitle.textContent = translations[currentLanguage].heroSubtitle;
        }

        const heroDescription = document.querySelector('.hero p:last-of-type');
        if (heroDescription) {
            heroDescription.textContent = translations[currentLanguage].heroDescription;
        }

        // Update principles section
        const principlesTitle = document.querySelector('section h2');
        if (principlesTitle && (principlesTitle.textContent === 'Принципы Нуллианства' || principlesTitle.textContent === 'Principles of Nullianism')) {
            principlesTitle.textContent = translations[currentLanguage].principlesTitle;
        }

        // Update principle cards
        const principleCards = document.querySelectorAll('.principle-card');
        if (principleCards.length === 3) {
            const principles = [
                { title: translations[currentLanguage].curiosityTitle, desc: translations[currentLanguage].curiosityDesc },
                { title: translations[currentLanguage].scienceTitle, desc: translations[currentLanguage].scienceDesc },
                { title: translations[currentLanguage].opennessTitle, desc: translations[currentLanguage].opennessDesc }
            ];
            
            principleCards.forEach((card, index) => {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                if (title && desc && principles[index]) {
                    const symbol = title.querySelector('.zero-symbol');
                    const symbolText = symbol ? symbol.outerHTML + ' ' : '';
                    title.innerHTML = symbolText + principles[index].title;
                    desc.textContent = principles[index].desc;
                }
            });
        }

        // Update philosophy section
        const philosophyTitle = document.querySelector('.philosophy-links h2');
        if (philosophyTitle && (philosophyTitle.textContent.includes('Изучите') || philosophyTitle.textContent.includes('Study'))) {
            philosophyTitle.textContent = translations[currentLanguage].philosophyTitle;
        }

        const philosophyDesc = document.querySelector('.philosophy-links p');
        if (philosophyDesc && (philosophyDesc.textContent.includes('основными') || philosophyDesc.textContent.includes('main texts'))) {
            philosophyDesc.textContent = translations[currentLanguage].philosophyDesc;
        }

        // Update philosophy cards
        const philosophyCards = document.querySelectorAll('.philosophy-card');
        if (philosophyCards.length === 3) {
            const cards = [
                { title: translations[currentLanguage].manifestoCardTitle, desc: translations[currentLanguage].manifestoCardDesc, btn: translations[currentLanguage].readManifestoBtn },
                { title: translations[currentLanguage].commandmentsCardTitle, desc: translations[currentLanguage].commandmentsCardDesc, btn: translations[currentLanguage].studyCommandments },
                { title: translations[currentLanguage].ritualsCardTitle, desc: translations[currentLanguage].ritualsCardDesc, btn: translations[currentLanguage].studyRituals }
            ];
            
            philosophyCards.forEach((card, index) => {
                const title = card.querySelector('h3');
                const desc = card.querySelector('p');
                const btn = card.querySelector('.philosophy-link');
                if (title && desc && btn && cards[index]) {
                    title.textContent = cards[index].title;
                    desc.textContent = cards[index].desc;
                    btn.textContent = cards[index].btn;
                }
            });
        }

        // Update video section
        const videoTitle = document.querySelector('.video-section h2');
        if (videoTitle && (videoTitle.textContent.includes('Видео') || videoTitle.textContent.includes('Video'))) {
            videoTitle.textContent = translations[currentLanguage].videoTitle;
        }

        const videoDesc = document.querySelector('.video-section p');
        if (videoDesc && (videoDesc.textContent.includes('философии') || videoDesc.textContent.includes('philosophy'))) {
            videoDesc.textContent = translations[currentLanguage].videoDesc;
        }

        // Update page title
        this.updatePageTitle();
    }

    updatePageTitle() {
        const currentPath = window.location.pathname;
        let newTitle = '0 NULLIANISM';
        
        if (currentLanguage === 'ru') {
            newTitle = '0 НУЛЛИАНСТВО';
            if (currentPath.includes('commandments')) {
                newTitle = '0 ЗАПОВЕДИ - Нуллианство';
            } else if (currentPath.includes('rituals')) {
                newTitle = '0 РИТУАЛЫ - Нуллианство';
            } else if (currentPath.includes('manifesto')) {
                newTitle = '0 МАНИФЕСТ ЛЮБОЗНАТЕЛЬНОСТИ - Нуллианство';
            } else if (currentPath.includes('about')) {
                newTitle = 'О Нуллианстве';
            } else if (currentPath.includes('contact')) {
                newTitle = 'Контакты - Нуллианство';
            } else if (currentPath.includes('index') || currentPath === '/') {
                newTitle = '0 НУЛЛИАНСТВО - Путь Любознательности';
            }
        } else {
            if (currentPath.includes('commandments')) {
                newTitle = '0 COMMANDMENTS - Nullianism';
            } else if (currentPath.includes('rituals')) {
                newTitle = '0 RITUALS - Nullianism';
            } else if (currentPath.includes('manifesto')) {
                newTitle = '0 MANIFESTO OF CURIOSITY - Nullianism';
            } else if (currentPath.includes('about')) {
                newTitle = 'About Nullianism';
            } else if (currentPath.includes('contact')) {
                newTitle = 'Contact - Nullianism';
            } else if (currentPath.includes('index') || currentPath === '/') {
                newTitle = '0 NULLIANISM - Path of Curiosity';
            }
        }
        
        document.title = newTitle;
    }

    toggleLanguage() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        localStorage.setItem('nullianism-language', currentLanguage);
        
        // Force re-apply language immediately
        this.applyLanguage();
        
        // Update theme toggle text as well
        const themeManager = window.themeManagerInstance;
        if (themeManager) {
            themeManager.applyTheme();
        }
    }

    createLanguageToggle() {
        const languageToggle = document.querySelector('.language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }
}

// Scientific animations
class ScientificAnimations {
    constructor() {
        this.createFloatingZeros();
        this.initScrollAnimations();
    }

    createFloatingZeros() {
        const zeroElements = document.querySelectorAll('.zero-symbol');
        zeroElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
            element.classList.add('floating-zero');
        });
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
}

// Component loader for includes
class ComponentLoader {
    static async loadComponent(elementId, componentPath) {
        const element = document.getElementById(elementId);
        if (element) {
            try {
                const response = await fetch(componentPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                element.innerHTML = html;
                
                // Re-initialize event listeners after loading components
                if (elementId === 'header-placeholder') {
                    // Reinitialize theme and language managers
                    new ThemeManager();
                    new LanguageManager();
                }
            } catch (error) {
                console.error(`Error loading component ${componentPath}:`, error);
                // Fallback content
                if (elementId === 'header-placeholder') {
                    element.innerHTML = '<header><h1>0 НУЛЛИАНСТВО</h1></header>';
                } else if (elementId === 'footer-placeholder') {
                    element.innerHTML = '<footer><p>&copy; 2023 Nullianism</p></footer>';
                }
            }
        }
    }

    static async init() {
        // Load header and footer components
        await this.loadComponent('header-placeholder', 'components/header.html');
        await this.loadComponent('footer-placeholder', 'components/footer.html');
        
        // Don't load navigation placeholder on main page
        if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
            await this.loadComponent('navigation-placeholder', 'components/navigation.html');
        }
    }
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Main initialization
function init() {
    // Add loaded class to enable transitions
    document.body.classList.add('loaded');
    
    // Initialize managers and store reference for access
    window.themeManagerInstance = new ThemeManager();
    window.languageManagerInstance = new LanguageManager();
    new ScientificAnimations();
    
    // Initialize functionality
    initSmoothScrolling();
    initMobileMenu();
    
    console.log('🔬 Nullianism website initialized - Science and curiosity await!');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, LanguageManager, translations };
}