import { NextRequest, NextResponse } from 'next/server'

import { DASHBOARD_PAGES } from './config/pages-url.config'
import { EnumTokens } from './services/auth-token.service'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isDashboardPage = url.includes('/i')
	const isAuthPage = url.includes('/auth')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
	}

	if (isAuthPage) return NextResponse.next()

	// Если имеется админ панель, то перенаправлять нужно на 404
	if (!refreshToken) return NextResponse.redirect(new URL('/auth', request.url))

	return NextResponse.next()
}

export const config = {
	matcher: ['/i/:path*', '/auth/:path']
}
