'use client'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
	const { t, i18n } = useTranslation()
	const changeLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.documentElement.lang = i18n.language
			localStorage.setItem('lang', i18n.language)
		}
	}, [i18n.language])
	return { t, changeLanguage, i18n }
}
