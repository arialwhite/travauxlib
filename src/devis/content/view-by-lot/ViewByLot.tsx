/**
 * ViewtByLot Component - Group lines by lot
 */

import React from 'react';

import { ContentView, ContentViewProps } from '../common/view.types';
import { SectionBloc } from './SectionBloc';

export const ViewtByLot: ContentView = (props: ContentViewProps) => {
  const { sections } = props;

  return (
    <div className="content p-2">
      {sections.map((section, index) => {
        return <SectionBloc section={section} index={index}></SectionBloc>
      })}
    </div>
  );
}