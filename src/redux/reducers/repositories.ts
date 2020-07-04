import { ADD_REPO, REMOVE_REPO } from "../actionTypes";

const initialState = {
  all: ["/home/pacman/Desktop/revever", "/home/pacman/Desktop/nodegit"],
};

type Action = {
  type: string,
  payload: { [key: string]: any }
}

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ADD_REPO: {
      console.log("ADD REPO", action.payload);
      const all = [...state.all, action.payload.content.data]
      return {
        ...state,
        all
      };
    }
    case REMOVE_REPO: {
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}
