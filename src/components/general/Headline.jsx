import { useTranslation } from "react-i18next";
import { firstCapitalize } from "../../lib/firstCapitalize";

export const Headline=()=>{
    const {t}= useTranslation();

    return(<div className="text-start text-white flex flex-col 
    absolute left-10 
    top-40
    sm:top-20 
    md:top-40 
    w-[100%] h-50
    text-[15px]
    sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[30px]
    titleAnimation
    ">
        <h1 className="text-[20px]">{firstCapitalize(t('welcome'))}</h1>
        <h2 className="text-xl">{firstCapitalize(t('at'))}</h2>
        <h2 className="text-xl">{firstCapitalize(t('gracianoPortfolio'))}</h2>
    </div>);
};