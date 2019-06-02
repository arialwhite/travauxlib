import React from 'react';
import ReactDOM from 'react-dom';
import { Company, Deal, LOCAL_DATE } from '../devis.types';
import { Header } from './Header';

const company: Company = {} as any;
const deal: Deal = {billingAddress: {}} as any;
const today: LOCAL_DATE = "2018_23_12";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header company={company} deal={deal} date={today} />, div);
  ReactDOM.unmountComponentAtNode(div);
});