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
*/
const items = [
    {
        t: 'Weapons supplies to Ukraine',
        fa: 'jet-fighter',
    },
    {
        t: 'Sanctions',
        fa: 'ban',
    },
    {
        t: 'Humanitarian Aid',
        file: 'humanitarian.png',
    },
    {
        t: 'Russian Officer Losses',
        fa: 'person-falling-burst',
        component: 'russian-officer-losses',
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
        fa: 'fire-flame-simple',
    },
    {
        t: 'Weapons Range',
        file: 'missile.png',
    },
];

export default items;