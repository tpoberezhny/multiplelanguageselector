import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "cz"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(cz|en)/:path*"],
}