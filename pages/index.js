import MainLayout from "Layouts/MainLayout";
import Head from "next/head";
function Home() {
  return (
    <div>
      <Head>
        <title>Twitch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>A VER SI ES VERDA</h3>
    </div>
  );
}

Home.getLayout = (page) => <MainLayout {...page.props}>{page}</MainLayout>;

export default Home;
