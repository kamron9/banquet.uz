'use client'
import '../i18'

import ImageModalProvider from '@/context/ImageModalProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
})

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ImageModalProvider>{children}</ImageModalProvider>
		</QueryClientProvider>
	)
}
export default Providers
