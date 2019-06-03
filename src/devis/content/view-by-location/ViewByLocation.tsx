/**
 * ViewByLocation Component - Group lines by location
 */

import React from 'react';
import { ContentView, ContentViewProps } from "../common/view.types";
import { LinesGroup, groupLinesByLocation } from './groupBy.functions';
import { Group } from '../common/group/Group';

export const ViewByLocation: ContentView = (props: ContentViewProps) => {
  const { sections, locations } = props;

  const groups = groupLinesByLocation(sections, locations);

  return (
    <div className="content p-2">
      {groups.map((group, index) => {
        return <Group lines={group.lines} label={group.location.label} totalHt={getPrixHT(group)} index={index}></Group>
      })}
    </div>
  );
};

function getPrixHT(group: LinesGroup): number {
  return group.lines.map(line => line.prixHT).reduce((x, y) => x + y);
}