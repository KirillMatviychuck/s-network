import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d06f67aa-6a53-4862-8b03-b54db62d6ffb"
    }
})

// Users endpoint
export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    }
}

// Follow endpoint
export const followAPI = {
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }

}