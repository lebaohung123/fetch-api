import React from "react";
import "./Footer.scss";
const Footer: React.FC = () => {
	return (
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h6>About</h6>
						<p className="text-justify">
							Christopher Store wants to bring you the most ideal shopping
							place with extremely modern outfits, jewelry, and new
							technologies that have been tested many times before being
							used for new technology products of Christopher Store. We bring
							to our customers a very new and enjoyable experience.
						</p>
					</div>
					<div className="col-xs-6 col-md-3">
						<h6>Categories</h6>
						<ul className="footer-links">
							<li>
								<a href="http://scanfcode.com/category/c-language/">
									Product
								</a>
							</li>
							<li>
								<a href="http://scanfcode.com/category/front-end-development/">
									Cart
								</a>
							</li>
							<li>
								<a href="http://scanfcode.com/category/back-end-development/">
									Login
								</a>
							</li>
							<li>
								<a href="http://scanfcode.com/category/java-programming-language/">
									Singin
								</a>
							</li>
						</ul>
					</div>
					<div className="col-xs-6 col-md-3">
						<h6>Quick Links</h6>
						<ul className="footer-links">
							<li>
								<a href="http://scanfcode.com/about/">About Us</a>
							</li>
							<li>
								<a href="http://scanfcode.com/contact/">Contact Us</a>
							</li>
							<li>
								<a href="http://scanfcode.com/contribute-at-scanfcode/">
									Contribute
								</a>
							</li>
							<li>
								<a href="http://scanfcode.com/privacy-policy/">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="http://scanfcode.com/sitemap/">Sitemap</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className="copyright-text">
							Copyright © 2023 All Rights Reserved by
							<a href="https://.com"> Bao Hung</a>.
						</p>
					</div>
					<div className="col-md-4 col-sm-6 col-xs-12">
						<ul className="social-icons">
							<li>
								<a className="facebook" href="htpps://facebook.com">
									<i className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a className="twitter" href="htpps://twitter.com">
									<i className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a className="dribbble" href="htpps://dribbble.com">
									<i className="fa fa-dribbble" />
								</a>
							</li>
							<li>
								<a className="linkedin" href="htpps://linkedin.com">
									<i className="fa fa-linkedin" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
