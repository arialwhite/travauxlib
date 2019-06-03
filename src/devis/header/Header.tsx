import React from 'react';
import './Header.css';
import { Company, Deal, LOCAL_DATE } from '../devis.types';

type Props = { company: Company, deal: Deal, date: LOCAL_DATE };

export const Header: React.FC<Props> = (props: Props) => {
  const { company, deal, date } = props;

  const formattedDate = formatDate(date);

  return (
    <header className="d-flex flex-row flex-nowrap mt-5">
      <div className="p-2 col-7">
        <div className="header-company">
          <div className="header-line">{company.statutEntreprise} <strong>{company.name}</strong></div>
          <div className="header-line">{company.address}</div>
          <div className="header-line">{company.postalCode} {company.city}</div>
        </div>
      </div>
      <div className="p-2 col">
        <div className="header-deal pl-4">
          <div className="header-line">Le {formattedDate}</div>
          <div className="header-line">{deal.customerName}</div>
          <div className="header-line">{deal.billingAddress.address}</div>
          <div className="header-line">{deal.billingAddress.postalCode} {deal.billingAddress.city}</div>
        </div>
      </div>
    </header>
  );
};

function formatDate(date: LOCAL_DATE): string {
  return date ? date.split('-').reverse().join('/') : '';
}