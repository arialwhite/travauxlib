import { useState, useEffect } from "react";
import { Devis } from "./devis.types";

/**
 * Fetch devis from Devis-pro endpoint
 * @param url Devis-pro url
 */
export const useDevis = (url: string) => {
  const [devis, setDevis] = useState<Devis>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData(): Promise<any> {
      const response = await fetch(url);
      const json = await response.json();
      setDevis(json);
      setLoading(false);
    }

    fetchData();
  }, [url]);

  return { loading, devis };
};
