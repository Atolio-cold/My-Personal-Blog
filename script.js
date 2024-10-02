// // Pobranie przycisku zmiany motywu
// const themeToggleBtn = document.getElementById('theme-toggle');

// // Sprawdzenie wcześniej ustawionego motywu w localStorage
// const currentTheme = localStorage.getItem('theme');

// // Jeśli motyw jest zapisany, ustaw go
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark') {
//         themeToggleBtn.textContent = 'Light Mode';
//     } else {
//         themeToggleBtn.textContent = 'Dark Mode';
//     }
// } else {
//     // Domyślnie ustaw jasny motyw
//     document.documentElement.setAttribute('data-theme', 'light');
//     themeToggleBtn.textContent = 'Dark Mode';
// }

// // Dodanie nasłuchiwania na kliknięcie przycisku
// themeToggleBtn.addEventListener('click', () => {
//     // Pobranie aktualnego motywu
//     let theme = document.documentElement.getAttribute('data-theme');

//     if (theme === 'dark') {
//         // Zmiana na jasny motyw
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//         themeToggleBtn.textContent = 'Dark Mode';
//     } else {
//         // Zmiana na ciemny motyw
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//         themeToggleBtn.textContent = 'Light Mode';
//     }
// });

// Pobieramy przycisk zmiany motywu
const themeToggleButton = document.getElementById('theme-toggle');

// Słuchamy zdarzenia kliknięcia na przycisk
themeToggleButton.addEventListener('click', function() {
    // Pobieramy ciało strony
    const body = document.body;

    // Przełączamy klasę między trybem jasnym i ciemnym
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

