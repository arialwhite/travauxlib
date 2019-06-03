/**
 * Content component - Common 
 */

import React from 'react';
import { Section, Location } from '../../devis.types';

export type ContentViewProps = { sections: Array<Section>, locations: Array<Location> };

export type ContentView = React.FC<ContentViewProps>;
