import { ActionReducer, Action } from '@ngrx/store';
import { Gallery } from '../gallery/gallery.model';

export const GALLERY = 'gallery';

export function storeReducer(state: Gallery, action: Action) {

	switch (action.type) {
		case GALLERY:
			return Object.assign({}, state, action.payload.gallery);
		default:
			return state;
	}
}