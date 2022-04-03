import * as ActionType from "../constants/Dependents";

const INIT_STATE = {
  dependents: [],
};

const DependentsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_DEPENDENTS_REQUEST:
      return { ...state };
    case ActionType.GET_DEPENDENTS_SUCCESS:
      return GetDependentsSucceed(state, action);
    case ActionType.ADD_DEPENDENTS_REQUEST:
      return { ...state };
    case ActionType.ADD_DEPENDENTS_SUCCESS:
      return AddDependentsSucceed(state, action);
    case ActionType.DEL_DEPENDENTS_REQUEST:
      return { ...state };
    case ActionType.DEL_DEPENDENTS_SUCCESS:
      return DelDependentsSucceed(state, action);
    default:
      return GetDependentsSucceed(state, action);
  }
};

const GetDependentsSucceed = (state, action) => {
  return {
    ...state,
    dependents: action.payload,
  };
};

const AddDependentsSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    dependents: [...state.dependents, payload],
  };
};

const DelDependentsSucceed = (state, action) => {
  const { payload } = action;
  const filterDependents = state.dependents.filter((el) => el.dependent_id !== payload);
  return {
    ...state,
    dependents: [...filterDependents],
  };
};

export default DependentsReducer;
