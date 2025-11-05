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

let selection = 0;

document.getElementById("item1").addEventListener("click", function() {
  selection = 0;
  updatePlayer();
});

document.getElementById("item2").addEventListener("click", function() {
  selection = 1;
  updatePlayer();
});

document.getElementById("item3").addEventListener("click", function() {
  selection = 2;
  updatePlayer();
});

document.getElementById("item4").addEventListener("click", function() {
  selection = 3;
  updatePlayer();
});

document.getElementById("item5").addEventListener("click", function() {
  selection = 4;
  updatePlayer();
});

function updatePlayer() {
  let void_id = episodesURL[selection];
  document.getElementById("player").innerHTML = `
    <iframe
      width="900"
      height="600"
      src="https://rutube.ru/play/embed/${void_id}"
      style="border: none;"
      allow="clipboard-write; autoplay"
      allowfullscreen
    ></iframe>
  `;
}
