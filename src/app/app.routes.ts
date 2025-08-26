import { Routes } from '@angular/router';
import { RxjsBasicComponent } from './components/rxjs-basic/rxjs-basic.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';
import { SubBehReplayComponent } from './components/sub-beh-replay/sub-beh-replay.component';
import { CombineObsComponent } from './components/combine-obs/combine-obs.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'rxjs-basic'
    },
    {
        path:'rxjs-basic',
        component:RxjsBasicComponent
    },
    {
        path:'rxjs-operator',
        component:RxjsOperatorComponent
    },
    {
        path:'subject-behaviour-replay',
        component:SubBehReplayComponent
    },
    {
        path:'combine-obs',
        component:CombineObsComponent
    }
];
