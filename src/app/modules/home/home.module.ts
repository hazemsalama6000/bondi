import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { LandingComponent } from "./components/landing/landing.component";

@NgModule({
    declarations: [LandingComponent],
    imports: [HomeRoutingModule]
})

export class HomeModule {

}