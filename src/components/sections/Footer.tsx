import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black py-10 px-6 flex flex-col items-center text-center">
      <p className="mb-2 text-sm text-gray-500">{`© ${new Date().getFullYear()} ${t("footer.rights")}`}</p>
      <p className="mb-2 text-sm text-gray-500">{t("footer.description")}</p>
    </footer>
  )
}