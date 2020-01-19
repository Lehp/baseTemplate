import { Component } from "@angular/core";

@Component({
  selector: "base-component",
  templateUrl: "./base.pug",
  styleUrls: ["./base.css"]
})
export class BaseComponent {
  title = "pureAngular";
}
