'use client'
import { createContext, useContext, useState } from 'react'

const CalculateTotalContext = createContext()
export const useCalculateTotalContext = () => useContext(CalculateTotalContext)

const CalculateTotalProvider = ({ children }) => {
	const [selectedProduct, setSelectedProduct] = useState({})
	const [selectedTable, setSelectedTable] = useState({})
	return (
		<CalculateTotalContext.Provider
			value={{
				selectedProduct,
				setSelectedProduct,
				selectedTable,
				setSelectedTable,
			}}
		>
			{children}
		</CalculateTotalContext.Provider>
	)
}

export default CalculateTotalProvider
