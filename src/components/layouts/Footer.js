import React from 'react';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer className="main-footer ">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<h4>fototer </h4>
							<ul className="list-unstyled">
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<h4>fototer </h4>
							<ul className="list-unstyled">
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<h4>fototer </h4>
							<ul className="list-unstyled">
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<h4>fototer</h4>
							<ul className="list-unstyled">
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
								<li>
									<a href="/">Example Footer</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} Kherad Persian School-All right Reserved
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.footer`
	.footer-middle {
		background: var(--mainDark);
		padding-top: 3rem;
		color: var(--mainWhite);
	}

	.footer-bottom {
		padding-top: 3rem;
		padding-bottom: 2rem;
	}

	ul li a {
		color: var(--mainGrey);
	}
	ul li a:hover {
		color: var(--mainLightGrey);
	}
`;
