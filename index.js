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

// Исправляем ошибки в обработчиках (были неправильные номера серий)
document.getElementById("item1").addEventListener("click", function() {
    updatePlayer(0);
});

document.getElementById("item2").addEventListener("click", function() {
    updatePlayer(1);
});

document.getElementById("item3").addEventListener("click", function() {
    updatePlayer(2);
});

document.getElementById("item4").addEventListener("click", function() {
    updatePlayer(3);
});

document.getElementById("item5").addEventListener("click", function() {
    updatePlayer(4);
});

document.getElementById("item6").addEventListener("click", function() {
    updatePlayer(5);
});

document.getElementById("item7").addEventListener("click", function() {
    updatePlayer(6);
});

document.getElementById("item8").addEventListener("click", function() {
    updatePlayer(7);
});

document.getElementById("item9").addEventListener("click", function() {
    updatePlayer(8);
});

document.getElementById("item10").addEventListener("click", function() {
    updatePlayer(9);
});

function updatePlayer(selection) {
    let void_id = episodesURL[selection];
    let player = document.getElementById("player");
    
    // Очищаем предыдущий контент
    player.innerHTML = '';
    
    // Создаем iframe
    let iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = `https://rutube.ru/play/embed/${void_id}`;
    iframe.style.border = "none";
    iframe.allow = "clipboard-write; autoplay";
    iframe.allowFullscreen = true;
    
    player.appendChild(iframe);
}
