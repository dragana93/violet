import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appMoveElement]"
})
export class MoveElementDirective {
  constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.moveElementOnMouseEnter();
  }

  private moveElementOnMouseEnter() {
    this.el.nativeElement.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    this.el.nativeElement.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
}
