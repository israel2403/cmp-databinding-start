import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  // newServerName = "";
  // newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(this.serverContentInput);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
