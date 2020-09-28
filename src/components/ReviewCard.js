import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';

function ReviewCard() {
	const { value, setValue, clickId, setClickId } = useContext(UserContext);
	return (
		<div>
			<h1>Reiview Page</h1>
		</div>
	);
}

export default ReviewCard;
