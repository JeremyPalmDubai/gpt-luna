import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./site-data";

export const metadata:Metadata={metadataBase:new URL(baseUrl),icons:{icon:"/favicon.svg"},robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}}};

export default function RootLayout({children}:{children:React.ReactNode}){
 const schema={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${baseUrl}/#organization`,name:"Luna Residences",url:baseUrl,address:{"@type":"PostalAddress",addressLocality:"Beraban",addressRegion:"Bali",addressCountry:"ID"}},{"@type":"WebSite","@id":`${baseUrl}/#website`,url:baseUrl,name:"Luna Residences Bali",inLanguage:["en","fr","es","pt"],publisher:{"@id":`${baseUrl}/#organization`}},{"@type":"RealEstateListing",name:"Luna Residences",url:baseUrl,description:"A limited collection of 15 ocean-view residences at Nuanu Creative City, Bali.",datePosted:"2026-07-18",offers:{"@type":"Offer",price:"185000",priceCurrency:"USD",availability:"https://schema.org/PreOrder"},address:{"@type":"PostalAddress",addressLocality:"Beraban",addressRegion:"Bali",addressCountry:"ID"}}]};
 return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>
}
