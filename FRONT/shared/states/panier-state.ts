import {NgxsModule,Action,Selector,State, StateContext} from '@ngxs/store';
import {PanierStateModel} from './panier-state-model';
import {AddArticle} from '../actions/addArticle';
import {DelArticle} from '../actions/delArticle';

@State<PanierStateModel>({
    name: 'panier',
    defaults: {
        panier: []
    }
})

export class PanierState {

  @Selector()
    static getPanier(state: PanierStateModel) {
        return state.panier;
    }

@Action(AddArticle)
    add({getState, patchState }: StateContext<PanierStateModel>, { payload }: AddArticle) {
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }

 @Action(DelArticle)
    del ({getState, patchState }: StateContext<PanierStateModel>, { payload }: DelArticle) {
        const state = getState();
        
        patchState({
            panier: [...(state.panier.filter(p => !(p.nom.match(payload.nom))))]
        });
    }   
}
