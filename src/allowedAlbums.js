const allowedAlbums = {
  "base gallery": "6Hpyr",
  // 2022
  "Pascal, Flo, and Timbits visit Halifax": "ydSWlZR",
  "Ian and Diana's cottage in New Brunswick": "DYKOfBE",
  "Steve and Kristen visit Halifax": "8Riq4uL",
  "Okta IAM Design Offsite": "Nd8wDwz",
  "Okta IAM Design Offsite - Auth0 photos": "bVZ8QjQ",
  "Bryan and Molly visit Halifax": "FO8aglb",
  "Okta Assemble 23 in Mexico": "asGTayC",
  "Big January Snowfall": "TS0tmu9",
  "High Head Trail in Prospect, NS": "8Mu0Nv2",
  "Halifax Oyster Festival": "oC2t9AZ",
  "Sailing and Hot Pot": "JFfL22Y",
  "Halloween 2022": "IDhZbAb",
  "Hurricane Fiona": "ThpMbQ5",
  "Mark McCabe visits Halifax": "aT31Iye",
  "Kanata Day 2022 in Halifax": "gFI8IPz",
  "Peggy's Cove and Robin's trip to Halifax": "tGpBKEp",
  "Dartmouth Cherry Blossoms": "20eRlF2",
  "Moving to Halifax": "OxhevKZ",
  "Ma Goodbye": "DQVKOAV",
  "Lily Turns Two": "9fmi2GI",
  // 2021
  "James and Krishna": "g0gQ2NO",
  "Weekend at Phil and Nikki's": "2VyHuWv",
  "Algonquin Camping 2021": "xy0BP18",
  "Shelbie, Ryan, Holly, and Friends": "k8zCJWo",
  "Scouting Halifax August 2021": "MLKSUlc",
  "Bruce Trail - Family Day": "fBTCeKF",
  // 2020
  "Mono Cliffs Park": "wTrxgrE",
  "Lake Superior 2020": "exzH2Zt",
  "Lily - 2020/09/26": "KIdnHx0",
  Essaouira: "xpQ6wBg",
  Casablanca: "RH6bfwp",
  Tangier: "JqqzFEE",
  Chefchouen: "tJkhQXP",
  Fes: "6nynvVU",
  "Desert Tour": "KiyHBDY",
  Marrakesh: "3orEGgh",
  "Lilith Robin Wylie Freake": "J5lWN33",
  "Pivotal X Curling": "o33snyp",
  "Jordyn's 10th Birthday": "IQQ0aRY",
  "Concourse at Kinka Izakaya": "aUCl8WH",
  // 2019
  "Pereira Christmas 2019": "rJzFm6W",
  "Julia & Aodhan's Baby Shower": "LWmkCoX",
  "Connell's 16th Birthday Party": "5h8i28I",
  "Spring One Platform 2019": "u8o2fDA",
  //   "Dad's 75th Birthday Party": "7OkSeFo",
  "Tobermory and Cyprus Lake Camping": "s23So5d",
  "Pivotal Beach Day 2019": "5Fm0PDU",
  "Pivotal Island 2019": "0877UpO",
  "Canada Day 2019": "Q7Q6wUd",
  "Montreal w Shelbie and Ryan": "HiGJTLG",
  "Desjardins Montreal": "BZufJMj",
  "San Francisco 2019": "9arTNBF",
  "CF Summit Philadelphia 2019": "kCTI9nN",
  "Pivotal at Archer's Arena": "NeS70DP",
  "Shelbie and Ryan's birthday": "rJOxY5X",
  "Jordyn's 9th Birthday 2019": "0ve7Az0",
  // 2018
  "Pereira Christmas 2018": "IhQzB2T",
  "Curaçao 2018": "3IxD68y",
  "Justin's Birthday 2018": "CZYNm",
  "Yasmin's Baby Mikael": "MqfQ2Bm",
  "Julia and Aodhan's Wedding": "dBNUoTc",
  "Fake Boos, Halloween 2018": "OmwE35S",
  //   "Canada's Wonderland": "uo9IRDN",
  "Matthew and Alex's Wedding BW": "5cl2AOr",
  "Matthew and Alex's Wedding": "GxGFWK6",
  "Julia and Aodhan": "snobRBm",
  "Cottaging 2018-08-03": "EjfU9R5",
  "Statflo Barbecue": "jTGEisX",
  "Wells Hill Park": "6LzWWez",
  "Lizfest 2018": "gJzWn",
  "Trinity Bellwoods with Friendsday friends": "lBB2fBz",
  "AB BC Road Trip 2018": "zisKD4A",
  "Wes and Morgan and the kids at Trinity Bellwoods": "Z7eHCbx",
  "Statflo Product Offsite 2018": "pTHw6ZO",
  "Friendsday Farewell Barbecue": "WTO49bj",
  "Pereira Easter 2018": "SQ3UDDm",
  "Mom's Birthday 2018": "Dq1xiRO",
  "Statflo Potluck 2018": "13FJNN3",
  "Augusta and Olive'": "fC54L",
  "iQmetrix Winnipeg 2018": "CUPtE",
  "Delayed New Years at Shelbie and Ryan's": "OMSHY",
  // 2017
  "Pereira Christmas 2017": "mUg4z",
  "Jordyn's 8th Birthday 2018": "3b7oE",
  "Phil's Super Soft Birthday": "GtGmk",
  "Statflo at Rec Room": "Mayck",
  "Darya's Statflo Goodbye": "lK4Tll3",
  "Justin's birthday 2017": "CZYNm",
  "Games night at Jordan and Nicole's": "IlYgP",
  "Ottawa New Years 2018": "1ztbC",
  "Statflo at BATL": "4DScr",
  "Halloween at Wes and Morgan's 2017": "Qcxgb",
  "Halloween 2017": "bpa5q",
  "Iceland 2017": "RZcF4",
  "Belleville 2017": "nuxA0",
  "Robin's Birthday 2017": "0K45k",
  "Celeste at Trillium Park": "XMEfZfv",
  "The Fix Ice Cream Shop": "oKXXB",
  "Statflo Barbecue 2017": "rBfPF",
  "Wes Kait Chris Jasper Augusta Jacob": "OHio2",
  "August Long Weekend 2017": "IGnD1",
  "Canada Day with Jess and Alex": "WZzKm",
  "Pie day at Statflo": "ang7R",
  "St Lucia": "mlQaJ",
  // 2016
  "Pereira Christmas 2016": "3pP6c",
  "Statflo Christmas Party 2016": "01B2c",
  "Halloween 2016 at Wes and Morgan's": "eVOZf",
  "Spook Me Like One of Your French Girls (Halloween 2016)": "hjNvg",
  "Statflo at Mengrai": "SqJ0r",
  "August Long Weekend at the Cottage 2016": "AlXYh",
  "Labour Day 2016 at the Cottage": "5JQVZ",
  "Dad's Birthday 2016-09-25": "DDYYq",
  "Statflo Goodbye Lunch": "VZJjm",
  "Friendsday Trinity Bellwoods": "Lk2aW",
  "Jasper's 2nd Birthday": "W14q32f",
  "Julia's Cats": "q5uqT",
  "OneEleven Boat Cruise": "P2ysk",
  "Jasper and Olive": "huRdJ",
  "Toronto Island with Celeste": "A0d80",
  "Barbecue at Brian and Melody's": "rOM63",
  "Celeste's Grad Party": "q98ao",
  "Owen at Statflo": "g6uxa",
  "Wine Tasting trip with Phil and Nikky": "HEY71",
  "Matt and Celeste at Dave's Birthday": "7g9Rv",
  "Holiday Pictures": "as2L5",
  // 2015
  "Kait and Chris' wedding": "crbpP",
  "Flea Market": "UmxwY",
  "Labour day at Hanlan's Point": "DNyjC",
  "Sandbanks with Nikky and Phil": "l5ON6",
  "Austra and Tribe Called Red": "c44Dh",
  "Barbecue at Wes and Morgan's": "PfzzJ",
  "Celeste and Matthew go to Paris": "SuwHL",
  "Belleville Trip": "4p5Kk",
  "Toronto Global Game Jam 2015": "8OXhc",
  "Jasper's first birthday 2015": "fFb08",
  "Christina and Laura's birthday": "XHQ5ldt",
  "Shelbie's 30th Birthday": "zNnsrq2",
  // 2014
  "Badlands with Nicole": "00gld",
  "Innisfil 2014": "VXBAU",
  "Robin's Dirty 30": "WrdQRNe",
  "Matthew Manna's 30th Birthday": "JHJOx8y",
  "Friendsday Go Karting": "eBf7k",
  "Friendsday Ribsday": "rgEYp",
  "Pancake Party at Nicole's": "TPJD5",
  //   "Cottage 2014 Connell and Bray": "OVK35",
  // 2013
  "Nicole's 30th Birthday": "1Qi4pp7",
  "Sohn at the Horseshoe": "XPivzx7",
  "Flip Cup Friday": "3F5AU",
  "Festive Friendsday": "Byn7D",
  "Board Games at Wes and Morgan's": "jofpF",
  "Shelbie and Ryan's Birthday Bash": "gpZyA",
  "Jasper's baby photos": "wV2vZ",
  "Innisfil 2013": "hmwlt",
  "Nicole's Farewell to the 20s": "iVqqKp7",
  "Wes and Morgan's baby shower": "asLHt",
  "OCAD beach party": "uFi37",
  "Dinner at Wes and Morgan's": "c6C6p",
  "Melody and Brian's barbecue": "EK1TV",
  "Barbecue at Morgan and Wesley's - 2013-05-29": "5gxSY",
  "Rooftop Barbecue at Brian and Melody's": "kDk0V",
  "Cadillacs and Cadavers at Stones Place": "vDwNE",
  "May 2013 Snapshots": "9A5me",
  "Easter 2013": "rwuzqHi",
"Bethlehem, Jerusalem, March 2013": "TBkrw8l",
  "Bethlehem, March 2013": "AeIioRt",
  "Nazareth, Cana, Mount of the Precipice, River Jordan, March 2013": "K6eHz6V",
  "Tiberius, Lake Galilee, March 2013": "xzyPgGK",
  "Board Games, Jan 2013": "1nV7PSY",
  "Jordyn's Birthday 2013": "YVIiTK5",
  "Hockey in Whitby, Jan 2013": "GwF84nR",
  // 2012
  "New Year's 2012": "evdD52D",
  "Pereira Christmas 2012": "VHdjbvG",
  "Matthew's 29th Birthday, 2012": "m3S7UER",
  "Connell's 9th Birthday October 2012": "QrKxe5X",
  "Thanksgiving 2012": "ok6vNEX",
  "Brayden's 6th Birthday August 2012": "Pkl3CjM",
  "Uncle Peter in England 2012": "reixDKb",
  "Grandma's 90th Birthday 2012": "TkFtrwu",
  "Mother's Day 2012": "PHhQ4kQ",
  "Easter 2012 - Dad's Pictures": "TBoZPjM",
  "Easter 2012": "tOeYwuW",
  "Mom's Birthday 2012": "8jqTIj9",
  "Mom's 65th Birthday 2012": "ovgpW8d",
  // 2011
  "Christmas 2011": "JVMq9kN",
  "Jessica's homecoming - September 2011": "MVo94Hq",
  "Paella Party 2011": "nsEuodJ",
  "Connell's 8th Birhday 2011": "vqp9eKF",
  "Uncle Peter's Birthday 2011": "yNuf9mg",
  "Dad's birthday 2011": "yfprHjZ",
  "Labour Day 2011": "OVZqwO3",
  "Angela and Jonathan's Wedding 2011": "kBRts39",
  "Angela and Jonathan pre-Wedding 2011": "xfVTnHL",
  "Quick visit to Jenn's - August 2011": "xbxS2QY",
  "Toronto Island Picnic": "0y9SVpK",
  "July Long Weekend 2011": "H9kksGn",
  "Father's Day 2011": "q5RWzyj",
  "Easter 2011": "9CxaODO",
  "Connell's First Communion": "NEPqulc",
  "Mom's Birthday 2011": "jScCpJQ",
  "Pizza Party 2011": "sPUyl6L",
  "Jordyn's 1st Birthday 2011": "zkyKidt",
  // 2010
  "Steve's Thailand Trip": "viBQGRm",
  "Jessica's Going Away Party": "SSUzpZa",
  "Christmas in London 2010": "WDlmaEC",
  "Jessica and Alex's Wedding": "vofedle",
  "Thanksgiving 2010": "c5aAU4I",
  "Samson and Delilah Katz": "toCaXNl",
  "Grandma's 85th Birthday 2": "aNfhEgq",
  "Grandma's Birthday 2010": "NWKKlFE",
  "Cottage September 3 2010": "4XgFGlh",
  "Dad's Birthday September 2010": "mU0plaL",
  "Steve's Birthday 2010": "69SxDxQ",
  "Easter 2010": "nmmcpLF",
  "Mom's Birthday 6x8 Portraits": "q3PQ83s",
  "Jordyn at 1 Month": "EZMRp4h",
  // 2008
  "Grandma's 85th Birthday": "hYG5cJd",
  "Connell and Brayden Cellphone Pics 2008": "rFSfHCE",
  "Brayden's Christening": "4QZcP9G",
  // 2007
  "July 1st Cottage Weekend": "RpZ1wgY",
  // 2006
  "Trampolines at the Cottage 2006": "72m26nP",
  "Steve's 25th Birthday 2006": "OqlpRiS",
  "Steve's 25th Birthday 2006 II": "XKkWNXV",
  "Connell's 5th Birthday": "UV3d38o",
  // 2003
  "Dominican Republic 2003": "uKtEcMZ",
  "Jennifer and Kevin's Wedding": "3WUHhg6",
  // Unsorted
  "Dave's Birthday": "55wWHSO",
  "Ryan's Singalong Birthday": "uDBtK1B",
  "Shelbie Vermette's Birthday at Hacienda": "cUO1CjQ",
  "Halloween (not a thinly veiled occult gathering)": "42KaGvj",
  "Jasper Tocker's 2nd Birthday": "lOuDr1w",
};

export default allowedAlbums;
