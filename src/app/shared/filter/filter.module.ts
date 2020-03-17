import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterComponent } from './filter.component';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [FilterComponent, FilterModalComponent],
    exports: [FilterComponent],
    entryComponents: [FilterModalComponent]
})
export class FilterControllerModule { }
