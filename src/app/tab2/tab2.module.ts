import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { MyOrderByPipe } from '../pipes/my-order-by.pipe';
import { OrderByPipe } from 'ngx-pipes';
import {NgPipesModule} from 'ngx-pipes';


@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, MyOrderByPipe, OrderByPipe]
})
export class Tab2PageModule {}
