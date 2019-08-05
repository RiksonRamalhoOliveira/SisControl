import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';
import { cardsComponent } from './cards.component';
import { RelacaoSistemaFuncionarioComponent } from './relacaoSistemaFuncionario.component';
import { ClienteComponent } from './cliente.component';
import { SistemaComponent } from './sistema.component';
import { CargoComponent } from './cargo.component';
import { UsuarioComponent } from './usuario.component';
import { FuncionarioComponent } from './funcionario.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [


      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: cardsComponent,
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'cargo',
        component: CargoComponent,
        data: {
          title: 'Cargo'
        }
      },
      {
        path: 'sistema',
        component: SistemaComponent,
        data: {
          title: 'Sistema'
        }
      },
      {
        path: 'funcionario',
        component: FuncionarioComponent,
        data: {
          title: 'Funcionario'
        }
      },

      {
        path: 'relacaoSistemaFuncionario',
        component: RelacaoSistemaFuncionarioComponent,
        data: {
          title: 'relacaoSistemaFuncionario'
        }
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
          title: 'usuario'
        }
      },


      {
        path: '',
        redirectTo: 'cliente'
      },
      {
        path: 'cliente',
        component: ClienteComponent,
        data: {
          title: 'Clientes'
        }
      },





      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
