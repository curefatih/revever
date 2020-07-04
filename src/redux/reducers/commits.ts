import { UPDATE_COMMITS } from "../actionTypes";

const initialState = {
  current: "",
  status: 0,
  message: "",
  data: []
};

type Action = {
  type: string,
  payload: { [key: string]: any }
}

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case UPDATE_COMMITS: {

      return {
        ...action.payload
      };
    }
    default:
      return state;
  }
}
