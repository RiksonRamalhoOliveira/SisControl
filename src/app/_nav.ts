interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [


  {
    title: true,
    name: 'Cadastro'
  },
  {
    name: 'Início',
    url: '/base',
    icon: 'icon-globe',
    children: [
      {
        name: 'Instituições',
        url: '/base/cliente',
        icon: 'icon-puzzle'
      },
      {
        name: 'Sistemas',
        url: '/base/sistema',
        icon: 'icon-puzzle'
      },
      {
        name: 'Cargos',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Funcionários',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      }, 
    ]
  },
];
