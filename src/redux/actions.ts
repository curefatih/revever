import { ADD_REPO, REMOVE_REPO, UPDATE_COMMITS, UPDATE_CURRENT_REPO } from "./actionTypes";

let nextTodoId = 0;

export const addRepo = (content: any) => ({
  type: ADD_REPO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const removeRepo = (content: any) => ({
  type: REMOVE_REPO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const updateSelectedRepo = (content: any) => ({
  type: UPDATE_CURRENT_REPO,
  selected: content
});

export const updateCommits = (content: any) => ({
  type: UPDATE_COMMITS,
  payload: content
})