import Head from "next/head";

const PlausibleScript = () => (
  <Head>
    <script
      key="plausible-script"
      src="/stats/js/script.js"
      async
      defer
      data-api="/stats/api/event"
      data-domain="base64.troypoulter.com"
    />
  </Head>
);
export default PlausibleScript;