import { Card, CardContent, CardDescription, CardHeader } from './ui/card'

const ProductSkeleton = () => {
	const array = new Array(8).fill(0)
	return array.map((_, i) => (
		<Card key={i}>
			<CardHeader>
				<span className='inline-block w-full max-h-[200px] h-full bg-gray-300 animate-pulse aspect-video rounded-md' />
			</CardHeader>
			<CardContent>
				<CardDescription>
					<span className='inline-block w-3/4 h-4 bg-gray-300 animate-pulse rounded-md' />
				</CardDescription>
				<span className='inline-block w-1/4 h-4 bg-gray-300 animate-pulse rounded-md' />
			</CardContent>
		</Card>
	))
}
export default ProductSkeleton
