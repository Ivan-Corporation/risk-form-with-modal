import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import RiskProfileFormV3, { RiskProfileFormV3Logic } from './components/RiskProfileFormV3/RiskProfileFormV3';
import RiskCardMain from './components/RiskCard/RiskCardMain';
import ModalContext from './context/ModalContext';


function App() {

	const { show, handleClose } = useContext(ModalContext)



	return (
		<div className="App">
			<Modal show={show} onHide={handleClose} style={{ background: 'rgba(128, 128, 128, 0.1)', fontWeight: '800' }}>

				<Modal.Body>
					<RiskProfileFormV3Logic />
				</Modal.Body>

			</Modal>


			<RiskCardMain />


		</div>
	);
}

export default App;
