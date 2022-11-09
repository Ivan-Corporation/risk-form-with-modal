import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);



	const [riskFormFinished, setRiskFormFinished] = useState(false)







	// const addToCart = (name, price) => {
	// 	setItems((prevState) => [...prevState, { name, price }])
	// }

	return (
		<ModalContext.Provider
			value={{

				riskFormFinished,
				setRiskFormFinished,

				show,
				setShow,
				handleClose,
				handleShow
			}}>{children}</ModalContext.Provider>
	)
}

export default ModalContext