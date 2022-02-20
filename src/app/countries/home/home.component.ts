import { Component, OnInit } from "@angular/core";

import { RestcountriesService } from "../restcountries.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  list = [];
  loading: boolean = false;

  constructor(private service: RestcountriesService) {}

  ngOnInit(): void {
    this.allCountrieList();
  }

  onTerm(event: any) {
    this.loading = true;
    if (!event) {
      this.allCountrieList();
      this.loading = false;
    } else {
      this.service.search(event).subscribe((response: any) => {
        this.list = response;
        this.loading = false;
      });
    }
  }

  allCountrieList() {
    this.loading = true;
    this.service.getCountriesList().subscribe((response) => {
      this.list = response;
      this.loading = false;
    });
  }

  onDropdown(event: string) {
    this.loading = true;
    this.service.dropdownFilter(event).subscribe((response: any) => {
      this.list = response;
      this.loading = false;
    });
  }
}
