import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//component
import { HomeComponent } from "./home/home.component";
import { CountryComponent } from "./country/country.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "country/:country",
    component: CountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
