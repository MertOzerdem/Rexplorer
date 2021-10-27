import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
					id: "m1",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "good memory",
					description: "good memory desc",
				},
				{
					id: "m2",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "normal memory",
					description: "normal memory desc",
				},
				{
					id: "m3",
					image: "https://media.geeksforgeeks.org/wp-content/uploads/geek-stack-1.png",
					title: "bad memory",
					description: "bad memory desc",
				}
            ]
        }
    },
    getters: {
       memories(state) {
           return state.memories;
       },
       memory(state) {
           return (memoryId) => {
               return state.memories.find((memory) => memory.id === memoryId)
           }
       }
    }
});

export default store;