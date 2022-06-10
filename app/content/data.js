/*
sanctions
*/
/*
pre-war strength
https://www.statista.com/topics/9087/russia-ukraine-war-2022/#dossierKeyfigures
*/

/*
russian losses
https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html
- can scrape

russian losses in $$terms
https://twitter.com/bip_in_ua
*/
const items = [
    {
        t: 'Weapons to Ukraine',
        fa: 'jet-fighter',
        component: 'data/weapons-supplied'
    },
    {
        t: 'Sanctions',
        fa: 'ban',
    },
    {
        t: 'Humanitarian Aid',
        file: 'humanitarian_j2S7Wt7XZ.png',
    },
    {
        t: 'Russian Officer Losses',
        fa: 'person-falling-burst',
        component: 'data/russian-officer-losses',
    },
    {
        t: 'Refugees',
        fa: 'tents',
    },
    {
        t: 'Russian Energy Dependency',
        fa: 'fire-flame-simple',
    },
    {
        t: 'Ukraine support: Countries',
        fa: 'globe',
        ukr: true,
    },
    {
        t: 'Companies in Russia',
        fa: 'building',
    },
    {
        t: 'Weapons Deployment',
        file: 'Artillery-Gun-Silhouette_n8lzfHHLN.svg',
    },
    {
        t: 'Weapons Range',
        file: 'missile_7ln1SxYjQ.png',
    },
    // {
    //     t: 'Foreign Fighting Contingents',
    //     file: 'missile_7ln1SxYjQ.png',
    // }
];
export default items;