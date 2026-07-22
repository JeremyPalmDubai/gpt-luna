import { notFound } from "next/navigation";
import { DetailPage } from "../../components/Site";
import { locales, Locale, PageKey } from "../../site-data";
import { seo } from "../../seo";
import { FranceInvestmentPage, franceInvestmentMetadata } from "../../france-investment-page";
const pages:PageKey[]=["residences","investment","nuanu","buying-guide"];
const franceInvestmentPage="invest-luna-residences-bali-from-france";
export function generateStaticParams(){return locales.filter(x=>x!=="en").flatMap(lang=>[...pages,franceInvestmentPage].map(page=>({lang,page})))}
export async function generateMetadata({params}:{params:Promise<{lang:string,page:string}>}){const {lang,page}=await params;if(page===franceInvestmentPage)return franceInvestmentMetadata(lang as Locale);return seo(lang as Locale,page as PageKey)}
export default async function Page({params}:{params:Promise<{lang:string,page:string}>}){const {lang,page}=await params;if(!locales.includes(lang as Locale)||lang==="en")notFound();if(page===franceInvestmentPage)return <FranceInvestmentPage locale={lang as Locale}/>;if(!pages.includes(page as PageKey))notFound();return <DetailPage locale={lang as Locale} page={page as PageKey}/>}
