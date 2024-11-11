import MainPageDetail from "./components/MainPageDetail";

export default async function MainPage({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return <MainPageDetail lng={lng} />;
}
