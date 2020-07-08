import { ADD_REPO, REMOVE_REPO, UPDATE_CURRENT_REPO } from "../actionTypes";

const initialState = {
  selected: "",
  all: ["/home/pacman/Desktop/revever", "/home/pacman/Desktop/nodegit"],
};

type Action = {
  type: string,
  payload?: { [key: string]: any },
  [key: string]: any
}

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case ADD_REPO: {
      console.log("ADD REPO", action.payload);
      const all = [...state.all, action.payload?.content.data]
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
    case UPDATE_CURRENT_REPO: {
      return {
        ...state,
        selected: action.selected
      }
    }
    default:
      return state;
  }
}
