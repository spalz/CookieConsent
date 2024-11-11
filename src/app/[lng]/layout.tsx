import type { ReactNode } from "react";

import Providers from "./providers";

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <body>
        <Providers lng={lng}>{children}</Providers>
      </body>
    </html>
  );
}
