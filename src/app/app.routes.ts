import { Routes } from '@angular/router';
import { RxjsBasicComponent } from './components/rxjs-basic/rxjs-basic.component';
import { RxjsOperatorComponent } from './components/rxjs-operator/rxjs-operator.component';

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
    }
];
