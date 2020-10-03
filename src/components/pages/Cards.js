import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Cards() {
	const { value, clickId, setClickId } = useContext(UserContext);

	console.log(clickId);
	return (
		<div className="container">
			<div className="row">
				{value[0].map((element, id) => {
					return (
						<div className="col-10 col-md-6 col-lg-4 mx-auto mb-5" key={element.id}>
							<div className="card align-self-center">
								<img src={element.img} alt={element.headerTitle} className="card-img-top"/>
								<div className="card-body">
									<h3 className="card-title text-uppercase">{element.headerTitle}</h3>
									<h5 className="card-title">{element.headerSubTitle}</h5>
									<p className="card-text">{element.headerText}</p>
									<Link
										to="/details"
										className="btn btn-outline-primary text-uppercase"
										onClick={() => setClickId(element.id)}
									>
										More Info
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
		
	);
}

export default Cards;
