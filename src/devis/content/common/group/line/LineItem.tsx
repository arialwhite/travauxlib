/**
 * Line component
 */

import React from 'react';
import './LineItem.css';
import { Line } from '../../../../devis.types';

type Props = { line: Line, index: number };

export const LineItem: React.FC<Props> = (props: Props) => {
  const { line, index } = props;

  return (
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
};