// Set up audio objects for the main ringing_room script

// the towerbell audio object
export const tower = new Howl({
  src: [
    "static/audio/tower.ogg",
    "static/audio/tower.m4a",
    "static/audio/tower.mp3",
    "static/audio/tower.ac3"
  ],
  volume: 0.2,
  sprite: {
    "0": [
      0,
      997.7551020408163
    ],
    "1": [
      2000,
      998.6167800453516
    ],
    "2": [
      4000,
      1010.9523809523813
    ],
    "2sharp": [
      7000,
      998.3673469387755
    ],
    "3": [
      9000,
      1000.5442176870752
    ],
    "4": [
      12000,
      997.0294784580495
    ],
    "5": [
      14000,
      1018.4580498866218
    ],
    "6": [
      17000,
      1010.3174603174593
    ],
    "7": [
      20000,
      1007.0975056689342
    ],
    "8": [
      23000,
      1010.9523809523821
    ],
    "9": [
      26000,
      1010.9523809523821
    ],
    "E": [
      29000,
      1003.0385487528335
    ],
    "T": [
      32000,
      1011.247165532879
    ],
    "Bob": [
      35000,
      396.84807256235644
    ],
    "Single": [
      37000,
      582.8798185941012
    ],
    "Go": [
      39000,
      1009.7732426303878
    ],
    "That's all": [
      42000,
      654.6938775510184
    ],
    "Stand next": [
      44000,
      1228.9342403628111
    ]
  }
}
);

// the handbell audio object
export const hand = new Howl({
  src: [
    "static/audio/hand.ogg",
    "static/audio/hand.m4a",
    "static/audio/hand.mp3",
    "static/audio/hand.ac3"
  ],
  volume: 0.2,
  sprite: {
    "1": [
      0,
      1519.8866213151928
    ],
    "2sharp": [
      3000,
      1495.3514739229022
    ],
    "3": [
      6000,
      1520.3854875283448
    ],
    "4": [
      9000,
      1519.841269841269
    ],
    "5": [
      12000,
      1495.419501133787
    ],
    "6": [
      15000,
      1507.5736961451262
    ],
    "7": [
      18000,
      1507.7324263038533
    ],
    "8": [
      21000,
      1513.6961451247153
    ],
    "Bob": [
      24000,
      396.84807256236
    ],
    "Single": [
      26000,
      582.8798185941047
    ],
    "Go": [
      28000,
      1009.7732426303843
    ],
    "That's all": [
      31000,
      654.6938775510221
    ],
    "Stand next": [
      33000,
      1228.9342403628111
    ]
  }
}
  
);

// What sounds do you play on different numbers of bells? (Allows for ringing the front 8)
export const bell_mappings = {
                         4: ['5','6','7','8'],
                         6: ['3','4','5','6','7','8'],
					     8: ['1','2sharp','3','4','5','6','7','8'],
						10: ['3','4','5','6','7','8','9','0','E','T'],
						12: ['1','2','3','4','5','6','7','8','9','0','E','T']
					  }
