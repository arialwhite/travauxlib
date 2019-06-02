/**
 * API - Devis pros
 * 
 * Models definition
 */

export type HTTP_URL = string;

export type LOCAL_DATE = string;

export type Address = {
  address: string;
  postalCode: string;
  city: string;
};

export type Tva = {
  taux: number;
  base: number;
  montant: number;
};

export type PrixAgg = {
  prixTotalHT: number;
  prixTotalTTC: number;
};

export type Deal = {
  isTravauxLib: boolean;
  customerName: string;
  customerEmail: string;
  billingAddress: Address;
};

export type CompanyLegal = {
  corpsEtat: [],
  isRGE: boolean;
  isQualibat: boolean;
  isEcoArtisant: boolean;
  isKycCompliant: boolean;
  isArchitecte: boolean;
  isTVANonApplicable: boolean;
  siret: string;
  formattedSiret: string;
  siren: string;
  numeroTVA: string;
};

export type Company = Address & CompanyLegal & {
  name: string;
  email: string;
  logoUrl: HTTP_URL;
  statutEntreprise: string;
  websites: {};
  phoneNumber: string;
  captital: number;
  insurances: Array<{
    file: HTTP_URL
  }>;

  lemonWayWalletId: number;
  firstNameRepresentantLegal: string;
  lastNameRepresentantLegal: string;
};

export type LocationRef = {
  uuid: string;
  quantite: number;
}

export type Location = {
  uuid: string;
  label: string;
  surface: number;
}

export type Line = {
  designation: string;
  description: string;
  prixUnitaireHT: number;
  quantite: number;
  unite: string;
  prixHT: number;
  tauxTVA: number;
  montantTVA: number;
  prixTTC: number;
  locationsDetails: {
    locations: Array<LocationRef>;
    additionalQuantity: number;
    quantityIsByLocation: boolean;
  }
}

export type Lot = PrixAgg & {
  label: string;
  lignes: Array<Line>;
};

export type Section = PrixAgg & {
  lots: Array<Lot>;
};

export type Devis = PrixAgg & {
  token: string;
  deal: Deal;
  company: Company;
  title: string;
  introductionLetter: string;
  sections: Array<Section>;
  prixTotalHTAvantRemise: number;
  remise: {
    typeRemise: string;
  };
  montantRemise: number;
  prixTotalOptionHT: number;
  prixTotalFreeHT: number;
  montantsTVA: Array<Tva>;
  attachments: Array<{}>;
  date: LOCAL_DATE;
  dureeValidite: string;
  modalitesPaiment: Array<{
    pourcentage: number;
    label: string;
    montant: number;
  }>;
  signe: boolean;
  isTS: boolean;
  isFinal: boolean;
  locations: Array<Location>
};