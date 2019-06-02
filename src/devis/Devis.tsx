import React from 'react';
import './Devis.css';
import { Header } from './header/Header';
import { getContent } from './content/Content';
import { Footer } from './footer/Footer';
import { Devis as DevisModel } from './devis.types';
import { ViewConfig } from '../config.types';

type Props = { devis: DevisModel, viewConfig: ViewConfig };

export const Devis: React.FC<Props> = (props: Props) => {
  const { devis, viewConfig } = props;

  const Content = getContent(viewConfig);

  return (
    <div className="devis">
      <div className="d-flex">
        <div className="devis-logo mr-4"></div>
        <div className="devis-title d-flex align-items-center">{devis.title}</div>
      </div>
      <br /><br />
      <Header company={devis.company} deal={devis.deal} date={devis.date}></Header>
      <br /><br />
      <Content sections={devis.sections} locations={devis.locations}></Content>
      <br /><br />
      <Footer devis={devis}></Footer>
    </div>
  );
}
