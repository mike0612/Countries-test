import { Component, OnInit, OnDestroy } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { RestcountriesService } from "../restcountries.service";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})
export class CountryComponent implements OnInit {
  component: any;
  loading: boolean = false;

  name: string;
  flag: string;
  nativeName: string;
  topLevelDomain: string[];
  population: number;
  currencies: any;
  region: string;
  languages: any;
  subregion: string;
  capital: string;
  borders: string[];

  constructor(
    private route: ActivatedRoute,
    private service: RestcountriesService
  ) {}

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData() {
    this.loading = true;
    const { country } = this.route.snapshot.params;
    this.service.getCountryInfo(country).subscribe(([data]: any) => {
      const {
        name,
        flag,
        nativeName,
        topLevelDomain,
        population,
        currencies,
        region,
        languages,
        subregion,
        capital,
        borders,
      } = data;

      Object.assign(this, data);
      this.loading = false;
    });
  }
}
