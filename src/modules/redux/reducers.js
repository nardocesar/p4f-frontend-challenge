const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return {
        ...state,
        users: action.users,
      };
    case 'LOAD_PHOTOS':
      return {
        ...state,
        photos: action.photos,
      };
    case 'LOAD_POSTS':
      return {
        ...state,
        posts: action.posts,
      };
    default: return state;
  }
};

export default rootReducer;
