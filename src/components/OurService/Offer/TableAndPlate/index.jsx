'use client'

import RentService from '@/service/server/RentService'
import { useEffect, useState } from 'react'

const Table = () => {
	const [tableData, setTableData] = useState([])
	const getTableData = async () => {
		const data = await RentService.Table()
		setTableData(data)
	}
	useEffect(() => {
		getTableData()
	}, [])
	console.log(tableData)


	
	return <div>Table</div>
}

export default Table
