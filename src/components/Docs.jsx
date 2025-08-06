import { useTranslation } from "react-i18next";
import { firstCapitalize } from "../lib/firstCapitalize";
import { DocItem } from "./general/DocItem";
import { Time } from "./general/Time";
import { Title } from "./general/Title";
import { Mydocs } from "../data/docsData";

export const Docs=()=>{
    const {t}=useTranslation();
    return(<>
    <Time/>
    <div className="h-100 w-100 sm:w-[50%]  fixed left-3 top-30 sm:top-25 md:top-30">
        <Title title={firstCapitalize(t('myDocs'))}/>
        <div className="h-[250px] mt-10 sm:mt-2 md:mt-10 flex  md:gap-3">
            <DocItem name={firstCapitalize(t('resume_en'))} item={Mydocs.resume}/>
            <DocItem name={firstCapitalize(t("resume_pt"))} item={Mydocs.cv}/>
            <DocItem name={firstCapitalize(t("motivation"))} item={Mydocs.motivation}/>
        </div>
    </div>
    </>);
};

