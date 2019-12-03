import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "violet";

  yes() {
    console.log("YES");
  }
  no() {
    console.log("NO");
  }
}
