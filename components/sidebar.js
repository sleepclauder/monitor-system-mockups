(function () {
    const navItems = [
        // { href: 'dashboard.html', icon: '\u{1F4CA}', label: 'Dashboard' },
        { href: 'objects.html', icon: '\u{1F4E1}', label: '\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430' },
        { href: 'mosaicwall.html', icon: '\u229E', label: '\u041C\u043E\u0437\u0430\u0438\u043A\u0430' },
        // { href: 'object-detail.html', icon: '\u{1F4DD}', label: '\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430' },
        // { href: 'alerts.html', icon: '\u{1F514}', label: '\u0410\u043B\u0435\u0440\u0442\u044B \u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F' },
        // { href: 'reports.html', icon: '\u{1F4C8}', label: '\u041E\u0442\u0447\u0435\u0442\u044B \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0438' },
        { href: 'settings.html', icon: '\u2699\uFE0F', label: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438' },
    ];

    const currentPage = location.pathname.split('/').pop() || 'dashboard.html';
    const lang = localStorage.getItem('monix_lang') || 'ru';

    const navHtml = navItems
        .map(item => {
            const isActive = currentPage === item.href ? ' active' : '';
            return `<li class="nav-item">
                <a href="${item.href}" class="nav-link${isActive}" data-tooltip="${item.label}">
                    <span class="nav-icon">${item.icon}</span>
                </a>
            </li>`;
        })
        .join('\n');

    const langTooltip = lang === 'ru' ? 'Switch to English' : '\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439';

    const sidebarHtml = `
        <div class="logo">
            <img src="../media/monixlogo.svg" alt="MoniX" class="logo-img">
        </div>
        <nav>
            <ul class="nav-menu">
                ${navHtml}
            </ul>
        </nav>
        <div class="sidebar-bottom">
            <a href="#" class="sidebar-bottom-btn${lang === 'en' ? ' lang-en' : ''}" data-tooltip="${langTooltip}" id="lang-toggle">
                <span class="lang-label">${lang.toUpperCase()}</span>
            </a>
            <a href="#" class="sidebar-bottom-btn" data-tooltip="\u041F\u0440\u043E\u0444\u0438\u043B\u044C" id="user-btn">
                <span class="nav-icon">\u{1F464}</span>
            </a>
            <a href="#" class="sidebar-bottom-btn sidebar-bottom-btn--logout" data-tooltip="\u0412\u044B\u0445\u043E\u0434" id="logout-btn">
                <span class="nav-icon">\u{1F6AA}</span>
            </a>
        </div>
    `;

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarHtml;

        document.getElementById('lang-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            const current = localStorage.getItem('monix_lang') || 'ru';
            const next = current === 'ru' ? 'en' : 'ru';
            localStorage.setItem('monix_lang', next);
            this.querySelector('.lang-label').textContent = next.toUpperCase();
            this.classList.toggle('lang-en', next === 'en');
            this.dataset.tooltip = next === 'ru' ? 'Switch to English' : '\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u0438\u0439';
        });
    }
})();
