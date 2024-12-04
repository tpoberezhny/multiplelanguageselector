import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage")
  return (
    <div className="flex w-full items-center justify-center">
      <div className="text-3xl font-bold mt-20">{t("title")}</div>
    </div>
  );
}