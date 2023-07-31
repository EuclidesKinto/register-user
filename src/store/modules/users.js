// store/modules/pessoas.js
export default {
    state: {
        users: [],
        nextUserId: 1,

    },
    getters: {
        getAllUsers: (state) => state.users,
        getTotalUsers: (state) => state.users.length,
        getUserById: (state) => (id) => {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            return users.find((user) => user.id === +id);
        },

    },
    mutations: {
        addUser(state, user) {
            user.id = state.nextUserId;
            state.users.push(user);
            state.nextUserId++;
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        removeUser(state, user) {
            const index = state.users.findIndex((u) => u.id === user.id);
            if (index !== -1) {
                state.users.splice(index, 1);
                localStorage.setItem("users", JSON.stringify(state.users));
            }
        },
        setUsers(state, users) {
            state.users = users;
            console.log(users)
        }
    },
    actions: {
        async initializeState({ commit }) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            commit("setUsers", users);
        },
        async getUserById({ state, getters }, id) {

        }

    },
};
