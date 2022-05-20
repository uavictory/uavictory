/*
  {
    p: ``,
    i: '',
    d: '2022-05-',
    u: ``,
    t: ``,
  },
 
/// to add

 */
const visitors = [
  {
    p: 'Mark Daly, Sean Ó Fearghail',
    i: 'daly_vgUZx9_Tn.png',
    d: '2022-05-20',
    u: `https://twitter.com/EuromaidanPress/status/1527648536543756288`,
    t: `President Zelensky welcomes Ireland Senate Chair Mark Daly and legislator Sean Ó Fearghail`,
  },
  {
    p: 'GOP Congressional Delegation',
    i: 'gop-delegation_26mJmCvwV.jpeg',
    d: '2022-05-14',
    u: `https://www.cnn.com/2022/05/14/politics/zelensky-ukraine-mcconnell-republican-senators/index.html`,
    t: `President Zelensky welcomes a US congressional delegation led by Senate Minority Leader Mitch McConnell`,
  },
  {
    p: 'Jill Biden',
    i: 'jill_biden_QFbM9kmSKU.jpeg',
    u: '',
    d: '2022-05-08',
    t: `President Biden's wife Jill makes a surprise visit to Ukraine and meets with 
        Ukrainian first lady Olena Zelenska at a shelter for displaced Ukrainian refugees`,
  },
  {
    p: 'Bono, The Edge',
    i: 'bone_-kmuGKMDmq.webp',
    u: '',
    d: '2022-05-09',
    t: `Irish rock band U2 members Bono and the Edge show up at a Kyiv subway station 
        previously used as a bomb shelter and jam with Ukrainian musicians`,
  },
  {
    p: 'Justin Trudeau',
    i: 'trudeau_CiimJW09J.jpeg',
    u: '',
    d: '2022-05-09',
    t: `Canadian Prime Minister Justin Trudeau makes an unannounced visit. But there's no
        unannouncing that more goodies of an explosive nature will be heading to Ukraine`,
  },
  {
    p: 'Boris Johnson',
    u: '',
    i: 'boris-johnson_nTyzVaEoI.jpeg',
    d: '2022-04-09',
    t: `British Prime Minister Boris Johnson makes a huge surprise visit in a "show of solidarity". He also
      announces that Britain, one of Ukraine's biggest supporters, will be sending more armored vehicles
      and anti-ship missiles`,
  },
  {
    p: 'Nancy Pelosi',
    i: 'pelosi_Bai444cDWd.jpeg',
    u: '',
    d: '2022-04-30',
    t: `In another big surprise visit, US House Speaker Nancy Pelosi shows up with a congressional
        delegation to show support and meet with President Zelensky`,
  },
  {
    p: 'Anthony Blinken and Lloyd Austin',
    i: 'blinken_aHzC6fu_4.webp',
    u: '',
    d: '2022-04-24',
    t: `US Secretaries of State and Defense Anthony Blinken and Lloyd Austin make an official visit
      to Kyiv to meet with President Zelensky and other officials and offer additional support to Ukraine
      to defeat the Russian invasion`,
  },
  {
    p: 'Charles Michel',
    i: 'michel_2K-EGp3-7.jpeg ',
    u: '',
    d: '2022-04-20',
    t: `European Council President Charles Michel pledges European solidarity with Ukraine 
      during a surprise visit to Kyiv and says justice must be done for alleged Russian war crimes `,
  },
  {
    p: 'President of Poland and Balitc States',
    i: 'polish-president__PWa_b4aQd.webp',
    u: 'https://notesfrompoland.com/2022/04/13/presidents-of-poland-and-baltic-states-visit-kyiv-to-show-support-for-ukraine/',
    d: '2022-04-13',
    t: `The presidents of Poland, Lithuania, Latvia and Estonia, all of whom suffered under Soviet
        hegemony, meet President Zelenskiy and called for increased military support for Ukraine 
        and for Russia to be held accountable its horrific invasion`,
  },
  {
    p: 'Marie-Agnes Strack-Zimmermann, Michael Roth and Anton Hofreiter',
    u: 'https://www.rfi.fr/en/pressure-mounts-on-berlin-as-kyiv-snubs-german-president',
    i: 'roth_ZsLbWD9CW.jpeg',
    d: '2022-04-12',
    t: `MPs from three of Germany's political parties show up in Kyiv to show support for an EU ban on
         Russian oil and put pressure on foot-dragging German Chancellor Olaf Scholz`,
  },
  {
    p: 'Ursula van der Leyden',
    i: 'leyen_l1iwa8i68g.jpeg',
    u: '',
    d: '2022-04-08',
    t: `EU Commission President Ursula von der Leyen and EU foreign policy chief Josep Borrell
      meet with President Zelensky, then witness the atrocities committed in Bucha. They pledge support
      for Ukrainian EU membership and help expediting the process`,
  },
  {
    p: 'Friedrich Merz',
    i: 'merz_tPELqLwzg2.jpeg',
    d: '2022-04-08',
    u: 'https://abcnews.go.com/International/wireStory/german-opposition-leader-visits-kyiv-scholz-refuses-84463626',
    t: `Another German politician, this time opposition leader Friedrich Merz, arrives in Kyiv to show support for
      Ukraine and add pressure to Chancellor Sholz to do more `,
  },
  {
    p: 'Angelina Jolie',
    i: 'jolie_wBe0zRfU7.webp',
    d: '2022-05-02',
    u: 'https://www.npr.org/2022/05/02/1095921716/angelina-jolie-lviv-ukraine-refugees-volunteers-children',
    t: `American actress Angelia Jolie, who is also a UN Special Envoy for refugees, makes a surpise visit to Lviv,
        where she meets with people displaced by the war and volunteers helping them`,
  },
  {
    p: 'Annalena Baerbock',
    u: 'https://www.dw.com/en/german-foreign-minister-baerbock-visits-ukraine/a-61744819',
    i: 'baerbock_GZ8c5E3Tsd.jpeg',
    d: '2022-05-10',
    t: `Foreign Minister Baerbock makes first visit to Ukraine by a German cabinet minister since the February
      24th Russian invasion, indicating increasing German sentiment in favor of offering Ukraine more support`,
  },
  {
    p: 'The prime ministers of Poland, Czech Republic, and Slovenia',
    i: 'fiala_KjcTXSMJtC.jpeg',
    u: 'https://www.expats.cz/czech-news/article/czech-daily-news-roundup-tuesday-march-15-2022',
    d: '2022-03-15',
    t: `With Kyiv nearly encircled by Russian troops, the three prime ministers make a surprise visit to show 
        solidarity with Ukraine, and offer the "unequivocal support of the entire EU for the sovereignty and 
        independence of Ukraine and to present a broad package of support for the Ukrainian state and society"
      `,
  },
  {
    p: 'Eduard Heger',
    i: 'heger_bA6XifqJU.jpeg',
    d: '2022-04-08',
    u: 'https://www.president.gov.ua/en/news/prezident-ukrayini-u-kiyevi-zustrivsya-z-premyer-ministrom-s-74189',
    t: `Prime Minister of the Slovak Republic Eduard Heger come to Kyiv to show solidarity with Ukraine as it
      fights to defend European ideals, and offers more Slovakian aid`,
  },
  {
    p: 'Andrej Plenković',
    i: 'plenkovic_mM2zat-hmP.jpeg',
    d: '2022-05-08',
    u: 'https://english.nv.ua/nation/croatia-pm-comes-to-kyiv-ukraine-news-50240405.html',
    t: `Prime Minister of Croatia, Andrej Plenković arrives in Kyiv to express solidarity with Ukraine and 
      calls for further sanctions on Russia `,
  },
  {
    p: 'Kiril Petkov',
    i: 'petkov_0kRTrRUKE.jpeg',
    d: '2022-04-27',
    u: 'https://www.reuters.com/world/europe/bulgaria-consider-ukraines-request-repair-heavy-military-machinery-2022-04-28/',
    t: `Bulgarian Prime Minister Kiril Petkov is in Kyiv to show support for Ukraine and consider Kyiv's request
      for military aid, which his party supports, but is opposed by a coalition member`,
  },
];
// {
//     p: "",
//     i: '',
//     d: '',
//     u: '',
//     t: ``,
//  },

export default visitors;
/*



*/
