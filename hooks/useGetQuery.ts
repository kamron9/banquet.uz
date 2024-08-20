'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetQuery = <T>(key: string, url: string) => {
	const get = async () => {
		const result = await axios.get(url)
		return result
	}
	return useQuery({ queryKey: [key], queryFn: get })
}
