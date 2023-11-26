import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./components/base/base.component";

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../home/home.module').then(a => a.HomeModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LayoutRoutingModule {

}