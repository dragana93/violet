import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-violet",
  templateUrl: "./violet.component.html",
  styleUrls: ["./violet.component.css"]
})
export class VioletComponent implements OnInit {
  showedElement: boolean = true;
  showedMiki: boolean = false;

  constructor() {}

  ngOnInit() {}

  yes() {
    this.showedElement = false;
    this.showedMiki = true;
    console.log("YES");
  }
  no() {
    console.log("NO");
  }
}
