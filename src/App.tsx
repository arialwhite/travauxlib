import React, { useState } from 'react';
import './App.css';
import { Devis } from './devis/Devis';
import { useDevis } from './devis/useDevis';
import { Tools } from './tools/Tools';
import { ViewConfig, DEFAULT_VIEW_CONFIG } from './config.types';

const Loading = () => {
  return (
    <h4 className="h4">
      loading..
    </h4>
  );
};

const App: React.FC = () => {
  const [ viewConfig, setViewConfig ] = useState<ViewConfig>(DEFAULT_VIEW_CONFIG);
  const { loading, devis } = useDevis("/travaux.json");

  return loading ? Loading() : (
    <div className="App">
      <Tools viewConfig={viewConfig} viewConfigChange={setViewConfig}></Tools>
      <Devis viewConfig={viewConfig} devis={devis}></Devis>
    </div>
  );
}

export default App;
