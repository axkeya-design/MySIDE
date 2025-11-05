let episodesURL = [
    "a439e766114ac82675add9f42b147412", // 1
    "a8ac3c5215c97af1f5b4ffccc1a489f3", // 2
    "22cde79779103436ee9adf11db4f9aae", // 3 
    "f9b76253419645efe68dec7e0dc38855", // 4
    "552cb327991dc83dc3bd34ea157760f8", // 5
    "ed382822f9874c7e1ab7b1d0d2e6f1e1", // 6
    "da7f3fe1bc5b95a1e399d068ce97dfaa", // 7
    "d13e1059bc01acca0fcf638e42810b2f", // 8
    "33f03537dd0de5277925d721af6acfe6", // 9
    "9e5df95c252bf0c264690f45446bfacf", // 10
];

// Функция для обновления плеера и подсветки
function updatePlayer(selection) {
    let void_id = episodesURL[selection];
    let player = document.getElementById("player");
    
    // Очищаем контент
    player.innerHTML = '';
    
    // Создаём iframe
    let iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = `https://rutube.ru/play/embed/${void_id}`;
    iframe.style.border = "none";
    iframe.allow = "clipboard-write; autoplay";
    iframe.allowFullscreen = true;
    
    player.appendChild(iframe);

    // Убираем класс active у всех
    document.querySelectorAll('.episode-list li').forEach(li => {
        li.classList.remove('active');
    });

    // Добавляем active к текущей
    document.getElementById(`item${selection + 1}`).classList.add('active');
}

// Привязываем события
for (let i = 1; i <= 10; i++) {
    document.getElementById(`item${i}`).addEventListener("click", function() {
        updatePlayer(i - 1);
    });
}

// По умолчанию — первая серия
window.onload = () => updatePlayer(0);
