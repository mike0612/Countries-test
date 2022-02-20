import { Component, OnInit, Input } from "@angular/core";

import { RestcountriesService } from "../restcountries.service";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent implements OnInit {
  @Input() list = [];

  constructor(private service: RestcountriesService) {}

  ngOnInit(): void {}
}
