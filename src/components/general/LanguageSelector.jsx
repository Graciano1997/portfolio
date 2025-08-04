import { useTranslation } from "react-i18next"

export const LanguageSelector = ()=>{

    const {i18n,t}=useTranslation();
    
    return(
        <select value={i18n.language} 
        onChange={(el)=>{i18n.changeLanguage(el.target.value)}}
        className="cursor-pointer" id="idiom" style={{background:'transparent'}}>
        <option value="en">{t('english')}</option>
        <option value="pt">{t('portuguese')}</option>
        </select>
        );
};