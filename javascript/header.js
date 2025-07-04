const header = document.createElement('header');
const body = document.querySelector('body');

header.innerHTML =
	` 
	<div class="header_and_nav">
		<div class="header-bloc">
			<div class="header-bloc__burger">
				<span id="toggler_burger" onclick="toggler()" class="material-symbols-outlined">menu</span>
			</div>
			<img class="header-bloc__main-logo" src="https://picsum.photos/2048/1080?random=11" alt="logo principal">
		</div>
		<nav class="menu">
			<ul class="menu__list">
				<li><a href="/html/index.html">Home</a></li>
				<li class="menu__list__collections"><a href="/html/collections.html">Les collections</a>
					<span id=toggle-arrow-down class="material-symbols-outlined">arrow_drop_down</span>
					</li>
				<ul class="collections-ul">
						<li> <a href="/html/vanilla.html"> Collection Vanilla </a> </li>
						<li> <a href="/html/eunoia.html"> Collection Eunoia </a> </li>
						<li> <a href="/html/kinisi.html"> Collection Kiniski </a> </li>
					</ul>
				
				
				<li class="menu__list__oui"><a href="/html/oui.html">Elles ont dit OUI!</a></li>
				<li><a href="/html/invites.html">Les invités</a></li>
				<li><a href="/html/about.html">A propos</a></li>
				<li><a href="/html/contact.html">Contact</a></li>
			</ul>
		</nav>
	</div>
`;

document.body.insertAdjacentElement('afterbegin', header);


document.querySelector('.menu__list__collections').addEventListener('mouseover', function () {
	const Collections = document.querySelector('.collections-ul');
	if (Collections.style.display === 'none' || Collections.style.display === '') {
		Collections.style.display = 'flex'; Collections.style.flexDirection = 'column';
	} else {
		Collections.style.display = 'none';
	}
}
)
