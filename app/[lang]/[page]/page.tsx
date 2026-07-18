import { notFound } from "next/navigation";
import { DetailPage } from "../../components/Site";
import { locales, Locale, PageKey } from "../../site-data";
import { seo } from "../../seo";
const pages:PageKey[]=["residences","investment","nuanu","buying-guide"];
export function generateStaticParams(){return locales.filter(x=>x!=="en").flatMap(lang=>pages.map(page=>({lang,page})))}
export async function generateMetadata({params}:{params:Promise<{lang:string,page:string}>}){const {lang,page}=await params;return seo(lang as Locale,page as PageKey)}
export default async function Page({params}:{params:Promise<{lang:string,page:string}>}){const {lang,page}=await params;if(!locales.includes(lang as Locale)||lang==="en"||!pages.includes(page as PageKey))notFound();return <DetailPage locale={lang as Locale} page={page as PageKey}/>}
