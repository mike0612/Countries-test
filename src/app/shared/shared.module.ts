import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [HeaderComponent, AutocompleteComponent, LoaderComponent],
  imports: [CommonModule, NgbModule],
  exports: [HeaderComponent, AutocompleteComponent, LoaderComponent],
})
export class SharedModule {}
