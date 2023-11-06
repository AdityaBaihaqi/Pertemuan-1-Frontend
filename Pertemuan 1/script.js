const game = [
    "Mobile Legends",
    "PUBG",
    "Genshin Impact",
    "Pou"
]

function top_game() {
    let data = document.getElementById("games");
    data.innerHTML = "Game terpopuler : " + game.join(", ")
}
top_game();

document.getElementById("btn-pop").addEventListener("click", function () {
    game.pop();
    top_game();
})

document.getElementById("btn-push").addEventListener("click", function () {
    game.push("Clash of Clans");
    top_game();
})

document.getElementById("btn-shift").addEventListener("click", function () {
    game.shift();
    top_game();
})

document.getElementById("btn-unshift").addEventListener("click", function () {
    game.unshift("Minecraft");
    top_game();
})