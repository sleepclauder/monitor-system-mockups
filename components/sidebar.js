(function () {
    const navItems = [
        { href: 'dashboard.html', icon: '\u{1F4CA}', label: 'Dashboard' },
        { href: 'objects.html', icon: '\u{1F5A5}\uFE0F', label: '\u041E\u0431\u044A\u0435\u043A\u0442\u044B \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430' },
        { href: 'object-detail.html', icon: '\u{1F4DD}', label: '\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u0430' },
        { href: 'alerts.html', icon: '\u{1F514}', label: '\u0410\u043B\u0435\u0440\u0442\u044B \u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F' },
        { href: 'reports.html', icon: '\u{1F4C8}', label: '\u041E\u0442\u0447\u0435\u0442\u044B \u0438 \u0433\u0440\u0430\u0444\u0438\u043A\u0438' },
        { href: 'settings.html', icon: '\u2699\uFE0F', label: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438' },
    ];

    const currentPage = location.pathname.split('/').pop() || 'dashboard.html';

    const navHtml = navItems
        .map(item => {
            const isActive = currentPage === item.href ? ' active' : '';
            return `<li class="nav-item">
                <a href="${item.href}" class="nav-link${isActive}">
                    <span class="nav-icon">${item.icon}</span>
                    ${item.label}
                </a>
            </li>`;
        })
        .join('\n');

    const sidebarHtml = `
        <div class="logo">
            <h1>MONITOR//SYS</h1>
        </div>
        <nav>
            <ul class="nav-menu">
                ${navHtml}
            </ul>
        </nav>
    `;

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = sidebarHtml;
    }
})();
