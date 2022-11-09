import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalContext from '../../context/ModalContext';
import RiskCard from './RiskCard';


function RiskCardMain({ text }) {


	const { riskFormFinished, setRiskFormFinished, handleShow } = useContext(ModalContext)

	if (localStorage.getItem("ExampleRiskForm") === null && localStorage.getItem("Finished") === null) {
		return <RiskCard
			header_info={'Test on Abomination'}
			card_text={'To take advantage of all the services, please answer a few questions to assess the risk of your profile. \n It won\'t take long'}
			button_text={<Button variant="primary" onClick={handleShow}>Start test</Button>
			}
		/>;
	}

	if (localStorage.getItem("ExampleRiskForm") !== null) {
		return <RiskCard
			header_info={'Continue test'}
			card_text={'Just continue test all your choose are saved'}
			button_text={<Button variant="primary" onClick={handleShow}>Continue</Button>
			}
		/>;
	}

	if (localStorage.getItem("Finished") !== null) {
		return <RiskCard
			header_info={'Finished!'}
			card_text={'Congratulations! you are finished the test!'}
			button_text={''}
		/>;
	}

	return null;
}

export default RiskCardMain