export const formatPhoneNumber = (phoneNumber: string) => {
	const cleaned = phoneNumber.replace(/\D/g, '')
	const withoutPrefix = cleaned.startsWith('998') ? cleaned.slice(3) : cleaned
	const match = withoutPrefix.match(/^(\d{2})(\d{3})(\d{2})(\d{2})$/)
	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
	}
	return withoutPrefix
}
