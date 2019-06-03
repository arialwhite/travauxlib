/**
 * Group/Lot component
 */

import React from 'react';
import './Group.css';
import { Line } from "../../../devis.types";
import { LineItem } from './line/LineItem';

type Props = { lines: Array<Line>, label: string, totalHt: number, index: number };

export const Group: React.FC<Props> = (props: Props) => {
  const { lines, label, totalHt, index } = props;

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
          {lines.map((line, index) => {
            return <LineItem line={line} index={index}></LineItem>
          })}
        </tbody>
      </table>
    </div>
  );
};