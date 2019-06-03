import React from 'react';
import './Devis.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Devis as DevisModel } from './devis.types';
import { ViewConfig, DisplayMode } from '../config.types';
import { ContentView } from './content/common/view.types';
import { ViewByLocation } from './content/view-by-location/ViewByLocation';
import { ViewtByLot } from './content/view-by-lot/ViewByLot';

type Props = { devis: DevisModel, viewConfig: ViewConfig };

export const Devis: React.FC<Props> = (props: Props) => {
  const { devis, viewConfig } = props;

  const ContentView = getContentView(viewConfig);

  return (
    <div className="devis">
      <div className="d-flex">
        <div className="devis-logo mr-4"></div>
        <div className="devis-title d-flex align-items-center">{devis.title}</div>
      </div>
      <br /><br />
      <Header company={devis.company} deal={devis.deal} date={devis.date}></Header>
      <br /><br />
      <ContentView sections={devis.sections} locations={devis.locations}></ContentView>
      <br /><br />
      <Footer devis={devis}></Footer>
    </div>
  );
};

function getContentView(viewConfig: ViewConfig): ContentView {
  switch (viewConfig.displayMode) {
    case DisplayMode.BY_LOCATION: return ViewByLocation;
    case DisplayMode.BY_LOT: return ViewtByLot;
  }
}
