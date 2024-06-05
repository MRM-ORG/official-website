import Header from "@/components/Header/header";
import {
  GTM_BODY_IFRAME,
  GTM_HEAD_SCRIPT,
  SEGMENT_ID,
} from "@/constants/config";
import "./globals.css";

export const metadata = {
  title: "Reelife by Paxify | Where Dreams Embrace Execution.",
  description:
    "With Paxify you can elevate Your Website with Seamless Innovation and Simplicity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Reelife by Paxify | Where Dreams Embrace Execution.</title>
        <meta
          name="description"
          content="With Paxify you can enhance your business and engage your audience with fascinating Reels right on your website."
        />
        <script
          async
          id="reels-script"
          src="https://cdn.jsdelivr.net/gh/paxify-llc/builds@latest/reelife/paxify-reelife.js"></script>
        <link
          rel="stylesheet"
          id="reels-stylesheet"
          href="https://cdn.jsdelivr.net/gh/MRM-ORG/builds@latest/reelife/paxify-reelife.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          id="segment"
          dangerouslySetInnerHTML={{
            __html: `
            !function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="${SEGMENT_ID}";;analytics.SNIPPET_VERSION="5.2.0";
            analytics.load("${SEGMENT_ID}");
            analytics.page();
            }}();
            `,
          }}
        />
        <script id="gtag" async src={GTM_HEAD_SCRIPT}></script>
        <script
          id="ga-data"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-SW6JRKP2YD');
              `,
          }}
        />
        <script
          id="hotjar"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:4951968,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </head>
      <body style={{ margin: 0 }} id="body">
        <noscript>
          <iframe
            title="gtm-frame"
            id="gtm-frame"
            src={GTM_BODY_IFRAME}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        <Header />
        {children}
      </body>
    </html>
  );
}
