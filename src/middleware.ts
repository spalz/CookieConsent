import { NextResponse, NextRequest } from "next/server";
import acceptLanguage from "accept-language";

import { fallbackLng, languages, cookieName } from "@i18n/settings";

acceptLanguage.languages(languages);

export const config = {
    matcher: [
        "/((?!api|_next/static|public|_next/image|images|assets|favicon.ico|sw.js|manifest.json).*)",
    ],
};

export function middleware(req: NextRequest) {
    let lng;
    if (req.cookies.has(cookieName)) {
        const cookieValue = req.cookies.get(cookieName)?.value;
        lng = acceptLanguage.get(cookieValue);
    }
    if (!lng) {
        const acceptLanguageHeader = req.headers.get("Accept-Language");
        lng = acceptLanguage.get(acceptLanguageHeader || "");
    }
    if (!lng) lng = fallbackLng;

    // Redirect if lng in path is not supported
    if (
        !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith("/_next") && // Exclude Next.js internal paths
        !req.nextUrl.pathname.startsWith("/robots.txt") &&
        !req.nextUrl.pathname.startsWith("/images") // Exclude image paths
    ) {
        return NextResponse.redirect(
            new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
        );
    }

    const referer = req.headers.get("referer");
    if (referer) {
        const refererUrl = new URL(referer);
        const lngInReferer = languages.find((l) =>
            refererUrl.pathname.startsWith(`/${l}`),
        );
        const response = NextResponse.next();
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
        return response;
    }

    return NextResponse.next();
}
