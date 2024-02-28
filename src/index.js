import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './images/bbc-logo.png';
import menuIcon from './images/menu-icon.png';
import searchIcon from './images/search-icon.png';
import news1 from './images/news1.webp';
import news2 from './images/news2.webp';
import news3 from './images/news3.webp';
import news4 from './images/news4.webp';
import news5 from './images/news5.webp';
import news6 from './images/news6.webp';
import news7 from './images/news7.webp';
import news8 from './images/news8.webp';
import news9 from './images/news9.webp';
import news10 from './images/news10.webp';
import news11 from './images/news11.webp';
import news12 from './images/news12.webp';




function App() {
	return (
		<section>
			{/* <!-- Header --> */}
			<header class="clonebbc-header">
				<img class="bbc-menu" src={menuIcon} alt="menu" />
				<img class="bbc-search" src={searchIcon} alt="search" />
				<div class="bbc-logo-wrapper">
					<img class="bbc-logo" src={logo} alt="bbc-logo" />
				</div>
				<div class="register-button">Register</div>
				<div class="login-button">Sign In</div>
			</header>
			<nav class="navigation-bar-header">
				<ul>
					<li class="selected">Home</li>
					<li>News</li>
					<li>Sport</li>
					<li>Business</li>
					<li>Innovation</li>
					<li>Culture</li>
					<li>Travel</li>
					<li>Earth</li>
					<li>Video</li>
					<li>Live</li>
				</ul>
			</nav>
			{/* <!-- Section 1 --> */}
			<div class="main-news-section">
				<div class="news-img-box">
					<img src={news1} alt="news1" />
				</div>
				<div class="news-content">
					<div class="news-title">Nato allies reject Macron idea of troops to Ukraine</div>
					<div class="news-desc">The US and the UK are among those to say they will not deploy troops after remarks by
						Emmanuel Macron.</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
			</div>
			<section class="small-news-section">
				<div class="small-news-content">
					<div class="news-title">Democrats brace for Gaza backlash in Michigan vote</div>
					<div class="news-metadata">
						<span class="timespan">8 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alabama's legislature pushes to protect IVF</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alleged Red Army Faction member held after 30 years</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Elon Musk eats humble pie over unpaid bakery bill</div>
					<div class="news-metadata">
						<span class="timespan">9 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Technology</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Dense fog transforms New York into a city on clouds</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
			</section>
			{/* <!-- Section 2 --> */}
			<section class="sub-news-section">
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news2} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">When reproductive cells become a child, according to global experts</div>
						<div class="news-desc">Alabama Supreme Court ruled under state law that all embryos are "children".
							However, the global medical and scientific
							consensus on when reproductive cells become human life says otherwise.</div>
						<div class="news-metadata">
							<span class="timespan">24 hrs ago</span>
							<span class="news-place"> Future</span>
						</div>
					</div>
				</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news3} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">Kate Winslet 'spectacular' in new show The Regime</div>
						<div class="news-desc">Kate Winslet gives another standout performance as an outrageous leader in
							HBO's new series, an absurdist political
							comedy that is very close to home.</div>
						<div class="news-metadata">
							<span class="timespan">3 hrs ago</span>
							<span class="news-place"> Culture</span>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Section 3 --> */}
			<section class="small-news-section">
				<div class="small-news-setion-title">Latest US and Canada headlines</div>
				<div class="small-news-content">
					<div class="news-title">Hope for Gaza ceasefire by next week, says Biden</div>
					<div class="news-metadata">
						<span class="timespan">3 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Middle East</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">hope for ceasefire by Monday, says Biden</div>
					<div class="news-metadata">
						<span class="timespan">11 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Us couple on hijacked boat feared killed</div>
					<div class="news-metadata">
						<span class="timespan">20 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Trump appeals fraud case as $112,000-a-day interest accures</div>
					<div class="news-metadata">
						<span class="timespan">21 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Medical students find out School will be tution free</div>
					<div class="news-metadata">
						<span class="timespan">21 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>

			</section>
			{/* <!-- Section 4 --> */}
			<div class="main-news-section">
				<div class="main-news-section-title">Business</div>
				<div class="news-img-box">
					<img src={news4} alt="news1" />
				</div>
				<div class="news-content">
					<div class="news-title">More music leaving TikTok over Universal row</div>
					<div class="news-desc">At first artists signed to the label were removed, but now writers are being taken
						off the platform.</div>
					<div class="news-metadata">
						<span class="news-see-more">See more</span>
					</div>
				</div>
			</div>
			<section class="small-news-section">
				<div class="small-news-content">
					<div class="news-title">Democrats brace for Gaza backlash in Michigan vote</div>
					<div class="news-metadata">
						<span class="timespan">8 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alabama's legislature pushes to protect IVF</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alleged Red Army Faction member held after 30 years</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Elon Musk eats humble pie over unpaid bakery bill</div>
					<div class="news-metadata">
						<span class="timespan">9 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Technology</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Dense fog transforms New York into a city on clouds</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
			</section>
			{/* <!-- Section 5 --> */}
			<div class="main-news-section reverse-section">
				<div class="main-news-section-title">Culture</div>
				<div class="news-content">
					<div class="news-title">Saltburn's 'tacky rich-kid' 00s look is taking over</div>
					<div class="news-desc">The award-winning costume designer of Saltburn, Sophie Canale, talks about the film's
						blend of aristocratic and Y2K
						styles that has inspired designers.</div>
					<div class="news-metadata">
						<span class="news-see-more">See more</span>
					</div>
				</div>
				<div class="news-img-box">
					<img src={news5} alt="news1" />
				</div>
			</div>
			<section class="small-news-section">
				<div class="small-news-content">
					<div class="news-title">Democrats brace for Gaza backlash in Michigan vote</div>
					<div class="news-metadata">
						<span class="timespan">8 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alabama's legislature pushes to protect IVF</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alleged Red Army Faction member held after 30 years</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Elon Musk eats humble pie over unpaid bakery bill</div>
					<div class="news-metadata">
						<span class="timespan">9 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Technology</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Dense fog transforms New York into a city on clouds</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
			</section>
			{/* <!-- Section 6 --> */}
			<section class="sub-news-section three-in-row">
				<div class="sub-news-section-title">Editor's Picks</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news6} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">The world's most unique 'Book Village'</div>
						<div class="news-desc">Set in a stunning location near the Pyrenees mountains, the tiny village of
							Montolieu is home to roughly 800 people and
							has no ATMs, but it boasts 15 bookshops.</div>
						<div class="news-metadata">
							<span class="timespan">1 day ago</span>
							<span class="news-place"> Travel</span>
						</div>
					</div>
				</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news7} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">Gills Aloud? Tiny fish found making very big noise</div>
						<div class="news-desc">A miniscule, transparent fish makes drumming sounds as loud as a jackhammer, say
							researchers.</div>
						<div class="news-metadata">
							<span class="timespan">1 Day ago</span><b>NEWS </b>
							<span class="news-place"> Science & Environment</span>
						</div>
					</div>
				</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news8} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">China will send pandas to zoos in San Diego and Spain - what it means</div>
						<div class="news-desc">China will send pandas to zoos in San Diego and Spain - what it means</div>
						<div class="news-metadata">
							<span class="timespan">2 days ago</span>
							<span class="news-place"> Future</span>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- Section 7 --> */}
			<div class="main-news-section">
				<div class="main-news-section-title">Earth</div>
				<div class="news-img-box">
					<img src={news9} alt="news1" />
				</div>
				<div class="news-content">
					<div class="news-title">Rhino poaching on the rise in South Africa</div>
					<div class="news-desc">Nearly 500 were killed in 2023 with hunters moving away from previous poaching
						hotspots.</div>
					<div class="news-metadata">
						<span class="news-see-more">See more</span>
					</div>
				</div>
			</div>
			<section class="small-news-section">
				<div class="small-news-content">
					<div class="news-title">Democrats brace for Gaza backlash in Michigan vote</div>
					<div class="news-metadata">
						<span class="timespan">8 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alabama's legislature pushes to protect IVF</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alleged Red Army Faction member held after 30 years</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Elon Musk eats humble pie over unpaid bakery bill</div>
					<div class="news-metadata">
						<span class="timespan">9 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Technology</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Dense fog transforms New York into a city on clouds</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
			</section>
			{/* <!-- Section 8 --> */}
			<div class="main-news-section reverse-section">
				<div class="main-news-section-title">Innovation</div>
				<div class="news-content">
					<div class="news-title">Chief minister calls for proper debate over issues</div>
					<div class="news-desc">Alfred Cannan has faced criticism online from some MHKs who are questioning some
						recent decisions.</div>
					<div class="news-metadata">
						<span class="news-see-more">See more</span>
					</div>
				</div>
				<div class="news-img-box">
					<img src={news10} alt="news1" />
				</div>
			</div>
			<section class="small-news-section">
				<div class="small-news-content">
					<div class="news-title">Democrats brace for Gaza backlash in Michigan vote</div>
					<div class="news-metadata">
						<span class="timespan">8 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alabama's legislature pushes to protect IVF</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Alleged Red Army Faction member held after 30 years</div>
					<div class="news-metadata">
						<span class="timespan">4 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Europe</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Elon Musk eats humble pie over unpaid bakery bill</div>
					<div class="news-metadata">
						<span class="timespan">9 hrs ago</span><b>NEWS</b>
						<span class="news-place"> Technology</span>
					</div>
				</div>
				<div class="small-news-content">
					<div class="news-title">Dense fog transforms New York into a city on clouds</div>
					<div class="news-metadata">
						<span class="timespan">2 hrs ago</span>
						<b>NEWS</b>
						<span class="news-place"> US & Canada</span>
					</div>
				</div>
			</section>
			{/* <!-- Section 9 --> */}
			<section class="sub-news-section">
				<div class="sub-news-section-title">Science and health</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news11} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">How to become a 'supercommunicator'</div>
						<div class="news-desc">Set in a stunning location near the Pyrenees mountains, the tiny village of
							Montolieu is home to roughly 800 people and
							has no ATMs, but it boasts 15 bookshops.</div>
						<div class="news-metadata">
							<span class="timespan">1 day ago</span>
							<span class="news-place"> Future</span>
						</div>
					</div>
				</div>
				<div class="sub-news-content-wrap">
					<div class="sub-news-img-box">
						<img src={news12} alt="" />
					</div>
					<div class="sub-news-content">
						<div class="news-title">Bones help to reveal Carricks's medieval history</div>
						<div class="news-desc">A miniscule, transparent fish makes drumming sounds as loud as a jackhammer, say
							researchers.</div>
						<div class="news-metadata">
							<span class="timespan">1 Day ago</span><b>NEWS </b>
							<span class="news-place"> Northern Ireland</span>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Footer --> */}
			<section class="clonebbc-footer">
				<div class="footer-bbc-logo">
					<img src={logo} alt="" />
				</div>
				<nav class="navigation-bar-footer">
					<ul>
						<li>Home</li>
						<li>News</li>
						<li>Sport</li>
						<li>Business</li>
						<li>Innovation</li>
						<li>Culture</li>
						<li>Travel</li>
						<li>Earth</li>
						<li>Video</li>
						<li>Live</li>
						<li>BBC Shop</li>
					</ul>
				</nav>
				<nav class="footer-privacy-section">
					<ul>
						<li>Terms of Use</li>
						<li>About the BBC</li>
						<li>Privacy Policy</li>
						<li>Cookies</li>
						<li>Accessibility Help</li>
						<li>Contact the BBC</li>
						<li>Advertise with us</li>
						<li>AdChoices/ Do Not Sell My Info</li>
					</ul>
				</nav>
				<div class="footer-copyright-text">
					This is BBC-Clone practice project by scrimba course and
					developed by sneha parkar.
				</div>

			</section>
		</section >
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);