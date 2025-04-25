const keuzes = ['steen', 'papier', 'schaar'];
const emojiMap = {
  steen: '🪨',
  papier: '📄',
  schaar: '✂️'
};

let spelerScore = 0;
let computerScore = 0;

document.querySelectorAll('.buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const spelerKeuze = button.dataset.choice;
    const computerKeuze = keuzes[Math.floor(Math.random() * keuzes.length)];

    // Toon keuzes
    document.getElementById('player-choice').textContent = emojiMap[spelerKeuze];
    document.getElementById('computer-choice').textContent = emojiMap[computerKeuze];

    // Bepaal winnaar
    let resultaat = '';
    if (spelerKeuze === computerKeuze) {
      resultaat = " Gelijkspel!";
    } else if (
      (spelerKeuze === 'steen' && computerKeuze === 'schaar') ||
      (spelerKeuze === 'papier' && computerKeuze === 'steen') ||
      (spelerKeuze === 'schaar' && computerKeuze === 'papier')
    ) {
      resultaat = " Jij wint deze ronde!";
      spelerScore++;
    } else {
      resultaat = " Computer wint deze ronde!";
      computerScore++;
    }

    // Update score
    document.getElementById('player-score').textContent = spelerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Toon resultaat
    document.getElementById('result-message').textContent = resultaat;

    // Animatie effect
    document.getElementById('player-choice').style.transform = 'scale(1.3)';
    document.getElementById('computer-choice').style.transform = 'scale(1.3)';
    setTimeout(() => {
      document.getElementById('player-choice').style.transform = 'scale(1)';
      document.getElementById('computer-choice').style.transform = 'scale(1)';
    }, 200);

    // ➕ Hier komt de "tot 5 punten" check:
    if (spelerScore === 5 || computerScore === 5) {
      const winnaar = spelerScore === 5 ? "🎉 Jij wint het spel!" : "💻 De computer wint het spel!";
      alert(winnaar);

      // Reset spel
      spelerScore = 0;
      computerScore = 0;
      document.getElementById('player-score').textContent = spelerScore;
      document.getElementById('computer-score').textContent = computerScore;
      document.getElementById('result-message').textContent = '';
      document.getElementById('player-choice').textContent = '';
      document.getElementById('computer-choice').textContent = '';
    }
  });
});
