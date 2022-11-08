import { Field } from 'react-final-form'
import Wizard from './Wizard'
import { createPersistDecorator } from "final-form-persist";
import questions from './api/questions'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
	await sleep(300)
	window.alert(JSON.stringify(values, 0, 2))
}

// const Error = ({ name }) => (
// 	<Field
// 		name={name}
// 		subscription={{ touched: true, error: true }}
// 		render={({ meta: { touched, error } }) =>
// 			touched && error ? <span>{error}</span> : null
// 		}
// 	/>
// )

const required = value => (value ? undefined : 'Required')





const RiskProfileFormV3 = () => (

	<Wizard
		initialValues={{}}
		onSubmit={onSubmit}


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
					<label>{data.question}</label>
					<div >
						{data.answers.map((answer) => (
							<label>
								<Field
									name={data.id}
									component="input"
									type="radio"
									value="moe"
								/>{' '}
								{answer.content}
							</label>
						))}


						{/* <label>
							<Field name="stooge" component="input" type="radio" value="moe" />{' '}
							Moe
						</label>
						<label>
							<Field
								name="stooge"
								component="input"
								type="radio"
								value="curly"
							/>{' '}
							Curly
						</label> */}
					</div>
				</div>
				<div>

				</div>
			</Wizard.Page>
		))}
	</Wizard>

)

export default RiskProfileFormV3