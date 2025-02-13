var audio = document.getElementById("audio-player");

// Функція для відтворення музики при натисканні на фото
function playMusic(musicFile) {
    audio.src = musicFile; // Встановлюємо новий файл
    audio.play(); // Відтворюємо
}

// Функція створення сердечок
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // Випадкова позиція по ширині
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Випадкова швидкість анімації
    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove(); // Видаляємо сердечко після анімації
    }, 5000);
}

// Функція створення фраз
function createPhrase() {
    const phrases = [
        " сонечко ☀️",
        "Люблю тебе 💕",
        "Квіточка 😊",
        "Кохаю тебе 😘",
        "Ти найкраща 🌎",
        "малюточка 💖",
        "Моя зірочка ✨",
        "я завжди буду з тобою ❤️"
    ];
    
    const phrase = document.createElement("div");
    phrase.classList.add("phrase");
    phrase.innerText = phrases[Math.floor(Math.random() * phrases.length)]; // Випадкова фраза
    phrase.style.left = Math.random() * 100 + "vw"; // Випадкове положення
    phrase.style.animationDuration = Math.random() * 3 + 3 + "s"; // Випадкова швидкість

    document.querySelector(".phrases-container").appendChild(phrase);

    setTimeout(() => {
        phrase.remove(); // Видаляємо після анімації
    }, 5000);
}

// Запускаємо створення сердечок та фраз постійно
setInterval(createHeart, 500); // Сердечко кожні 0.5 сек
setInterval(createPhrase, 2000); // Фраза кожні 2 сек

const correctPassword = "мяу"; // Твій пароль тут!

function checkPassword() {
    let inputPassword = document.getElementById("password-input").value;

    if (inputPassword === correctPassword) {
        document.getElementById("password-screen").style.display = "none"; // Ховаємо екран пароля
        document.getElementById("main-content").style.display = "block"; // Показуємо сайт
    } else {
        document.getElementById("error-message").style.display = "block"; // Відображаємо помилку
    }
}
