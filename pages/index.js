import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";


export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Waterbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => {
              return <MediumCard key={title} img={img} title={title} />;
            })}
          </div>
        </section>
        <LargeCard
          img={
            "https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          title={"The Greatest Outdoors"}
          description={"Wishlist curated by Waterbnb"}
          buttonText={"Get Inspired"}
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://santa-api.onrender.com/citys").then(
    (res) => res.json()
  );

    const cardsData = await fetch(
      "https://santa-api.onrender.com/live-anywhere").then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
