/*
military
        https://www.koloua.com/en - need more info
*/

const items = [
  {
    name: 'Give Money',
    icon: 'money-bill',
    iconcolor: 'green',
    subs: [
      {
        name: 'Humanitarian',
        links: [
          {
            n: `Razom`,
            u: `https://www.razomforukraine.org`,
            t: `Providing help with war relief, evacuations, and advocating for Ukraine `,
          },
          // not connecting
          // {
          //   n: `Aid to frontline city of Mykolaiv`,
          //   u: `https://kimmerians.org.ua/en/#pro_nas`,
          //   t: `Help for one of the frontline cities in the war`,
          // },
        ],
      },
      {
        name: 'Military',
        links: [
          {
            n: `Ukrainian Military`,
            u: `https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi`,
            t: `donate directly to the Ukrainian Military `,
          },
          {
            u: `https://riprawlings.com/ripleys-heroes/`,
            t: `
                group recruiting and supporting volunteer medical personnel, journalists, and experienced soldiers.
                More at their <a href='https://twitter.com/RipRawlings'>Twitter account</a>
            `,
          },
          {
            n: `Come Back Alive`,
            u: `https://www.comebackalive.in.ua/`,
            t: `since 2014, one of the largest charities supporting the Armed Forces of Ukraine`,
          },
        ],
      },
    ],
  },
  {
    name: 'Take Action',
    icon: 'bolt',
    iconcolor: '#F6BE00',
    subs: [
      {
        links: [
          {
            n: `Fight for Ukraine`,
            u: `https://fightforua.org/`,
            t: `join the Internation Legion of Defense Of Ukraine - <b>only for those with military experience</b>`,
          },
          {
            n: `ENGin Program`,
            u: `https://www.enginprogram.org/`,
            t: `teach English to Ukrainian students. We can vouch - a great experience `,
          },
          {
            n: `TeachersXchange`,
            u: `https://teachersxchange.com/volunteer-to-teach-kids-in-ukraine-online/`,
            t: `volunteer to teach kids in Ukraine online`,
          },
          {
            n: `Airbnb Refugee Housing`,
            u: `https://www.airbnb.org/help-ukraine`,
            t: `have space to house a Ukrainian refugee? Airbnb will help arrange`,
          },
        ],
      },
    ],
  },
  {
    name: 'Other Links',
    icon: 'link',
    iconcolor: 'black',
    subs: [
      {
        links: [
          {
            n: `CBS News`,
            u: `https://www.cbsnews.com/news/russia-ukraine-refugees-donations-charity/`,
            t: `CBS News suggestions`,
          },
          {
            n: `ZDNet`,
            u: `https://www.zdnet.com/article/how-you-can-help-ukraine-donation-sites-and-resources/`,
            t: `more suggestions from ZDNet`,
          },
          {
            n: `Ukraine at War`,
            u: `https://ukraineatwar.today/`,
            t: `more good links`,
          },
        ],
      },
    ],
  },
];

export default items;
