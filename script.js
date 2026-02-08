const gameList = document.getElementById("gameList");

for (let i = 1; i <= 50; i++) {
  const game = document.createElement("a");
  game.className = "game";
  game.href = `games/game${i}.html`;
  game.dataset.name = `game ${i}`;

  game.innerHTML = `
    <img src="https://slopeonline.online/upload/cache/upload/imgs/slope-game-v1-f260x260.png=Game+${1}">
    <h3>Game ${i}</h3>
  `;

  gameList.appendChild(game);
}

function filterGames() {
  const input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".game").forEach(game => {
    game.style.display = game.dataset.name.includes(input)
      ? "block"
      : "none";
  });
}
