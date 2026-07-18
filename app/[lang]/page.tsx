import { notFound } from "next/navigation";
import { HomePage } from "../components/Site";
import { locales, Locale } from "../site-data";
import { seo } from "../seo";
export function generateStaticParams(){return locales.filter(x=>x!=="en").map(lang=>({lang}))}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return seo(lang as Locale)}
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;if(!locales.includes(lang as Locale)||lang==="en")notFound();return <HomePage locale={lang as Locale}/>}
