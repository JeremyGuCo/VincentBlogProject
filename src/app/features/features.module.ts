import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { BibliographyComponent } from './bibliography/bibliography.component';
import { NewsComponent } from './news/news.component';
import { PublicationsComponent } from './publications/publications.component';

@NgModule({
   declarations: [
      AboutComponent,
      BibliographyComponent,
      HomeComponent,
      NewsComponent,
      PublicationsComponent,
   ],
   imports: [
      SharedModule,
      CommonModule,
      CoreModule,
      RouterModule,
   ],
})
export class FeaturesModule { }
