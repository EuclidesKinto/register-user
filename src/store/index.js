import { createStore } from "vuex";
import usersModule from "./modules/users.js";

const store = createStore({
    modules: {
        users: usersModule,
    },
});
export default store;
