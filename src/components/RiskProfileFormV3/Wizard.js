import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'react-final-form'
import { createPersistDecorator } from "final-form-persist";
import { Button } from 'react-bootstrap';
import '../../App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default class Wizard extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}
	static Page = ({ children }) => children


	constructor(props) {
		super(props)


		var firstQuestion = {
			WHO: "Human"
		};

		var isRiskForm = JSON.parse(localStorage.getItem('ExampleRiskForm'));
		// var ActiveStoragePage = Object.keys(getActivePage).length
		// console.log(isRiskForm)

		if (isRiskForm == null) {
			localStorage.setItem('ExampleRiskForm', JSON.stringify(firstQuestion))
		}



		var getActivePage = JSON.parse(localStorage.getItem('ExampleRiskForm'));
		var ActiveStoragePage = Object.keys(getActivePage).length


		// console.log(getActivePage.keys(Obj).length)
		// console.log(ActiveStoragePage)

		// var testNumber = 2
		// console.log(testNumber)


		this.state = {
			page: ActiveStoragePage - 1,
			values: props.initialValues || {},
			bounce: false
		}
	}
	next = values =>
		this.setState(state => ({
			page: Math.min(state.page + 1, this.props.children.length - 1),
			values
		}))

	previous = () =>
		this.setState(state => ({
			page: Math.max(state.page - 1, 0)
		}))

	/**
	 * NOTE: Both validate and handleSubmit switching are implemented
	 * here because 🏁 Redux Final Form does not accept changes to those
	 * functions once the form has been defined.
	 */

	validate = values => {
		const activePage = React.Children.toArray(this.props.children)[
			this.state.page
		]
		return activePage.props.validate ? activePage.props.validate(values) : {}
	}



	handleSubmit = values => {


		const { children, onSubmit } = this.props
		const { page } = this.state
		const isLastPage = page === React.Children.count(children) - 1


		// undefined?
		// console.log(this.ActiveStoragePage)
		var gg = JSON.parse(localStorage.getItem('ExampleRiskForm'));
		var nn = Object.keys(gg).length
		if (isLastPage) {
			if (nn > 2) {
				return onSubmit(values)
			} else {
				Swal.fire({
					title: 'Fill the form!',
					text: 'Fill out the entire form so that we can calculate your weight on the backend',
					icon: 'error',
					confirmButtonText: 'Okay :('
				})
			}



		} else {
			this.setState({ bounce: true })
			this.next(values)
		}
	}


	render() {
		const { children } = this.props
		const { page, values } = this.state
		const bounce = this.state.bounce
		const activePage = React.Children.toArray(children)[page]

		// console.log(activePage.key)

		const isLastPage = page === React.Children.count(children) - 1



		const { persistDecorator, clear } = createPersistDecorator({
			name: "ExampleRiskForm",
			debounceTime: 500,
			whitelist: [
				"WHO", "AGE", "PLANET"
			]
		});




		return (
			<Form
				initialValues={values}
				validate={this.validate}
				onSubmit={this.handleSubmit}
				decorators={[persistDecorator]}
			>


				{({ handleSubmit, submitting, values }) => (
					<form onSubmit={handleSubmit} >
						<div onAnimationEnd={() => this.setState({ bounce: false })} className={bounce ? 'bounce' : ''}>{activePage}</div>
						<div className="buttons mt-2 mb-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
							{page > 0 && (
								<Button type="button" variant="danger" onClick={this.previous}>
									« Назад
								</Button>
							)}

							{!isLastPage ? <Button variant="primary" type="submit">Вперёд »</Button> :

								<Button variant="success" type="submit" disabled={submitting}>
									Подтвердить

								</Button>
							}

						</div>
						<hr />
						<pre style={{ background: 'white' }}>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)}
			</Form>
		)
	}
}
