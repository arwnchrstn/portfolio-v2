export const navReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOW_ABOUT":
      return { ...state, about: action.payload };
    case "SET_SHOW_PROJECTS":
      return { ...state, projects: action.payload };
    case "SET_SHOW_SKILLS":
      return { ...state, skills: action.payload };
    case "SET_SHOW_EXP":
      return { ...state, exp: action.payload };
    case "SET_SHOW_EDUCATION":
      return { ...state, education: action.payload };
    default:
      return state;
  }
};
