import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.None // styles writting in server-element.component.css will be applied globally
  // encapsulation: ViewEncapsulation.None // styles will be applied in ShadowDom insted of "Native"
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string = "";
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called!");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log(
      "Text Content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
    console.log(
      "Text Content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called!");
  }
}
