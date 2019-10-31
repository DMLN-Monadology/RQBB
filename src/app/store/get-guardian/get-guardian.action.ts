import { createAction, props }  from '@ngrx/store';

export const login = createAction(
  '[Get Guardian] Get',
  props<{username: string;id: string;platform: string}>()
)