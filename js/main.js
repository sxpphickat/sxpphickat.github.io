
function randomInt(max) {
	return Math.floor((Math.random() * max));
}

function kaomoji() {
	arr = [
	"＼（〇_ｏ）／",
	"(◎﹏◎)",
	"o(*////▽////*)q",
	"⸜(｡˃ ᵕ ˂ )⸝♡",
	"(*^_^*)",
  	"(^.^)",
  	"(ฅ^・ω・^ ฅ)",
  	"（＾◡＾）",
  	"(｡♥‿♥｡)",
  	"(⺣◡⺣)♡*",
  	"٩(◕‿◕｡)۶",
  	"（*＾3＾)/~☆",
  	"(*≧ω≦)",
  	"(✿ ♥‿♥)"
];
	let num = randomInt(arr.length);
	return (arr[num]);
}

function modify_h1() {
	let element = document.getElementById("666");
	element.innerHTML = "nothing here yet	" + kaomoji();
}

modify_h1();