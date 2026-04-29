import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  DestroyRef,
  inject
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PmodelService } from '../../services/pmodel.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pcomponent',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './pcomponent.component.html',
  styleUrl: './pcomponent.component.scss'
})
export class PcomponentComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  visible = false;
  title = '';
  width = '400px';

  private destroyRef = inject(DestroyRef);

  constructor(private modalService: PmodelService) {}

  ngAfterViewInit() {
    this.modalService.open$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(config => {
        this.open(config);
      });
  }

 open(config: any) {

  this.title = config.title || '';
  this.width = config.width || '400px';
  this.visible = true;

  setTimeout(() => {
    if (!this.container) return;

    this.container.clear();

    const ref = this.container.createComponent<any>(config.component);
    const instance = ref.instance as any;

    if (config.data) {
      Object.assign(instance, config.data);
    }

    instance.close = (data: any) => {
      this.modalService.close(data);
      this.close();
    };

  });
}

  close() {
    this.visible = false;

    if (this.container) {
      this.container.clear();
    }
  }
}