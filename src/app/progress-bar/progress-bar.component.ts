import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements AfterViewInit {
  progressAnimated: string = '0%';
  @Input() progress: string = '40%';
  @Input() color: string = 'var(--primary-color)';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.progressAnimated = this.progress;
    }, 300)
  }
}
