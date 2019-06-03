/**
 * SectionBloc Component - Show section lots
 */

import React from 'react';
import { Section } from "../../devis.types";
import { Group } from '../common/group/Group';

type Props = { section: Section, index: number };

export const SectionBloc: React.FC<Props> = (props: Props) => {
  const { section, index } = props;

  return (
    <div className="d-flex flex-column flex-nowrap m-2" key={index}>
      {section.lots.map((lot, index) => {
        return <Group lines={lot.lignes} label={lot.label} totalHt={lot.prixTotalHT} index={index}></Group>
      })}
    </div>
  );
}