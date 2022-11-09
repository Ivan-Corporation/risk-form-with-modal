import { Field } from 'react-final-form'
import Wizard from './Wizard'
import { createPersistDecorator } from "final-form-persist";
import questions from './api/questions'
import { useContext } from 'react';
import ModalContext from '../../context/ModalContext';


// const Error = ({ name }) => (
// 	<Field
// 		name={name}
// 		subscription={{ touched: true, error: true }}
// 		render={({ meta: { touched, error } }) =>
// 			touched && error ? <span>{error}</span> : null
// 		}
// 	/>
// )



export function RiskProfileFormV3Logic() {

	const { riskFormFinished, setRiskFormFinished, handleClose, setShow } = useContext(ModalContext)


	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	const onSubmit = async values => {
		await sleep(300)
		window.alert(JSON.stringify(values, 0, 2))
		localStorage.removeItem('ExampleRiskForm')

		handleClose()

		localStorage.setItem('Finished', true)
	}

	return (
		<RiskProfileFormV3 onSubmit={onSubmit} />
	)
}


const RiskProfileFormV3 = (props) => (



	<Wizard
		initialValues={{}}
		onSubmit={props.onSubmit}
	>


		{questions.map((data, i) => (
			<Wizard.Page
			// validate={values => {
			// 	const errors = {}
			// 	if (!values.notes) {
			// 		errors.notes = 'Required'
			// 	}
			// 	return errors
			// }}
			>
				<div>
					<label><h3>{data.question}</h3></label>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{data.answers.map((answer) => (
							<label>
								<Field
									name={data.id}
									component="input"
									type="radio"
									value={answer.type}
								/>{' '}
								{answer.content}
							</label>
						))}
					</div>
				</div>
				<div>

				</div>
			</Wizard.Page>
		))}
	</Wizard>

)

export default RiskProfileFormV3