import { NgModule } from "@angular/core";
import { LayoutRoutingModule } from "./layout-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { BaseComponent } from "./components/base/base.component";

@NgModule({
    declarations: [BaseComponent],
    providers: [],
    imports: [LayoutRoutingModule,CommonModule],
    exports: []
})

export class LayoutModule {

}