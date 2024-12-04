"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as string;
    const path = pathname.split("/").slice(2).join("/");
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex gap-4 items-center text-lg">
        <Link href={`/${locale}`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/contant`}>{t("contact")}</Link>
      </div>
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-dotted"
      >
        <option value="en">EN</option>
        <option value="cz">CZ</option>
      </select>
    </div>
  );
};

export default Navbar;
