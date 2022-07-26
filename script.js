const minerals = [
  { gem: "Achroite" },
  { gem: "Agate" },
  { gem: "Akoya Pearl" },
  { gem: "Alexandrite" },
  { gem: "Almandine Garnet" },
  { gem: "Amazonite" },
  { gem: "Amber" },
  { gem: "Amethyst" },
  { gem: "Ametrine" },
  { gem: "Ammolite" },
  { gem: "Anatase" },
  { gem: "Andalusite" },
  { gem: "Andesine" },
  { gem: "Andradite Garnet" },
  { gem: "Apatite" },
  { gem: "Aquamarine" },
  { gem: "Arkansas stone" },
  { gem: "Axinite" },
  { gem: "Azurite" },
  { gem: "Barite" },
  { gem: "Beryl" },
  { gem: "Benitoite" },
  { gem: "Bi-color tourmaline" },
  { gem: "Bixbite" },
  { gem: "Bloodstone" },
  { gem: "Bowenite" },
  { gem: "Calcite" },
  { gem: "Californite" },
  { gem: "Carnelian" },
  { gem: "Chalcedony" },
  { gem: "Chalybite" },
  { gem: "Charoite" },
  { gem: "Chrome Diopside" },
  { gem: "Chrome sphene" },
  { gem: "Chrome Tourmaline" },
  { gem: "Chrysoberyl" },
  { gem: "Chrysocolla" },
  { gem: "Chrysoprase" },
  { gem: "Citrine" },
  { gem: "Clinohumite" },
  { gem: "Conch pearl" },
  { gem: "Copal" },
  { gem: "Coral" },
  { gem: "Corundum" },
  { gem: "Cubic zirconia (synthetic)" },
  { gem: "Cyprine" },
  { gem: "Danburite" },
  { gem: "Datolite" },
  { gem: "Demantoid Garnet" },
  { gem: "Diamond" },
  { gem: "Diaspore" },
  { gem: "Diopside" },
  { gem: "Dioptase" },
  { gem: "Dravite Tourmaline" },
  { gem: "Ekanite" },
  { gem: "Emerald" },
  { gem: "Emerald-Vanadium" },
  { gem: "Enstatite" },
  { gem: "Feldspar" },
  { gem: "Fluorite" },
  { gem: "Freshwater pearl" },
  { gem: "Forsterite (synthetic)" },
  { gem: "Garnet" },
  { gem: "Goldstone" },
  { gem: "Goshenite" },
  { gem: "Green Beryl" },
  { gem: "Greenovite" },
  { gem: "Grossular" },
  { gem: "Hackmanite" },
  { gem: "Hauyne" },
  { gem: "Heliodor" },
  { gem: "Hiddenite" },
  { gem: "Hydrogrossular Garnet" },
  { gem: "Idocrase" },
  { gem: "Inclusion quartz" },
  { gem: "Indicolite Tourmaline" },
  { gem: "Iolite" },
  { gem: "Jade" },
  { gem: "Jadeite" },
  { gem: "Jasper" },
  { gem: "Kornerupine" },
  { gem: "Kunzite" },
  { gem: "Kyanite" },
  { gem: "Labradorite" },
  { gem: "Lapiz Lazuli" },
  { gem: "Larimar" },
  { gem: "Liddicoatite Tourmaline" },
  { gem: "Malachite" },
  { gem: "Maw-sit-sit" },
  { gem: "Maxixe Beryl" },
  { gem: "Melo melo pearl" },
  { gem: "Moissanite (synthetic)" },
  { gem: "Moonstone" },
  { gem: "Morganite" },
  { gem: "Nephrite" },
  { gem: "Onyx" },
  { gem: "Opal" },
  { gem: "Paraiba type Tourmaline" },
  { gem: "Pearl" },
  { gem: "Pectolite" },
  { gem: "Peridot" },
  { gem: "Phenakite" },
  { gem: "Poudretteite" },
  { gem: "Praseolite (cordierite)" },
  { gem: "Prasiolite (green quartz)" },
  { gem: "Prasolite (chlorine group)" },
  { gem: "Pyrope Garnet" },
  { gem: "Quahog" },
  { gem: "Quartz" },
  { gem: "Reisling Beryl" },
  { gem: "Rhodochrosite" },
  { gem: "Rock Crystal" },
  { gem: "Rose Quartz" },
  { gem: "Rubellite Tourmaline" },
  { gem: "Ruby" },
  { gem: "Sapphire" },
  { gem: "Sard" },
  { gem: "Sardonyx" },
  { gem: "Scapolite" },
  { gem: "Schorl Tourmaline" },
  { gem: "Sea of Cortez pearl" },
  { gem: "Siderite" },
  { gem: "Sodalite" },
  { gem: "South Sea Pearl" },
  { gem: "Smoky Quartz" },
  { gem: "Spectrolite" },
  { gem: "Spessartite Garnet" },
  { gem: "Sphalerite" },
  { gem: "Sphene" },
  { gem: "Spinel" },
  { gem: "Spodumene" },
  { gem: "Sunstone" },
  { gem: "Tanzanite" },
  { gem: "Tashmarine Diopside" },
  { gem: "Tigereye" },
  { gem: "Titanite" },
  { gem: "Thulite" },
  { gem: "Topaz" },
  { gem: "Tourmaline" },
  { gem: "Tri-color Tourmaline" },
  { gem: "True Blue Beryl" },
  { gem: "Tsavorite Garnet" },
  { gem: "Turquoise" },
  { gem: "Uvarovite" },
  { gem: "Vanadium Beryl" },
  { gem: "Verdite Tourmaline" },
  { gem: "Vesuvianit" },
  { gem: "Watermelon Tourmaline" },
  { gem: "Willemite" },
  { gem: "Zincite" },
  { gem: "Zircon" },
  { gem: "Zoisite" },
  { gem: "Zultanite" },
];

// make a return funtion thjat returns the matching word from the array
function checkarray() {
  let searchinput = document.getElementById("searchinput");
  let doc = document.getElementById("answer");
  // i am calling the textg in the input
  for (let i = 0; i < minerals.length; i++) {
    // this is a for loop, looping the array
    if (searchinput.value == minerals[i].gem) {
      // if the search has the same text as the array
      doc.innerText = searchinput.value + " was found in the array";
      console.log(searchinput.value + " was found in the array");
      // then console.log whats in the searchbar
    }
  }
}
// Have to search through lowercase and uppercase
