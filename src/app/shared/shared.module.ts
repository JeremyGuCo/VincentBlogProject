import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
@NgModule({
   declarations: [
      CarrouselComponent,
      NavBarComponent,
   ],
   imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      RouterModule,
   ],
   exports: [
      CarrouselComponent,
      NavBarComponent,
      
   ]
})
export class SharedModule { }
