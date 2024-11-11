"use client";

import React, { FC } from "react";
import { showPreferences } from "vanilla-cookieconsent";

import { useTranslation } from "@i18n/client";
import LangSwither from "./LangSwither";

interface ILegalLinksProps {
  lng: string;
  target_blank?: boolean;
}

let LegalLinks: FC<ILegalLinksProps> = ({ lng }) => {
  const { t } = useTranslation(lng, "footer");

  return (
    <div>
      <LangSwither lng={lng} />
      <br />
      <br />
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <li>
          <button
            key={lng}
            type="button"
            // data-cc="show-preferencesModal"
            onClick={showPreferences}
          >
            {t("footer_button_1")}
          </button>
        </li>
        <li>
          <button key={lng} type="button" data-cc="show-preferencesModal">
            {t("footer_button_2")}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LegalLinks;
