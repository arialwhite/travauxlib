import { Section, Location, Line } from "../devis.types";
import { getLinesByLocation } from "./content.functions";
import 'core-js/features/array';

it('can get lines by location', () => {
  //GIVEN
  const prixAgg = {
    prixTotalHT: 0, prixTotalTTC: 0
  };

  const sections: Array<Section> = [
    {
      ... prixAgg,
      lots: [
        {
          ... prixAgg,
          label: "lot1",
          lignes: [
            {
              description: 'line_1',
              locationsDetails: {locations: [{uuid: 'uuid1' }]  }
            } as any,
            {
              description: 'line_2',
              locationsDetails: {locations: [{uuid: 'uuid2' }]  }
            } as any
          ],
        },
        {
          ... prixAgg,
          label: "lot2",
          lignes: [
            {
              description: 'line_3',
              locationsDetails: {locations: [{uuid: 'uuid2' }]  }
            } as any,
            {
              description: 'line_4',
              locationsDetails: {locations: [{uuid: 'uuid3' }]  }
            } as any
          ],
        }
      ]
    }
  ];

  const location: Location[] = [
    { label: 'cuisine', uuid: 'uuid1', surface: 0 },
    { label: 'salon',   uuid: 'uuid2', surface: 0 },
    { label: 'garage',  uuid: 'uuid3', surface: 0 }
  ]

  //WHEN
  const lines: Array<[Location, Array<Line>]> = getLinesByLocation(sections, location);

  //THEN
  expect(lines.length).toBe(3);

  const cuisine = lines.filter(tuple => tuple[0].label === 'cuisine')[0];
  const names = cuisine[1].flatMap(line => line.description);

  expect(names).toContain('line_1');
  expect(names.length).toBe(1);
});