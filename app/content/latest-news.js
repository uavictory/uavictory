/*
 */
const latestNews = [
  
  {
    t: "Lithuania is awesome! It's citizens crowd-source 5 mil Eur to buy Ukraine a Bayraktar!",
    url: 'https://www.bloomberg.com/news/articles/2022-05-28/lithuanians-raise-5-4-million-to-buy-combat-drone-for-ukraine',
  },
  {
    t: `Latest strategic assessment from Jomini of the West`,
    url: 'https://twitter.com/JominiW/status/1531802118155296771',
  },
  {
    t: 'US to supply Ukraine with long-range MLRS',
    url: 'https://www.nbcnews.com/politics/national-security/biden-may-announce-new-ukraine-aid-package-longer-range-rocket-systems-rcna31329',
  },
  {
    t: 'June 1 Russian loss estimates: +200 troops, +3 tanks, +41 APV, +4 UAV...',
    url: 'https://twitter.com/KyivIndependent/status/1531901396005621760',
  },
  // {
  //   t: `May 27 ISW Report: Russians advance into Severodonetsk, and from Lyman, Popasna: prospects unclear`,
  //   url: 'https://www.understandingwar.org/backgrounder/ukraine-conflict-updates',
  // },
  {
    t: 'Russians storming on several fronts at the same time, losses are inevitable',
    url: 'https://news.yahoo.com/ukraines-deputy-minister-defence-maliar-132700467.html',
  },
  {
    t: `82% of Ukrainians ain't in no mood to give up any territory`,
    url: 'https://twitter.com/KyivIndependent/status/1529016253712564225',
  },
  {
    t: `Ukrainian Intelligence Head: turning point in Aug, active phase of war done by year end (in Ukrainian)`,
    url: 'https://www.slovoidilo.ua/2022/05/24/novyna/suspilstvo/holova-hur-rozpoviv-koly-nastane-perelomnyj-moment-vijni-rosiyeyu-ta-chym-vona-zakinchytsya',
  },
];

const pastNews = [
  {
    date: '2022-05-25',
    items: [

      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-24',
    items: [
      {
        t: `Russians try to cross Siverskyi Donets river again! Reports they lost whole BTG - again! `,
        url: 'https://twitter.com/EuromaidanPress/status/1528330661752348677',
      },
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-23',
    items: [
  {
    t: `20 countries pledge new weapons for Ukraine at Ramstein 2`,
    url: 'https://thehill.com/policy/defense/3498282-pentagon-20-countries-agree-to-new-security-aid-for-ukraine/',
  },

      {
        t: `Poland terrminates Russian gas contract`,
        url: 'https://www.euronews.com/2022/05/23/ukraine-crisis-poland-russia',
      },
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-22',
    items: [
      {
        t: `Polish President Duda returns to Kyiv`,
        url: 'https://www.rferl.org/a/ukraine-poland-duda-visit/31862055.html',
      },
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-21',
    items: [
      {
        t: `Biden signs $40 billion Ukraine aid package into law`,
        url: 'https://thehill.com/news/administration/3495301-biden-signs-40b-ukraine-aid-package-into-law/',
      },
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-20',
    items: [
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-19',
    items: [
      {
        t: `UNSTOPPABLE: Kharkiv cat Stepan follows up Ukraine Eurovision triumph with Influencer Award win`,
        url: 'https://twitter.com/KyivIndependent/status/1527236169251049473',
      },
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-18',
    items: [
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-17',
    items: [
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-16',
    items: [
      {
        t: ``,
        url: ``,
      }
    ],
  },
  {
    date: '2022-05-15',
    items: [
      {
        t: ``,
        url: ``,
      }
    ],
  },
]
export {latestNews, pastNews};

/* past
  {
    t: `Liberation of Kharkiv Continues`,
    url: 'https://twitter.com/KyivIndependent/status/1526988884026040320',
  },
  {
    t: `UA General Budanov predicts victory by year end as US GOP delegation visits Kyiv`,
    url: 'https://www.cnbc.com/2022/05/14/russia-ukraine-live-updates.html',
  },
  {
    t: `Svyatoslav Vakarchuk performed at the Chernobyl nuclear power plant`,
    url: 'https://euroweeklynews.com/2022/05/14/svyatoslav-vakarchuk-chernobyl-nuclear-power-plant/',
  },
  {
    t: "Poland issues stamp commemorating Zelensky's leadership",
    url: 'https://twitter.com/ukraine_world/status/1524718178261258246',
  },
  {
    t: `Who won eurovision 2022? hint: they also won the battles of kyiv and kharkiv`,
    url: 'https://www.bbc.com/news/entertainment-arts-61452678',
  },
  {
    t: `Who won eurovision 2022? hint: they also won the battles of kyiv and kharkiv`,
    url: 'https://www.bbc.com/news/entertainment-arts-61452678',
  },
  {
    t: `Nato: Erdogan says will block Finland/Sweden, US expects resolution`,
    url: 'https://www.reuters.com/world/europe/more-ukraine-fighters-surrendering-mariupol-russia-says-2022-05-18/',
  },
  {
    t: 'International Red Cross Recording Names of Soldiers Surrendering at Azovstal', 
    url: `https://www.pravda.com.ua/eng/news/2022/05/19/7347193/`,
  },
  {
    t: 'Sweden Signs NATO Request, Finland Formally Endorses Move',
    url: 'https://www.nbcchicago.com/news/national-international/sweden-signs-nato-request-finns-formalize-intent-turkey-complicates-path/2834448/',
  },
  {
    t: 'Zelensky tells Azovstal heroes to lay down arms to save lives. Prisoner swap expected',
    url: 'https://twitter.com/HannaLiubakova/status/1526312579144028161',
  },
  {
    t: `Additional $521 in EU military aid to Ukraine`,
    url: `https://twitter.com/KyivIndependent/status/1525045560390168579`,
  },

  {
    t: `Israel - given the Lavrov kiss - approves Latvian transfer of Israeli weapons to Ukraine`,
    url: `https://twitter.com/ukraine_world/status/1525199213419692034`,
  },
  {
    t: 'Nato to get reindeer; meatballs to follow (apologies to Finland and Sweden for our silly title :-)',
    url: 'https://bnn-news.com/finland-announces-intention-to-join-nato-234657',
  },
  {
    t: 'Dead Russian colonel count hits 40',
    url: 'https://www.independent.co.uk/news/world/europe/putin-loses-39th-colonel-kharkiv-b2075368.html',
  },
  {
    t: 'UA forces north of Kharkiv close in on Russian border',
    url: 'https://twitter.com/War_Mapper/status/1523815508029714434',
  },
  {
    t: 'May 9th: scaled-back parade. "Adverse weather" cancels flyover',
    url: 'https://www.newsweek.com/russia-cancels-military-flyovers-victory-day-may-9-adverse-weather-1704656',
  },
*/
