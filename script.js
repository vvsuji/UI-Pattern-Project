const url = `https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json`;
const container = document.querySelector('.container');

fetch(url)
	.then((response) => response.json())
	.then((res) => {
		const champions = Object.entries(res.data);
		for (let i = 0; i < champions.length; i++) {
			const img = document.createElement('img');
			img.classList.add('cardImg');
			img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[i][0]}_0.jpg`;

			img.id = i;
			img.addEventListener('click', (e) => {
				const champName = document.querySelector('#champ-name');
				champName.innerText = champions[e.target.id][0];
				const champTitle = document.querySelector('#champ-title');
				champTitle.innerText = champions[i][1].title;
				const champType = document.querySelector('#champ-type');
				champType.innerText = champions[i][1].tags.join(`, `);
				const champDesc = document.querySelector('#champ-desc');
				champDesc.innerText = champions[i][1].blurb;
				const champSplash = document.querySelector('#champ-splash');
				champSplash.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[i][0]}_0.jpg`;
				const modal = document.querySelector('.modal-container');
				modal.style.visibility = 'visible';
			});
			const card = document.createElement('article');
			card.classList.add('card');
			card.appendChild(img);
			container.appendChild(card);
		}
		document.querySelector('.modal-container').addEventListener('click', () => {
			document.querySelector('.modal-container').style.visibility = 'hidden';
		});
	})
	.catch((err) => console.error(err));
