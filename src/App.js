import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import RiskProfileFormV3 from './components/RiskProfileFormV3/RiskProfileFormV3';


function App() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="App">
			<Modal show={show} onHide={handleClose}>

				<Modal.Body>
					<RiskProfileFormV3 />
				</Modal.Body>

			</Modal>


			<Card style={{ background: 'orange' }}>
				<Card.Header>Мы не знаем ваш риск-профиль</Card.Header>
				<Card.Body>

					<Card.Text>
						Чтобы пользоваться всеми возможностями сервиса, пожалуйста, ответьте на несколько вопросов, для оценки вашего риск профиля.
						Это не займёт много времени
					</Card.Text>
					<Button variant="primary" onClick={handleShow}>УЗНАТЬ РИСК-ПРОФИЛЬ</Button>
				</Card.Body>
			</Card>


		</div>
	);
}

export default App;
