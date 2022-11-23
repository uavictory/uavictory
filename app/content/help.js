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
            t: `donate directly to the Ukrainian Military`,
          },

          {
            n: `Ukraine Aid Ops`,
            u: `https://ukraineaidops.org/`,
            t: `international group of civilian volunteers securing protective gear and life-saving equipment, delivered directly to front line defenders in Ukraine.
                Also see their <a href='https://twitter.com/UkraineAidOps'>Twitter account</a>.
            `,
          },

          {
            n: `Dzyga’s Paw`,
            u: `https://dzygaspaw.com/`,
            t: `Charity founded by a <a href='https://twitter.com/dim0kq'>young Ukrainian software developer</a> that has delivered Starlinks
                and other much needed equipment to individual Ukrainian military units 
                (<a href='https://twitter.com/dzygaspaw'>Twitter</a>).
            `,
          },
          {
            n: `Come Back Alive`,
            u: `https://www.comebackalive.in.ua/`,
            t: `since 2014, one of the largest charities supporting the Armed Forces of Ukraine`,
          },
          {
            n: `Georgian Legion`,
            u: `https://georgianlegion.com.ua/en/`,
            t: `volunteers from Georgia fighting together with the ZSU.
                Also see their <a href='https://twitter.com/georgian_legion'>Twitter account</a>.
            `,
          },
          {
            n: `Czech Embassy in Ukraine`,
            u: `https://supportukraine.cz/en.html`,
            t: `donate to buy arms through the Czech embassy`,
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
            n: `Join #NAFO on Twitter`,
            u: `https://www.reddit.com/r/NAFO/`,
            t: `
              #NAFO's mission is to combat Russian propaganda online, mainly on
              <a href='https://twitter.com/Kama_Kamilia'>Twitter</a>. Anyone can help, 
              but for formal recognition as a Fella, make a contribution to a group supporting
              Ukraine, particularly the Georgia Legion, then tweet a #FellaRequest along with
              image of your contribution.
              `,
          },
          {
            n: `Sponsor a Ukrainian family to live in the US`,
            u: `https://ukraine.welcome.us/faq`,
            t: `US citizens, non-citizen legal residents, and businesses and educational institutions can
              all help sponsor people fleeing Ukraine so they can stay in the US during the war. You can
              also sponsor as a group.`,
          },
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
