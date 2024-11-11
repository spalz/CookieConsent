"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useParams } from "next/navigation";

import { languages } from "@i18n/settings";
import { useEffect, useState } from "react";
import { useTranslation } from "@i18n/client";

export const LangSwither = ({
  lng,
  full,
}: {
  lng: string;
  path?: string;
  full?: boolean;
}) => {
  const { t } = useTranslation(lng, "translation");

  const pathname = usePathname();
  const [href, setHref] = useState<string>(pathname);

  return (
    <div>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <Link
              key={l}
              href={`/${l}${href.replace("/en", "").replace("/de", "")}`}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {l === "en" ? <FlagEn /> : <FlagDe />}
              {full ? <span>{t(`swith_to_${l}`)}</span> : <span>{l}</span>}
            </Link>
          );
        })}
    </div>
  );
};

const FlagEn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 27 20"
    width="27"
    height="20"
  >
    <mask
      id="a"
      width="27"
      height="20"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="#00D0BF"
        d="M1.111.8S6.667 0 13.333 0C20 0 25.556.8 25.556.8s1.11 4 1.11 9.2c0 5.2-1.11 9.2-1.11 9.2S20 20 13.333 20c-6.666 0-12.222-.8-12.222-.8S0 15.2 0 10C0 4.8 1.111.8 1.111.8Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="#2E50A6" d="M0 0h26.667v20H0z" />
      <path fill="#000" d="M26.667 0 0 20Z" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.333 10-1.44 1.92l2.88-3.84L13.333 7l11.893-8.92 2.88 3.84L17.333 10l10.773 8.08-2.88 3.84L13.333 13 1.44 21.92l-2.88-3.84L9.333 10Z"
        clipRule="evenodd"
      />
      <path fill="#000" d="m0 0 26.667 20L0 0Zm26.667 0L0 20Z" />
      <path
        fill="#EE5757"
        fillRule="evenodd"
        d="M10.667 10-.96 1.28.96-1.28 13.333 8l12.374-9.28 1.92 2.56L16 10l11.627 8.72-1.92 2.56L13.333 12 .96 21.28l-1.92-2.56L10.667 10Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.333 6V0h8v6h9.386v8h-9.386v6.037h-8V14H0V6h9.333Z"
        clipRule="evenodd"
      />
      <path
        fill="#EE5757"
        fillRule="evenodd"
        d="M10.933 7.6V0h4.8v7.6H26.68v4.8H15.733v7.63h-4.8V12.4H0V7.6h10.933Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);

const FlagDe = () => (
  <svg
    viewBox="0 0 27 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="20"
  >
    <mask
      id="mask0_123130_164020"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="27"
      height="20"
    >
      <path
        d="M1.11111 0.8C1.11111 0.8 6.66667 0 13.3333 0C20 0 25.5556 0.8 25.5556 0.8C25.5556 0.8 26.6667 4.8 26.6667 10C26.6667 15.2 25.5556 19.2 25.5556 19.2C25.5556 19.2 20 20 13.3333 20C6.66667 20 1.11111 19.2 1.11111 19.2C1.11111 19.2 0 15.2 0 10C0 4.8 1.11111 0.8 1.11111 0.8Z"
        fill="#00D0BF"
      />
    </mask>
    <g mask="url(#mask0_123130_164020)">
      <rect y="13.333" width="26.6667" height="6.66667" fill="#FCD95E" />
      <rect y="6.66699" width="26.6667" height="6.66667" fill="#EE5757" />
      <rect width="26.6667" height="6.66667" fill="#2C2929" />
    </g>
  </svg>
);

export default LangSwither;
