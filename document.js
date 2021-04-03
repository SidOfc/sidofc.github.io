(function () {
    var themeBackgrounds = window.themeBackgrounds || {};
    var themeNames = Object.keys(themeBackgrounds);
    var d = document;
    var html = d.querySelector('html');
    var style = d.createElement('style');
    var theme;

    try {
        theme = localStorage.getItem('theme');
    } catch (e) {}

    function applyTheme(theme, store) {
        themeNames.forEach(function (name) {
            html.classList.remove(name);
        });

        if (theme) {
            html.classList.add(theme);
            style.innerHTML =
                'html { background-color:' + themeBackgrounds[theme] + '; }';
        }

        if (store) {
            try {
                if (theme) {
                    localStorage.setItem('theme', theme);
                } else {
                    localStorage.removeItem('theme');
                }
            } catch (e) {}
        }
    }

    html.classList.remove('no-js');
    d.head.appendChild(style);

    window.addEventListener('contextmenu', function (ev) {
        if (ev.target.getAttribute('data-theme')) {
            ev.preventDefault();
            applyTheme(null, true);
        }
    });

    window.addEventListener('click', function (ev) {
        applyTheme(ev.target.getAttribute('data-theme'), true);
    });

    window.addEventListener('storage', function (ev) {
        if (ev.key === 'theme') applyTheme(ev.newValue);
    });

    if (window.matchMedia) {
        var darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (!theme && darkThemeQuery.matches) theme = 'dark';

        darkThemeQuery.addEventListener('change', function (query) {
            if (!localStorage.getItem('theme')) {
                applyTheme(query.matches ? 'dark' : 'light');
            }
        });
    }

    applyTheme(theme);
})();
