import { HomePage } from "./components/Site";
import { seo } from "./seo";
export const metadata=seo("en");
export default function Page(){return <HomePage locale="en"/>}
