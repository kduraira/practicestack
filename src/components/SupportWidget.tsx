"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

export default function SupportWidget() {
  const pathname = usePathname();
  const isBlogRoute = pathname?.startsWith("/resources");
  const isEnabled = process.env.NEXT_PUBLIC_SUPPORT_WIDGET_ENABLED === "true";
  const widgetId = process.env.NEXT_PUBLIC_SUPPORT_WIDGET_ID;

  if (!isEnabled || !widgetId || isBlogRoute) {
    return null;
  }

  return (
    <>
      <Script id="freshdesk-settings" strategy="afterInteractive">{`
        window.fwSettings = { widget_id: '${widgetId}' };
      `}</Script>
      <Script
        id="freshdesk-widget"
        strategy="afterInteractive"
        src={`https://widget.freshworks.com/widgets/${widgetId}.js`}
      />
    </>
  );
}
