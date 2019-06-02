/**
 * Content component - By location variation
 */

import React from 'react';
import { Content, ContentProps, ShowGroup } from "./Content";
import { LineGroup, getLinesByLocation } from './content.functions';

const ShowLocationGroup = (group: LineGroup, index: number) => {
  const location = group[0];
  const lines = group[1];

  const prixTotalHT = lines.map(line => line.prixHT).reduce((x, y) => x + y);

  return ShowGroup(lines, location.label, prixTotalHT, index) 
}

export const ContentByLocation: Content = (props: ContentProps) => {
  const { sections, locations } = props;

  const groups = getLinesByLocation(sections, locations);

  return (
    <div className="content p-2">
      {groups.map(ShowLocationGroup)}
    </div>
  );
}