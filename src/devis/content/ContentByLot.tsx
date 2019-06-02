/**
 * Content component - By lot variation
 */

import React from 'react';
import './Content.css';
import { Section, Lot } from '../devis.types';
import { Content, ContentProps, ShowGroup } from './Content';

const ShowLot = (lot: Lot, index: number) => ShowGroup(lot.lignes, lot.label, lot.prixTotalHT, index);

const ShowSection = (section: Section, index: number) => (
  <div className="d-flex flex-column flex-nowrap m-2" key={index}>
    {section.lots.map(ShowLot)}
  </div>
);

export const ContentByLot: Content = (props: ContentProps) => {
  const { sections } = props;

  return (
    <div className="content p-2">
      {sections.map(ShowSection)}
    </div>
  );
}