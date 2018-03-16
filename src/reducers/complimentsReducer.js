const initialState = {
  compliments: [
    'you are so beautiful to me',
    'your eyes are deep pools in which I wish to swim',
    'you are wittier than like, everyone',
    'I wish I were twice as good at math as you are'
  ]
};

const complimentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default complimentsReducer;
