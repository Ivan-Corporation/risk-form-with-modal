import '../../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import ModalContext from '../../context/ModalContext';


function RiskCard({ header_info, card_text, button_text }) {



	function removeState() {
		localStorage.removeItem('ExampleRiskForm')
		localStorage.removeItem('Finished')

		window.location.reload()
	}

	return (
		<Card style={{ background: 'orange', fontWeight: '700' }}>
			<Card.Header><h3>
				{/* {localStorage.getItem("ExampleRiskForm") === null ? 'Test on abomination' : 'Continue test'} */}
				{header_info}
			</h3></Card.Header>
			<Card.Body>
				<Card.Text>
					{card_text}
				</Card.Text>
				<div className="buttons mt-2 mb-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
					{button_text}

					<Button variant="danger" onClick={() => removeState()}>Remove state</Button>
				</div>
			</Card.Body>
		</Card>
	);
}

export default RiskCard;