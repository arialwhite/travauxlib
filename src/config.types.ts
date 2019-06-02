/**
 * Configuration of the view
 */

export enum DisplayMode {
  BY_LOT,
  BY_LOCATION
}

export type ViewConfig = {
  displayMode: DisplayMode;
};

export const DEFAULT_VIEW_CONFIG: ViewConfig = {
  displayMode: DisplayMode.BY_LOT
};