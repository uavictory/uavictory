import { faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
/*
    arms: {
      smallArms:
      atgm
      tanks: ``,
      apv: ``,
      artillery: ``,
      mlrs: ``,
      aa: ``,
      planes: ``,
      helicoptors: ``,
      uav: ``,
      vehicles: ``,
      other: ``,
    },
    */
const arms = [
  {
    c: 'austrailia',
    val: 200,
    arms: {
      smallArms: true,
      atgm: ``,
      manpad: ``,
      tanks: ``,
      apv: ` M113 APC, Bushmaster IMV`,
      artillery: ``,
      mlrs: ``,
      aa: ``,
      planes: ``,
      helicoptors: ``,
      uav: ``,
      vehicles: ``,
      missiles: ``,
      other: ``,
    },
  },
   
  {
    c: 'belgium',
    val: 0,
    arms: {
      smallArms: `5000 automatic rifles/machine guns`,
      atgm: `200 (type unknown)`,
    },
  },
  {
    c: 'canada',
    val: 486,
    arms: {
      smallArms: `machine guns, pistols, carbines, sniper rifles, 7500 hand grenades`,
      ammunition: `20,000 155mm artillery shells, `,
      atgm: ``,
      manpad: ``,
      tanks: ``,
      apv: ` M113 APC, Bushmaster IMV`,
      artillery: `M777 howitzers`,
      mlrs: ``,
      aa: ``,
      planes: ``,
      helicoptors: ``,
      uav: ``,
      vehicles: ``,
      missiles: ``,
      other: `high-res imagery`,
    },
  },
  {
    c: 'croatia',
    val: 17,
    arms: {
      smallArms: `rifles, machine guns`,
      other: `protective equipment`,
    },
  },
  {
    c: 'czech republic',
    val: 9.4,
    arms: {
      smallArms: `3020 light machine guns, 7,132 assault rifles, 70 sub-machineguns, sniper rifles`,
      mortars: `4000`,
      ammunition: `1.1 mil bullets,`,
      atgm: ``,
      manpad: `160 Manpads (probably Strela-2)`,
      tanks: `T-72s`,
      apv: `IFVs`,
      artillery: `M777 howitzers`,
      mlrs: ``,
      aa: ``,
      planes: ``,
      helicoptors: `Mi-24 attack helicopters`,
      uav: ``,
      vehicles: ``,
      missiles: `rocket systems`,
      other: `tactical gloves`,
    },
  },
  {
    c: 'denmark',
    val: 0,
    arms: {
      smallArms: `rifles, machine guns`,
      other: `protective equipment`,
      missiles: `Harpoon anti-ship launchers and missiles`,
      atgm: `2700`,
      missiles: `300 Stingers`,
      other: 'protective vests',
    },
  },
  {
    c: 'estonia',
    val: 0,
    arms: {
      artillery: `9 howitzers`,
      atgm: `Javelins`,
    },
  },
  {
    c: 'European Union',
    val: 2150,
    arms: {
      other: `funding for military supplies`
    },
  },
  {
    c: 'finland',
    val: 0,
    arms: {
      smallArms: `2500 assault rifles`,
      ammunition: `150k cartridges`,
      atgm: `1500 single-shot ATGM`,
      other: `combat rations`,
    },
  },
  {
    c: 'france',
    val: 0,
    arms: {
      artillery: `CAESAR howitzers`,
      missiles: `MILAN anti-tank missile systems`,
      other: `defensive equipment`,
    },
  },
  {
    c: 'germany',
    val: 0,
    arms: {
      aa: `50 Cheetah systems`,
      apv: `56 PbV-501 IFVs`,
      atgm: `1000`,
      manpad: `500 Stingers`,
    },
  },
  {
    c: 'Greece',
    val: 0,
    arms: {
      smallArms: `Kalashnikov rifles`,
      ammunition: true,
      missiles: `portable rocket launchers`
    },
  },
  {
    c: 'Ireland',
    val: 0,
    arms: {
      other: `200 units body armor, medical supplies, fuel, other non-lethal`
    },
  },
  {
    c: 'Italy',
    val: 0,
    arms: {
      atgm: true,
      manpads: `Stringers`,
      smallArms: `heavy/light machine guns`,
      other: `counter-IED systems`
    },
    note: `awaiting Parlaimentary approval`,
  },
  {
    c: 'Japan',
    val: 0,
    arms: {
      other: `bulletproof vests, helmets, other non-lethal`
    },
  },
  {
    c: 'Latvia',
    val: 0,
    arms: {
      manpads: `Stringers`,
    },
  },
  {
    c: 'Lithuania',
    val: 0,
    arms: {
      manpads: `Stringers`,
      ammunition: true,
      uav: `crowd-sourced Bayraktar!`
    },
  },
  {
    c: 'Luxembourg',
    val: 0,
    arms: {
      atgm:  `100 NLAW`,
      vehicles: `Jeep Wrangler 4x4s`,
      other: `15 military tents, other non-lethal`,
    },
  },
  {
    c: 'Netherlands',
    val: 0,
    arms: {
      smallArms: `100 sniper rifles, 400 RPG`,
      ammunition: `30k rounds`,
      missiles: `200 Stingers`,
      other: `3k helmets, 2k fragmentation vests/body armor`,
    },
  },
  {
    c: 'Norther Macedonia',
    val: 0,
    arms: {
      other: `unspecified`,
    },
  },
  {
    c: 'Norway',
    val: 0,
    arms: {
      atgm: `4000`,
      aa: `100 Mistral air defense missiles`,
      other: `helmets, bulletproof vests, other protection`,
    },
  },
  {
    c: 'poland',
    val: 9.4,
    arms: {
      aircraft: `MiG-29 spare parts and armaments`,
      smallArms: ``,
      mortars: `light mortars`,
      ammunition: `thousands of rounds, artillery sheets`,
      atgm: ``,
      manpad: `Piorin systems and munitions`,
      tanks: `200+ T-72s`,
      apv: ``,
      artillery: ``,
      mlrs: ``,
      aa: `air defense systems`,
      planes: ``,
      helicoptors: ``,
      uav: `recon drones`,
      vehicles: ``,
      missiles: ``,
      other: ``,
    },
  },
  {
    c: 'portugal',
    val: 0,
    arms: {
      smallArms: `grenades, G3 automatic rifles`,
      ammunition: true,
      other: `other non-lethal`
    },
  },
  {
    c: 'romania',
    val: 3,
    arms: {
      ammunition: true,
      other: `bulletproof vests, helmets, medical supplies`
    },
  },
  {
    c: 'slovakia',
    arms: {
      aa: `S-300 air defense systems`
    },
  },
  {
    c: 'slovenia',
    arms: {
      smallArms: `Kalashnikovs`,
      ammunition: true,
      other: `helmets`,
    },
  },
  {
    c: 'spain',
    arms: {
      smallArms: `light machine guns`,
      ammunition: `700k rifle/machine gun rounds`,
      atgm: `1370 anti-tank grenade launchers`,
      other: `medical supplies, defensive equipment`,
    },
  },
  {
    c: 'sweden',
    arms: {
      atgm: `10k AT4 anti-tank weapons`,
      other: `helmets and body shields`,
    },
  },
  {
    c: 'turkey',
    arms: {
      uav: `co-production of Bayraktar TB2 armed drones`,
    },
  },
  {
    c: 'United Kingdom',
    val: 1000,
    arms: {
      aa: `Stormer anti-aircraft vehicles, Starstreak air defense systems`,
      atgm: `10k NLAWS and Javelins`,
      apc: `Saxon armored cars`,
      missiles: `Starstreak`,
      uav: `heavy lift drones`,
    },
  },
  {
    /* source: https://www.defense.gov/News/Releases/Release/Article/3027295/fact-sheet-on-us-security-assistance-for-ukraine/ */
    c: 'United States',
    val: 44000,
    asof: `2022-05-10`,
    arms: {
      smallArms: `7000+ small arms, M18A1 Claymore anti-personnel mines`,
      ammunition: `200k 155mm artillery rounds, 50 mil rounds, C-4 explosives`,
      artillery: `90 155mm howitzers (with 72 tow vehicles), laser-guided rocket systems`,
      apc: `100s of high mobility vehicles, 200 M113 APC`,
      atgm: `5500 Javelins`,
      helicoptors: `16 Mi-17s`,
      aa: ``,
      manpads: `1400 Stingers`,
      missiles: ``,
      radar: `17 counter-artillery, 4 coounter-mortar, 2 air surveillance`,
      uav: `700+ Switchblade drones, 121 Phoenix Ghost drones, Puma drones, 
            coastal defense drones`,
      other: `electric jamming equipment, 75k sets body armor/helmets, demolition equipment, tactical secure communication systems,
            night vision devices, thermal imagery systems, optics and laser rangefinders,
            commerical satellite imagery services, explosive ordnance disposal protective
            gear, chem/bio/radiological/nuclear protectice equipment, med supplies, field equipment and spare parts`
    },
    note: `Amount includes $40 billion for lend-lease`,
  },
]