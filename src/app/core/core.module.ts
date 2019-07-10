import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule,

  ],

  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
