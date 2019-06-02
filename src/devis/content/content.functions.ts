import { Line, Section, Location } from "../devis.types";

export type LineGroup = [Location, Array<Line>];

const DEFAULT_LOCATION: Location = { label: 'Autres prestations', surface: null, uuid: 'default' };

/**
 * Group the lines by their locations
 * @param sections 
 * @param locations 
 */
export function getLinesByLocation(sections: Array<Section>, locations: Array<Location>): Array<LineGroup> {
  if (!sections) {
    return [];
  }
  const linesByUuid = sections.flatMap(section => section.lots)
    .flatMap(lot => lot.lignes)
    .flatMap(explodeByUuid)
    .reduce(collector, new Map<string, Line[]>());

  const result: Array<LineGroup> = locations.concat([DEFAULT_LOCATION])
    .map(location => {
      return [location, linesByUuid.get(location.uuid)]
    });
  return result.filter(item => item[1].length > 0);
}

/**
 * Creates item for each location of a line, but keep the line
 * @param line 
 */
function explodeByUuid(line: Line): Array<[string, Line]> {
  const locations = line.locationsDetails.locations;

  if (locations && locations.length) {
    return locations.map(l => l.uuid).map(pairWith(line));
  } else {
    return [['default', line]];
  }
}

/**
 * Store two related values together
 * @param context 
 */
function pairWith<T, U>(context: T): (u: U) => [U, T] {
  return (value: U) => [value, context];
}

/**
 * Collect tuples into a Map
 * @param acc 
 * @param tuple 
 */
function collector<T, U>(acc: Map<T, U[]>, tuple: [T, U]): Map<T, U[]> {
  return add(acc, tuple[0], tuple[1]);
}

/**
 * Add an item to an Array value of a map
 * @param map 
 * @param key 
 * @param value 
 */
function add<T, U>(map: Map<T, Array<U>>, key: T, value: U): Map<T, Array<U>> {
  const arr = map.get(key);
  if (arr) {
    arr.push(value);
  } else {
    map.set(key, [value]);
  }
  return map;
}