'use client'

import { Suspense } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Table from './components/Table'
import Tabs from './components/Tabs'

const BaseCatering = () => {
	return (
		<div>
			<Suspense fallback={<LoadingBar />}>
				<Tabs />
				<Table />
			</Suspense>
		</div>
	)
}

export default BaseCatering
