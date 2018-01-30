import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LookupComponent} from './lookup/lookup.component';
import {TranslationComponent} from './translation/translation.component';
import {DictionaryLayoutComponent} from './dictionary-layout/dictionary-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dictionary',
        component: DictionaryLayoutComponent
      }, {
        path: 'dictionary/translation',
        component: TranslationComponent
      }
    ]),
    CommonModule
  ],
  declarations: [LookupComponent, TranslationComponent, DictionaryLayoutComponent]
})
export class DictionaryModule {}
