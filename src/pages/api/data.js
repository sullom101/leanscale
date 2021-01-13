// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.send({
    footerMenu: {
      data: [
        {
          title: "LA3EB",
          menu: [
            {
              name: "About Us",
              route: "/"
            },
            {
              name: "Careers",
              route: "/"
            },
            {
              name: "Newsroom",
              route: "/"
            },
            {
              name: "Contact",
              route: "/"
            }
          ]
        },
        {
          title: "HELP",
          menu: [
            {
              name: "Support Hub",
              route: "/"
            },
            {
              name: "How to activate Games",
              route: "/"
            },
            {
              name: "Terms & Conditions",
              route: "/"
            },
            {
              name: "Privacy & Cookies",
              route: "/"
            },
            {
              name: "Returns & Refunds",
              route: "/"
            }
          ]
        },
        {
          title: "BUSINESS",
          menu: [
            {
              name: "Business Center",
              route: "/"
            },
            {
              name: "Selling on  La3eb",
              route: "/"
            },
            {
              name: "Developer & Publisher",
              route: "/"
            },
            {
              name: "Marketing Partnership",
              route: "/"
            }
          ]
        }
      ]
    },
    sliderData: [
      {
        title: "Become a legendary Viking warrior raised on tales of battle and glory.",
        image: "/images/slider.png"
      },
      {
        title: "Become a legendary Viking warrior raised on tales of battle and glory.",
        image: "/images/slider.png"
      },
      {
        title: "Become a legendary Viking warrior raised on tales of battle and glory.",
        image: "/images/slider.png"
      },
      {
        title: "Become a legendary Viking warrior raised on tales of battle and glory.",
        image: "/images/slider.png"
      },
      {
        title: "Become a legendary Viking warrior raised on tales of battle and glory.",
        image: "/images/slider.png"
      }
    ],
    comments: [
      {
        userImage: "/images/user-ico.png",
        name: "MrPaladin",
        username: "@mrpaladin",
        commentText:
          " Sniper isnt overpowered. \nSniper has some of the lowest damage outputs in the game. 50 damage per shot is terrible, especially with the fire rate. \nCompared to heavy, who has 400+ DPS! tell me how sniper compares. ",
        followers: 15,
        commentTime: "3hrs ago",
        likes: 296,
        pro: false,
        comments: 15
      },
      {
        userImage: "/images/user-ico-2.png",
        name: "LeroyJenkins",
        username: "@leroyjenkins",
        commentText:
          "It'll still be long enough that it cannot be spammed. But will increase usefulness of the watch by not.. ",
        followers: 3253,
        commentTime: "15mins ago",
        likes: 0,
        pro: true,
        comments: 0
      },
      {
        userImage: "/images/user-ico-3.png",
        name: "ONYXSnake1223",
        username: "@ONYXSnake1223",
        commentText:
          " Sniper isnt overpowered. \nSniper has some of the lowest damage outputs in the game. 50 damage per shot is terrible, especially with the fire rate. \nCompared to heavy, who has 400+ DPS! tell me how sniper compares. ",
        followers: 125,
        commentTime: "15mins ago",
        likes: 1200,
        pro: true,
        comments: 156
      }
    ],
    channels: [
      {
        slug: "#social Hub",
        subscribers: "195K",
        imageLink: "/images/channel-1.png"
      },
      {
        slug: "#Fornite",
        subscribers: "240K",
        imageLink: "/images/channel-2.png"
      },
      {
        slug: "#World of War Craft",
        subscribers: "195K",
        imageLink: "/images/channel-1.png"
      },
      {
        slug: "#PUBG Mobile",
        subscribers: "195K",
        imageLink: "/images/channel-3.png"
      },
      {
        slug: "#HearthStone",
        subscribers: "195K",
        imageLink: "/images/channel-4.png"
      },
      {
        slug: "#CS: GO",
        subscribers: "195K",
        imageLink: "/images/channel-5.png"
      },
      {
        slug: "#Call of Duty",
        subscribers: "195K",
        imageLink: "/images/channel-6.png"
      },
      {
        slug: "#Overwatch",
        subscribers: "195K",
        imageLink: "/images/channel-7.png"
      },
      {
        slug: "#Diablo III",
        subscribers: "195K",
        imageLink: "/images/channel-8.png"
      }
    ],
    users: [
      {
        slug: "XMegatronX",
        imageLink: "/images/user-1.png",
        followers: 325860
      },
      {
        slug: "Rikimarue",
        imageLink: "/images/user-2.png",
        followers: 325860
      },
      {
        slug: "Wolfie",
        imageLink: "/images/user-3.png",
        followers: 325860
      },
      {
        slug: "Thanon",
        imageLink: "/images/user-4.png",
        followers: 325860
      },
      {
        slug: "Rikimarue",
        imageLink: "/images/user-2.png",
        followers: 325860
      },
      {
        slug: "MrPaladin",
        imageLink: "/images/user-5.png",
        followers: 325860
      },
      {
        slug: "Supreme",
        imageLink: "/images/user-4.png",
        followers: 325860
      },
      {
        slug: "Murmur",
        imageLink: "/images/user-6.png",
        followers: 325860
      },
      {
        slug: "Loremiosum",
        imageLink: "/images/user-ico.png",
        followers: 325860
      }
    ],
    products: [
      {
        title: "World of Warcraft: Shadowlands (Heroic Edition)",
        price: 22.5,
        currency: "€",
        prePrice: 22.5,
        discount: 62,
        imgLink: "/images/game-card.jpeg"
      },
      {
        title: "Biomutant Steam Key ARABIC",
        price: 54.49,
        currency: "€",
        prePrice: 54.49,
        discount: 34,
        imgLink: "/images/game-card.jpeg"
      },
      {
        title: "Watch Dogs: Legion Uplay Key",
        price: 37.99,
        currency: "€",
        prePrice: 37.99,
        discount: 20,
        imgLink: "/images/game-card.jpeg"
      },
      {
        title: "Vampire: The Masquerade - Bloodlines 2 Steam Key",
        price: 4.36,
        currency: "€",
        prePrice: 4.36,
        discount: 15,
        imgLink: "/images/game-card.jpeg"
      },
      {
        title: "Football Manager 2021 Steam Key",
        price: 41.79,
        currency: "€",
        prePrice: 41.79,
        discount: 5,
        imgLink: "/images/game-card.jpeg"
      }
    ]
  });
};
