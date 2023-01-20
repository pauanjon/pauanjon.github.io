import React from 'react';
/*
{
  "author": "Johansson P., Jonéus P., and Langenskiöld S.",
  "year": 2021,
  "title": "Study protocol for a comparative effectiveness evaluation of abiraterone acetate against enzalutamide: a longitudinal study based on Swedish administrative registers",
  "link": "http://dx.doi.org/10.1136/bmjopen-2021-052610",
  "journal": "BMJ Open, BMJ"
}
{
  "author": "Ankargren S., and Jonéus P.",
  "year": 2021,
  "title": "Simulation smoothing for nowcasting with large mixed-frequency VARs",
  "link": "https://doi.org/10.1016/j.ecosta.2020.05.007",
  "journal": "Econometrics and Statistics"
}
*/

export interface published {
  author: string;
  year: number;
  title: string;
  link: string;
  journal?: string;
}

export const pubdat: published[] = [
  {
    author: 'Johansson P., Jonéus P., and Langenskiöld S.',
    year: 2021,
    title:
      'Study protocol for a comparative effectiveness evaluation of abiraterone acetate against enzalutamide: a longitudinal study based on Swedish administrative registers',
    link: 'http://dx.doi.org/10.1136/bmjopen-2021-052610',
    journal: 'BMJ Open, BMJ',
  },
  {
    author: 'Ankargren S., and Jonéus P.',
    year: 2021,
    title: 'Simulation smoothing for nowcasting with large mixed-frequency VARs',
    link: 'https://doi.org/10.1016/j.ecosta.2020.05.007',
    journal: 'Econometrics and Statistics',
  },
];

export const unpubdat: published[] = [
  {
    author: 'Johansson P., Jonéus P., and Langenskiöld S.',
    year: 2021,
    title:
      ' A Study Protocol for an Instrumental Variables Analysis of the Comparative Effectiveness of two Prostate Cancer Drugs',
    link: 'https://doi.org/10.48550/arXiv.2110.04164',
  },
  {
    author: 'Jonéus P., Johansson P.,  and Langenskiöld S.',
    year: 2021,
    title:
      'A study protocol for a comparative effectiveness evaluation of antiandrogenic medications against Standard of Care',
    link: 'https://doi.org/10.48550/arXiv.2110.02698',
  },
  {
    author: 'Ankargren S., and Jonéus P.',
    year: 2021,
    title: 'Estimating Large Mixed-Frequency Bayesian VAR Models',
    link: 'https://doi.org/10.48550/arXiv.1912.02231',
  },
];

// For published
export const Link: React.FC<published> = ({ author, year, title, link, journal }) => {
  return (
    <li>
      {author} ({year}),{' '}
      <a className='text-blue-600 hover:text-blue-400' href={link}>
        "{title}"
      </a>
      {journal && <em>, {journal}</em>}
    </li>
  );
};
