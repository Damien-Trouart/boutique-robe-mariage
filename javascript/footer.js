const footer = document.createElement('footer');

footer.innerHTML =
	` 
<div class = "footer-phone">
	<div class="footer-block">
		<div class="footer-block__contact">
			<a href=""><span>Nom buisness</span> <br>10 rue avenue residence, 10000 Ville</a> <br>
			<a href="mailto:mailbuisness@gmail.com"><span>Email</span>: mailrobemarie@gmail.com</a> <br>
			<a href="tel:06 06 06 06 06"><span>Téléphone</span>: 06 06 06 06 06</a>
		</div>
		<div class="footer-block__newsletter">
			<form action="" method="post">
				<label for="newsletter">Recevez toutes les actualités:</label>
				<input type="email" id="newsletter" class="newsletter" placeholder="coco-chanel@gmail.com" required>
				<input class="btn btn--dark" type="submit" value="S'inscrire">
			</form>
		</div>
		<div class="footer-block__socials">
			<a href=""><img src="./../logo/logo-instagram.png" class="logo"
					alt="logo Instagram"></a>
			<a href=""><img src="./../logo/logo-facebook.png" class="logo"
					alt="logo Facebook"></a>
			<a href=""><img src="./../logo/logo-pinterest.png"
					class="logo" alt="logo Pinterest"></a>
		</div>
	</div>
</div>

<div class = "footer-desktop">
	<div class ="footer-block">
	
		<div class="footer-block__contact">
			<a href="" target=_"blank"><span>nom buisness</span> <br>10 rue avenue residence, 10000 Ville</a> <br>
			<a href="mailto:mailbuisness@gmail.com"><span>Email</span>: mailrobemarie@gmail.com</a> <br>
			<a href="tel:06 06 06 06 06"><span>Téléphone</span>: 06 06 06 06 06</a>
		</div>
		<div class = "footer-block__bottom">
			<div class="footer-block__bottom__newsletter">
				<form action="" method="post">
					<label for="newsletter">Recevez toutes les actualités:</label> <br>
					<input type="email" id="newsletter" class="newsletter" placeholder="coco-chanel@gmail.com" required>
					<input class="btn btn--dark" type="submit" value="S'inscrire">
				</form>
			</div>
		
			<div class="footer-block__bottom__socials">
				<a href="" target=_"blank"><img src="./../logo/logo-instagram.png" class="logo"
						alt="logo Instagram"></a>
				<a href="" target=_"blank"><img src="./../logo/logo-facebook.png" class="logo"
						alt="logo Facebook"></a>
				<a href="" target=_"blank"><img src="./../logo/logo-pinterest.png"
						class="logo" alt="logo Pinterest"></a>
			</div>
		</div>
	</div>
</div>`;

document.body.appendChild(footer);
