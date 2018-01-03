import { RouterModule, Routes} from '@angular/router';

import {
	HomeComponent,
	ItemComponent,
	AboutComponent,
	BusquedaComponent
} from './components/index.paginas';


const app_routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'item/:id', component: ItemComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'buscar/:termino', component: BusquedaComponent},	
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
