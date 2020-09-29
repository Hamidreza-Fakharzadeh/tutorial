import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import styled from 'styled-components';

function Details() {
	const { value, clickId } = useContext(UserContext);
	const filterValue = value[0].filter((result) => {
		return result.id === clickId;
	});

	return (
		<React.Fragment>
			<HeaderDeatail>
				{filterValue.map((element) => {
					return (
						<div className="container-fluid align-items-center">
							<h1 className="display-1 font-weight-bold">{element.headerTitle}</h1>
							<h4 className="display-5">{element.headerSubTitle}</h4>
							<p>{element.headerText}</p>
							{/* Social Icons */}
							<div className="container mt-5">
								<div className="row justify-content-center">
									<div className="col-2">
										<i className="fab fa-facebook-f" />
									</div>
									<div className="col-2">
										<i className="fab fa-instagram" />
									</div>
									<div className="col-2">
										<i className="fab fa-twitter" />
									</div>
									<div className="col-2">
										<i className="fab fa-whatsapp" />
									</div>
									<div className="col-2">
										<i className="fab fa-telegram" />
									</div>
									<div className="col-2">
										<i className="fab fa-reddit" />
									</div>
								</div>
							</div>
						</div>
					);
				})}
				{/* Nav link */}
				<div className="container">
					<ul className="nav nav-tabs">
						{/* About Place Link */}
						<li className="nav-item">
							<a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">
								About Place
							</a>
						</li>
						{/* Reviews Link */}
						<li className="nav-item">
							<a href="#reviews" className="nav-link" role="tab" data-toggle="tab">
								Reviews
							</a>
						</li>
						{/* Map Link */}
						<li className="nav-item">
							<a href="#map" className="nav-link" role="tab" data-toggle="tab">
								Map
							</a>
						</li>
					</ul>
					{/* Tab Pane */}
					<div className="tab-content mb-5">
						{/* About Place Tab */}
						{filterValue.map((place) => {
							return (
								<div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
									<h2 className="mb-3">{place.title}</h2>
									<p>{place.description}</p>
									<img src={place.img} alt={place.title} className="img-thumbnail img-fluid" />
								</div>
							);
						})}
					</div>
					{/* Reviews */}
					<div className="tab-pane" id="reviews" role="tabpanel">
						Reviews Content
					</div>
					{/* Map */}
					{filterValue.map((way) => {
						return (
							<div className="tab-pane" id="map" role="tabpanel">
								<iframe
									title="uni"
									src={way.maps}
									style={{
										border: '0',
										height: '28.125rem',
										width: '100%',
										frameborder: '0'
									}}
								/>
							</div>
						);
					})}
				</div>
			</HeaderDeatail>
		</React.Fragment>
	);
}

export default Details;

const HeaderDeatail = styled.header`
	background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
	text-transform: uppercase;
	color: var(--mainWhite);
	text-align: center;

	h1 {
		padding-top: 10%;
		color: var(--mainDark);
	}

	h4 {
		color: var(--mainDark);
	}

	p {
		padding-left: 10%;
		padding-right: 10%;
		margin-bottom: 10%;
		color: var(--mainDark);
	}

	i {
		font-size: 1.875rem;
		color: var(--mainDark);
	}

	i:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}

	.nav-item {
		height: 18.75rem;
	}
	@media (max-width: 760px) {
		h1,
		h4 {
			color: var(--mainWhite);
		}
	}
`;
