import React from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Mapbox from "../components/Mapbox";
import ShowMyLocation from "../components/ShowMyLocation";
import utilStyles from "../styles/utils.module.css";
import GeoCoder from "../components/GeoCoder";
import { RecoilRoot } from "recoil";
import MapControls from "../components/MapControls";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mapbox & Next.js</p>
      </section>
      <RecoilRoot>
        <Mapbox apiKey={apiKey}>
          <ShowMyLocation />
          <MapControls />
        </Mapbox>
      </RecoilRoot>
    </Layout>
  );
}
