import { useTranslation } from "react-i18next"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(nextLang);
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/20 rounded-full px-3 py-1 cursor-pointer"
      aria-label="Switch language"
    >
      {i18n.language === "en" ? "RU" : "EN"}
    </button>
  )
}