'use client'
import { Select } from '@chakra-ui/react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

const LanguageMenu = () => {
	const locale = useLocale()
	const router = useRouter()
	// const pahtname = usePathname()
	// const params = useParams()
	// const search = useSearchParams()

	const changeLocale = e => {
		router.replace(`/${e.target.value}`)
	}

	return (
		<Select defaultValue={locale} onChange={changeLocale}>
			<option value='uz'>uz</option>
			<option value='ru'>ru</option>
		</Select>
	)
}

export default memo(LanguageMenu)
