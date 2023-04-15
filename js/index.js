let currentPage = 1;

const nextBtn = document.getElementById('forward');
const prevBtn = document.getElementById('back');

document.addEventListener('DOMContentLoaded', () => {
  getAndRenderMonsters();
});

function getAndRenderMonsters() {
  fetch(`http://localhost:3000/monsters/?_limit=20&_page=${currentPage}`)
    .then(res => res.json())
    .then(data => {
      renderMonsters(data);
    });
}

nextBtn.addEventListener('click', () => {
  currentPage++;
  getAndRenderMonsters();
});

prevBtn.addEventListener('click', () => {
  currentPage--;
  getAndRenderMonsters();
});

function renderMonsters(monsters) {
  const container = document.getElementById('monster-container');
  container.innerHTML = '';
  monsters.forEach(monster => {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = monster.name;
    div.append(h2);
    const h4 = document.createElement('h4');
    h4.textContent = `Age: ${monster.age}`;
    div.append(h4);
    const p = document.createElement('p');
    p.textContent = monster.description;
    div.append(p);
    container.append(div);
  });
}

// renderMonsters(test);
