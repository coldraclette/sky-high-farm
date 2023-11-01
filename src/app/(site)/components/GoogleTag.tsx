//GoogleAnalytics.tsx

'use client';

import Script from 'next/script';

interface GoogleTagProps {
  trackingId: string;
}

export default function GoogleTag({ trackingId }: GoogleTagProps) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />

      <Script id="google-tag" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
}
