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
    icon: 'icon-menu',
    children: [
      {
        name: 'Instituições',
        url: '/base/cliente',
        icon: 'icon-docs'
      },
      {
        name: 'Sistemas',
        url: '/base/sistema',
        icon: 'icon-briefcase'
      },
      {
        name: 'Cargos',
        url: '/base/cargo',
        icon: 'icon-layers'
      },
      {
        name: 'Funcionários',
        url: '/base/funcionario',
        icon: 'icon-people'
      },
      {
        name: 'Relação Sistema/Funcionario',
        url: '/base/relacaoSistemaFuncionario',
        icon: 'icon-people'
      },

      {
        name: 'Relação Sistema/Instituição',
        url: '/base/relacaoSistemaInstituicao',
        icon: 'icon-people'
      },

      {
        name: 'Usuários',
        url: '/base/usuario',
        icon: 'icon-people'
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
