import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { FileType } from 'utils';
import { mfe } from '../../app-routing.module';

@Component({
  selector: 'pmo-mfe-order-component',
  templateUrl: './mfe-order-component.html',
  styleUrls: ['./mfe-order-component.scss']
})
export class MfeOrderComponent implements OnInit {

  constructor(private viewCRef: ViewContainerRef,
    private componentFR : ComponentFactoryResolver) { }

    async ngOnInit() {
      const OrderComponent = await mfe.loadRemoteFile({
        remoteName: "orders",
        remoteEntry: `http://127.0.0.1:4205/remoteOrders.js`,
        exposedFile: "OrderComponent",
        exposeFileType: FileType.Component,
      }).then((m) => m.OrderComponent);

      this.viewCRef.createComponent(
        this.componentFR.resolveComponentFactory(OrderComponent)
      );
    }

}
