import Script from "next/script";

const PlausibleScript = () => (
  <>
    <Script
      async
      defer
      src="/stats/js/script.js"
      data-api="/stats/api/event"
      data-domain="base64.troypoulter.com"
    ></Script>
    <Script async src="https://plausible.io/js/embed.host.js"></Script>
    <Script
      defer
      data-domain="base64.troypoulter.com"
      src="https://plausible.io/js/script.outbound-links.js"
    ></Script></>
);
export default PlausibleScript;