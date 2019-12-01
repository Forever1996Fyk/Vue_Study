var users = {
  state: {
    users: [
      {id: 3, name: 'YuKai Fan'}
    ]
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  }
};

export default users;
