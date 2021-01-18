const options = [
  {
    value: '1',
    label: 'Below 10',
    ageMin: 0,
    ageMax: 10,
  },
  {
    value: '2',
    label: '11-20',
    ageMin: 11,
    ageMax: 20,
  },
  {
    value: '3',
    label: '21-30',
    ageMin: 21,
    ageMax: 30,
  },
  {
    value: '4',
    label: '31-40',
    ageMin: 31,
    ageMax: 40,
  },
  {
    value: '5',
    label: '41-50',
    ageMin: 41,
    ageMax: 50,
  },
  {
    value: '6',
    label: '51-60',
    ageMin: 51,
    ageMax: 60,
  },
  {
    value: '7',
    label: 'Over 60',
    ageMin: 61,
    ageMax: 200,
  },
];

export function getAgeOptions() {
  return options.map(({ value, label }) => ({ value, label }));
}

export function getAgeMinMax(value: string) {
  const found = options.find((o) => o.value === value);

  if (found) {
    return { ageMin: found.ageMin, ageMax: found.ageMax };
  }

  return { ageMin: -1, ageMax: -1 };
}
