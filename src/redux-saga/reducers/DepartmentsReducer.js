import * as ActionType from "../constants/Departments";

const INIT_STATE = {
  departments: [],
};

const DepartmentsReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_DEPARTMENTS_REQUEST:
      return { ...state };
    case ActionType.GET_DEPARTMENTS_SUCCESS:
      return GetDepartmentsSucceed(state, action);
    case ActionType.ADD_DEPARTMENTS_REQUEST:
      return { ...state };
    case ActionType.ADD_DEPARTMENTS_SUCCESS:
      return AddDepartmentsSucceed(state, action);
    case ActionType.DEL_DEPARTMENTS_REQUEST:
      return { ...state };
    case ActionType.DEL_DEPARTMENTS_SUCCESS:
      return DelDepartmentsSucceed(state, action);
    default:
      return GetDepartmentsSucceed(state, action);
  }
};

const GetDepartmentsSucceed = (state, action) => {
  return {
    ...state,
    departments: action.payload,
  };
};

const AddDepartmentsSucceed = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    departments: [...state.departments, payload],
  };
};

const DelDepartmentsSucceed = (state, action) => {
  const { payload } = action;
  const filterDepartments = state.departments.filter((el) => el.department_id !== payload);
  return {
    ...state,
    departments: [...filterDepartments],
  };
};

export default DepartmentsReduce;
