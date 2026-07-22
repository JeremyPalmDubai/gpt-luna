import type {Metadata} from "next";
import {EditorialPage} from "./components/Site";
import {baseUrl,locales,type Locale,routeFor} from "./site-data";
import {internationalInvestmentGuide,internationalInvestmentSlugs,type InternationalInvestmentSlug} from "./international-investment-data";

const heroBySlug:Record<InternationalInvestmentSlug,string>={
 "invest-luna-residences-bali-from-abroad":"/luna-residences-aerial-river-nuanu.webp",
 "invest-luna-residences-bali-from-france":"/luna-residences-river-sunset-bali.webp",
 "invest-luna-residences-bali-from-spain":"/luna-residences-layered-terraces-bali.webp",
 "invest-luna-residences-bali-from-portugal":"/luna-residences-river-terraces-nuanu.webp",
 "invest-luna-residences-bali-from-united-kingdom":"/luna-residences-rain-responsive-architecture.webp",
 "invest-luna-residences-bali-from-uae":"/luna-residences-river-sunset-bali.webp",
 "invest-luna-residences-bali-from-switzerland":"/luna-residences-tropical-facade-bali.webp",
 "invest-luna-residences-bali-from-belgium":"/luna-residences-entrance-courtyard-bali.webp"
};
export function internationalInvestmentMetadata(locale:Locale,slug:InternationalInvestmentSlug):Metadata{const d=internationalInvestmentGuide(locale,slug),url=`${baseUrl}${routeFor(locale,slug)}`,image=`${baseUrl}${heroBySlug[slug]}`;const languages=Object.fromEntries(locales.map(l=>[l,`${baseUrl}${routeFor(l,slug)}`]).concat([["x-default",`${baseUrl}${routeFor("en",slug)}`]]));return {title:`${d.title} | Luna Residences`,description:d.intro,alternates:{canonical:url,languages},openGraph:{title:d.title,description:d.intro,url,type:"article",siteName:"Luna Residences",publishedTime:"2026-07-22",modifiedTime:"2026-07-22",images:[{url:image,alt:d.title}]},twitter:{card:"summary_large_image",title:d.title,description:d.intro,images:[image]}}}
export function InternationalInvestmentPage({locale,slug}:{locale:Locale;slug:InternationalInvestmentSlug}){const d=internationalInvestmentGuide(locale,slug),url=`${baseUrl}${routeFor(locale,slug)}`;const links=internationalInvestmentSlugs.filter(s=>s!==slug).map(s=>({href:routeFor(locale,s),label:internationalInvestmentGuide(locale,s).title}));const graph=[{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Luna Residences",item:`${baseUrl}${routeFor(locale)}`},{"@type":"ListItem",position:2,name:d.title,item:url}]},{"@type":"Article",headline:d.title,description:d.intro,datePublished:"2026-07-22",dateModified:"2026-07-22",inLanguage:locale,mainEntityOfPage:url,image:`${baseUrl}${heroBySlug[slug]}`,author:{"@type":"Organization",name:"Luna Residences",url:baseUrl},publisher:{"@type":"Organization",name:"Luna Residences",url:baseUrl}}];return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}}/><EditorialPage locale={locale} heroImage={heroBySlug[slug]} relatedLinks={links} {...d}/></>}
