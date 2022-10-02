const url = `http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json`;

const container = document.querySelector('.container');

fetch(url)
  .then((response) => response.json())
  .then((res) => {
    const champions = Object.entries(res.data);
    for (let i = 0; i < champions.length; i++) {
      const img = document.createElement('img');
      img.classList.add('cardImg');
      img.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[i][0]}_0.jpg`;

      img.id = i;
      img.addEventListener('click', (e) => {
        let champName = document.querySelector('#champ-name').innerText;
        champName = champions[e.target.id][0];
        console.log(champName);
        let champTitle = document.querySelector('#champ-title').innerText;
        champTitle = champions[i][1].title;
        let champDesc = document.querySelector('#champ-desc').innerText;
        champDesc = champions[i][1].blurb;
        let champSplash = document.querySelector('#champ-splash');
        champSplash.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[i][0]}_0.jpg`;
        document.querySelector('#modal').style.display = 'block';
      });
      document
        .querySelector('#modal')
        .addEventListener(
          'click',
          () => (document.querySelector('#modal').style.display = 'none'),
        );

      const card = document.createElement('article');
      card.classList.add('card');
      card.appendChild(img);
      container.appendChild(card);
    }
  })
  .catch((err) => console.error(err));
