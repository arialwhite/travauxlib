import React from 'react';
import './Footer.css';
import { Devis, Tva } from '../devis.types';

type Props = { devis: Devis };

const ShowTva = (tva: Tva, index: number) => (
  <tr key={index}>
    <td>TVA {tva.taux}%</td>
    <td>{tva.montant} €</td>
  </tr>
);

export const Footer: React.FC<Props> = (props: Props) => {
  const { devis } = props;

  return (
    <footer className="block d-2">
      <h3 className="footer-title h3 mb-4">Totaux</h3>
      <table className="table">
        <tbody>
          <tr>
            <td>Total HT</td>
            <td>{devis.prixTotalHTAvantRemise} €</td>
          </tr>
          <tr>
            <td>Remise</td>
            <td>{devis.montantRemise} €</td>
          </tr>
          <tr>
            <td>Total HT après remise</td>
            <td>{devis.montantRemise + devis.prixTotalHTAvantRemise} €</td>
          </tr>
          {devis.montantsTVA.map(ShowTva)}
          <tr>
            <td>Total TTC</td>
            <td>{devis.prixTotalTTC} €</td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}
