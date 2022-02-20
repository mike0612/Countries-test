import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { RestcountriesService } from "../restcountries.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  constructor(private service: RestcountriesService) {}

  items = [];
  dropDownText = "Filtra por región";
  term = "";

  @Output() submitted = new EventEmitter<string>();
  @Output() filteredDropdown = new EventEmitter<string>();

  ngOnInit(): void {
    this.filterList();
  }

  selectedValue(event: string) {
    console.log(event);
    this.filteredDropdown.emit(event);
  }

  filterList() {
    this.service.getFilterList().subscribe((res) => {
      const region = res.filter(
        (item, index, regions) =>
          index === regions.findIndex((el) => el.region === item.region)
      );
      const list = region.filter((item) => item.region).map((el) => el.region);

      this.items = list;
    });
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

  onSearch(event) {
    this.term = event;
    this.submitted.emit(this.term);
  }
}
