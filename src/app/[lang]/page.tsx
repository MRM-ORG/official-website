import { getTranslator } from "@/i18n";

export default async function Main({ params }: { params: { lang: string } }) {
  const translate = await getTranslator(`${params.lang}`);
  console.log(params.lang);

  // console.log(translate("welcome.helloWorld"));

  return <main></main>;
}
