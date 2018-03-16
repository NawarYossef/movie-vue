const initialState = {
  users: [
    'Roy',
    'Nawar',
    'Mr. T',
    'Yoda'
  ],
  currentUser: 'userman123'
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
