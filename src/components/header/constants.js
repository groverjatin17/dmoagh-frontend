export function menuItems() {
    const menuItems = [
        {
          menuItemId: 0,
          menuItemTitle: 'navBar.aboutUs',
          subItems: [
            {
              subItemId: 0,
              subItemTitle: 'navBar.subMenu.orthopedist',
              subItemLink: '/orthopedist',
            },
            {
              subItemId: 0,
              subItemTitle: 'navBar.subMenu.obstetrician',
              subItemLink: '/obstetrician',
            },
            {
              subItemId: 2,
              subItemTitle: 'navBar.subMenu.ourGallery',
              subItemLink: '/gallery',
            },
          ],
        },
        {
          menuItemId: 1,
          menuItemTitle: 'navBar.services',
          subItems: [
            {
              subItemId: 0,
              subItemTitle: 'navBar.subMenu.conditions',
              subItemLink: '/conditions',
            },
            {
              subItemId: 1,
              subItemTitle: 'navBar.subMenu.facilities',
              subItemLink: '/facilities',
            },
            {
              subItemId: 2,
              subItemTitle: 'navBar.subMenu.laboratory',
              subItemLink: '/laboratory',
            },
          ],
        },
        {
          menuItemId: 2,
          menuItemTitle: 'navBar.procedures',
          subItems: [
            {
              subItemId: 0,
              subItemTitle: 'navBar.subMenu.caesareanAndDelivery',
              subItemLink: '/delivery',
            },
            {
              subItemId: 1,
              subItemTitle:  'navBar.subMenu.surgery',
              subItemLink: '/surgery',
            },
          ],
        },
        // {
        //   menuItemId: 3,
        //   menuItemTitle: 'FAQ',
        //   menuLink: '/faq',
        //   subItems: [],
        // },
        {
          menuItemId: 4,
          menuItemTitle: 'navBar.bookAppointment',
          menuLink: '/appointment',
          subItems: [],
        },
        {
          menuItemId: 5,
          menuItemTitle: 'navBar.contactUs',
          menuLink: '/contactUs',
          subItems: [],
        },
      ];

    return menuItems;
}