const allowedAlbums = {
    "base gallery": '6Hpyr',
    //
    "Lilith Robin Wylie Freake": 'J5lWN33',
    "Pivotal X Curling": 'o33snyp',
    "Julia & Aodhan's Baby Shower": 'LWmkCoX',
    "Connell's 16th Birthday Party": '5h8i28I',
    "Spring One Platform 2019": 'u8o2fDA',
    "Dad's 75th Birthday Party": '7OkSeFo',
    "Tobermory and Cyprus Lake Camping": 's23So5d',
    "Pivotal Beach Day 2019": '5Fm0PDU',
    "Pivotal Island 2019": '0877UpO',
    "Canada Day 2019": 'Q7Q6wUd',
    "Desjardins Montreal": 'BZufJMj',
    "San Francisco 2019": '9arTNBF',
    "CF Summit Philadelphia 2019": 'kCTI9nN',
    "Jordyn's 9th Birthday 2019": '0ve7Az0',
    "Pereira Christmas 2018": 'IhQzB2T',
    "Curaçao 2018": '3IxD68y',
    "Justin's Birthday 2018": 'CZYNm', 
    "Yasmin's Baby Mikael": 'MqfQ2Bm',
    "Julia and Aodhan's Wedding": 'dBNUoTc',
    "Fake Boos, Halloween 2018": 'OmwE35S',
    "Canada's Wonderland": 'uo9IRDN',
    "Matthew and Alex's Wedding BW": '5cl2AOr',
    "Matthew and Alex's Wedding": 'GxGFWK6',
    "Julia and Aodhan": 'snobRBm',
    "Cottaging 2018-08-03": 'EjfU9R5',
    "Statflo Barbecue": 'jTGEisX',
    "Wells Hill Park": '6LzWWez',
    "Trinity Bellwoods with Friendsday friends": 'lBB2fBz',
    "AB BC Road Trip 2018": 'zisKD4A',
    "Mom's Birthday 2018": 'Dq1xiRO',
    "Wes and Morgan and the kids at Trinity Bellwoods": 'Z7eHCbx',
    "Statflo Product Offsite 2018": 'pTHw6ZO',
    "Friendsday Farewell Barbecue": 'WTO49bj',
    "Pereira Easter 2018": 'SQ3UDDm',
    "Statflo Potluck 2018": '13FJNN3',
    "Augusta and Olive'": 'fC54L',
    "Lizfest 2018": 'gJzWn',
    "Delayed New Years at Shelbie and Ryan's": 'OMSHY',
    "Pereira Christmas 2017": 'mUg4z',
    "Jordyn's 8th Birthday 2018": '3b7oE',
    "Phil's Super Soft Birthday": 'GtGmk',
    "Statflo at Rec Room": 'Mayck',
    "iQmetrix Winnipeg 2018": 'CUPtE',
    "Justin's birthday 2017": 'CZYNm',
    "Games night at Jordan and Nicole's": 'IlYgP',
    "Ottawa New Years 2018": '1ztbC',
    "Statflo at BATL": '4DScr',
    "Halloween at Wes and Morgan's 2017": 'Qcxgb',
    "Halloween 2017": 'bpa5q',
    "Iceland 2017": 'RZcF4',
    "Belleville 2017": 'nuxA0',
    "Robin's Birthday 2017": '0K45k',
    "Celeste at Trillium Park": 'XMEfZfv',
    "The Fix Ice Cream Shop": 'oKXXB',
    "Statflo Barbecue 2017": 'rBfPF',
    "Wes Kait Chris Jasper Augusta Jacob": 'OHio2',
    "August Long Weekend 2017": 'IGnD1',
    "Canada Day with Jess and Alex": 'WZzKm',
    "Pie day at Statflo": 'ang7R',
    "St Lucia": 'mlQaJ',
    "Pereira Christmas 2016": '3pP6c',
    "Statflo Christmas Party 2016": '01B2c',
    "Halloween 2016 at Wes and Morgan's": 'eVOZf',
    "Spook Me Like One of Your French Girls (Halloween 2016)": 'hjNvg',
    "Statflo at Mengrai": 'SqJ0r',
    "August Long Weekend at the Cottage 2016": 'AlXYh',
    "Labour Day 2016 at the Cottage": '5JQVZ',
    "Dad's Birthday 2016-09-25": 'DDYYq',
    "Statflo Goodbye Lunch": 'VZJjm',
    "Friendsday Trinity Bellwoods": 'Lk2aW',
    "Julia's Cats": 'q5uqT',
    "OneEleven Boat Cruise": 'P2ysk',
    "Jasper and Olive": 'huRdJ',
    "Toronto Island with Celeste": 'A0d80',
    "Barbecue at Brian and Melody's": 'rOM63',
    "Celeste's Grad Party": 'q98ao',
    "Owen at Statflo": 'g6uxa',
    "Wine Tasting trip with Phil and Nikky": 'HEY71',
    "Matt and Celeste at Dave's Birthday": '7g9Rv',
    "Holiday Pictures": 'as2L5',
    "Kait and Chris' wedding": 'crbpP',
    "Flea Market": 'UmxwY',
    "Labour day at Hanlan's Point": 'DNyjC',
    "Sandbanks with Nikky and Phil": 'l5ON6',
    "Austra and Tribe Called Red": 'c44Dh',
    "Barbecue at Wes and Morgan's": 'PfzzJ',
    "Celeste and Matthew go to Paris": 'SuwHL',
    "Belleville Trip": '4p5Kk',
    "Toronto Global Game Jam 2015": '8OXhc',
    "Jasper's first birthday 2015": 'fFb08',
    "Shelbie and Ryan's Birthday 2015": 'x88HI',
    "Badlands with Nicole": '00gld',
    "Innisfil 2014": 'VXBAU',
    "Friendsday Go Karting": 'eBf7k',
    "Friendsday Ribsday": 'rgEYp',
    "Pancake Party at Nicole's": 'TPJD5',
    "Cottage 2014 Connell and Bray": 'OVK35',
    "Sohn at the Horseshoe": 'XPivzx7',
    "Flip Cup Friday": '3F5AU',
    "Festive Friendsday": 'Byn7D',
    "Board Games at Wes and Morgan's": 'jofpF',
    "Shelbie and Ryan's Birthday Bash": 'gpZyA',
    "Jasper's baby photos": 'wV2vZ',
    "Innisfil 2013": 'hmwlt',
    "Wes and Morgan's baby shower": 'asLHt',
    "OCAD beach party": 'uFi37',
    "Dinner at Wes and Morgan's": 'c6C6p',
    "Melody and Brian's barbecue": 'EK1TV',
    "Barbecue at Morgan and Wesley's - 2013-05-29": '5gxSY',
    "Rooftop Barbecue at Brian and Melody's": 'kDk0V',
    "Cadillacs and Cadavers at Stones Place": 'vDwNE',
    "May 2013 Snapshots": '9A5me',
    "Steve's Thailand Trip": 'viBQGRm',
};

export default allowedAlbums;
