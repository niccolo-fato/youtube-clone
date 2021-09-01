import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { animate, state, style, transition, trigger, } from "@angular/animations";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("animation1", [
      state(
        "in",
        style({
          margin: "8px 0px 0px 0px",
          transform: "rotate(45deg)",
        })
      ),
      state(
        "out",
        style({
          transform: "rotate(0deg)",
        })
      ),
      transition("in => out", animate("0.2s")),
      transition("out => in", animate("0.2s")),
    ]),

    trigger("animation2", [
      state(
        "in",
        style({
          opacity: "0",
          transform: "translateX(-50px)",
        })
      ),
      state(
        "out",
        style({
          transform: "rotate(0deg)",
        })
      ),
      transition("in => out", animate("0.2s")),
      transition("out => in", animate("0.2s")),
    ]),

    trigger("animation3", [
      state(
        "in",
        style({
          margin: "-12px 0px 0px 0px",
          transform: "rotate(-45deg)",
        })
      ),
      state(
        "out",
        style({
          transform: "rotate(0deg)",
        })
      ),
      transition("in => out", animate("0.2s")),
      transition("out => in", animate("0.2s")),
    ]),
    trigger("animation4", [
      state(
        "in",
        style({
          opacity: "0",
          transform: "translateX(-50px)",
        })
      ),
      state(
        "out",
        style({
          transform: "rotate(0deg)",
        })
      ),
      transition("in => out", animate("0.1s")),
      transition("out => in", animate("0.1s")),
    ]),
  ],

})

export class NavbarComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  menu: string = "out";

  toggleMenu(): void {
    this.menu = this.menu === "in" ? "out" : "in";
  }

}