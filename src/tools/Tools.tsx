import React from 'react';
import './Tools.css';
import { ViewConfig, DisplayMode } from '../config.types';

type ViewConfigHandler = (v: ViewConfig) => void;
type Props = {viewConfigChange: ViewConfigHandler, viewConfig: ViewConfig}

export const Tools: React.FC<Props> = (props: Props) => {
  const {viewConfig} = props;

  const setByLot = () => props.viewConfigChange({displayMode: DisplayMode.BY_LOT});
  const setByLocation = () => props.viewConfigChange({displayMode: DisplayMode.BY_LOCATION});

  return (
    <nav>
      <ul className="nav flex-column nav-pills">
        { Link('Par lot',   viewConfig.displayMode ===  DisplayMode.BY_LOT,      setByLot) }
        { Link('Par pièce', viewConfig.displayMode ===  DisplayMode.BY_LOCATION, setByLocation)  }
      </ul>
    </nav>
  );
};

function Link(label: string, active: boolean, callback: () => void) {
  const cssClass = active ? "nav-link active" : "nav-link";

  return (
    <li className="nav-item" onClick={callback}>
      <span className={cssClass}>{label}</span>
    </li>
  )
}
