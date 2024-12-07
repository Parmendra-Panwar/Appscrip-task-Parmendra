import HomePageHeader from "./components/HomePageHeader";
import SiteHeader from "./components/SiteHeader";
import TopHeading from "./components/TopHeading";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <TopHeading />
      <SiteHeader />
      <HomePageHeader />
    </>
  );
}
