import PropTypes from 'prop-types'
import React from 'react'
import { Form } from 'react-final-form'
import { createPersistDecorator } from "final-form-persist";
import { Button } from 'react-bootstrap';


export default class Wizard extends React.Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	}
	static Page = ({ children }) => children

	constructor(props) {
		super(props)
		this.state = {
			page: 0,
			values: props.initialValues || {}
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
		if (isLastPage) {
			return onSubmit(values)
		} else {
			this.next(values)
		}
	}



	render() {
		const { children } = this.props
		const { page, values } = this.state
		const activePage = React.Children.toArray(children)[page]
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
					<form onSubmit={handleSubmit}>
						{activePage}
						<div className="buttons mt-2 mb-1" style={{ display: 'flex', justifyContent: 'space-between' }}>
							{page > 0 && (
								<Button type="button" variant="danger" onClick={this.previous}>
									« Назад
								</Button>
							)}
							{!isLastPage && <Button variant="primary" type="submit">Вперёд »</Button>}
							{isLastPage && (
								<Button variant="success" type="submit" disabled={submitting}>
									Подтвердить
								</Button>
							)}
						</div>
						<hr />
						<pre style={{ background: 'white' }}>{JSON.stringify(values, 0, 2)}</pre>
					</form>
				)}
			</Form>
		)
	}
}
