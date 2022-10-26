import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/book-home.module').then(m => m.BookHomeModule)
      },
      {
        path: 'premium',
        loadChildren: () => import('../premium/book-premium.module').then(m => m.BookPremiumModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../search/book-search.module').then(m => m.BookSearchModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../library/book-library.module').then(m => m.BookLibraryModule)
      },
      {
        path: 'invite',
        loadChildren: () => import('../invite/book-invite.module').then(m => m.BookInviteModule)
      },
      {
        path: 'search-results',
        loadChildren: () =>
          import('../search/search-results/search-results.module').then((m) => m.SearchResultsModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'search',
    loadChildren: () => import('../search/book-search.module').then(m => m.BookSearchModule)
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
