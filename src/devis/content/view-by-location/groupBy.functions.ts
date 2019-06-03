import { Line, Section, Location } from "../../devis.types";

export type LinesGroup = { location: Location, lines: Array<Line> }; // lines by location

const DEFAULT_LOCATION: Location = { label: 'Autres prestations', surface: null, uuid: 'default' };

/**
 * Group the lines by their locations
 * @param sections 
 * @param locations 
 */
export function groupLinesByLocation(sections: Array<Section>, locations: Array<Location>): Array<LinesGroup> {
  if (!sections) {
    return [];
  }

  // Creates an empty group for each location
  const allGroups = createsEmptyGroups(locations);

  // Fill the groups with lines
  return sections.flatMap(section => section.lots)
    .flatMap(lot => lot.lignes)
    .reduce(collectLine, allGroups)
    .filter(group => group.lines.length > 0);
}

/**
 * Add the line to the groups which it belongs
 * @param allGroups Groups of lines
 * @param line A line
 */
function collectLine(allGroups: Array<LinesGroup>, line: Line): Array<LinesGroup> {
  const locationsIds = getLocationIds(line);

  findGroups(allGroups, locationsIds).forEach(
    group => group.lines.push(line)
  );

  return allGroups;
}

/**
 * Find the lines groups that matches line's locations
 * @param allGroups Groups of lines
 * @param locationIds List of UUIDs of line locations
 */
function findGroups(allGroups: Array<LinesGroup>, locationIds: Array<string>): Array<LinesGroup> {
  return allGroups.filter(
    group => locationIds.some(uuid => uuid === group.location.uuid)
  );
}

/**
 * Creates the group of lines
 * @param locations 
 */
function createsEmptyGroups(locations: Array<Location>): Array<LinesGroup> {
  return locations.concat([DEFAULT_LOCATION])
    .map(location => {
      return { location, lines: [] };
    });
}

/**
 * Get location ids (UUID) of a line
 * 
 * note: return default location uuid when there is no location available
 * @param line 
 */
function getLocationIds(line: Line): Array<string> {
  const locations = line.locationsDetails.locations;

  if (locations && locations.length) {
    return locations.map(location => location.uuid);
  } else {
    return [DEFAULT_LOCATION.uuid];
  }
}