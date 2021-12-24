import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  repoName: string,
	branchName: string,
	installCmd: string,
	buildCmd: string,
}

const initialState: InitialState = {
  repoName: '',
	branchName: '',
	installCmd: 'npm i',
	buildCmd: 'npm run build',

}

export const userParamsSlice = createSlice({
  name: 'userParams',
  initialState,
  reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes

    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
		
  },
});


export default userParamsSlice.reducer