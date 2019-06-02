/**
 * Content component - Common 
 */

import React from 'react';
import { Section, Location, Line } from '../devis.types';
import { DisplayMode, ViewConfig } from '../../config.types';
import { ContentByLocation } from './ContentByLocation';
import { ContentByLot } from './ContentByLot';

export type ContentProps = { sections: Array<Section>, locations: Array<Location> };

export type Content = React.FC<ContentProps>;

export function getContent(viewConfig: ViewConfig): Content {
  switch (viewConfig.displayMode) {
    case DisplayMode.BY_LOCATION: return ContentByLocation;
    case DisplayMode.BY_LOT: return ContentByLot;
  }
}

export const ShowLine = (line: Line, index: number) => (
  <tr key={index}>
    <td>
      <div className="pr-2 content-line-designation">
        {line.designation}
      </div>
      <div className="mt-2 mb-4 pr-2 content-line-description">
        {line.description}
      </div>
    </td>
    <td>{line.prixUnitaireHT} €</td>
    <td>{line.quantite}</td>
    <td>{line.prixHT} €</td>
  </tr>
);

export const ShowGroup = (lines: Array<Line>, label: string, totalHt: number, index: number) => {
  return (
  <div className="content-group" key={index}>
    <h3 className="content-group-title h3 mb-4">{label} - {totalHt} € HT</h3>
    <table className="table">
      <colgroup>
        <col className="pr-5" />
        <col className="content-group-column" />
        <col className="content-group-column" />
        <col className="content-group-column" />
      </colgroup>
      <thead>
        <tr>
          <th className="content-group-head" scope="col">Description</th>
          <th className="content-group-head" scope="col">Prix unitaire HT</th>
          <th className="content-group-head" scope="col">Quantité</th>
          <th className="content-group-head" scope="col">Prix HT</th>
        </tr>
      </thead>
      <tbody>
        {lines.map(ShowLine)}
      </tbody>
    </table>
  </div>
  ); 
};