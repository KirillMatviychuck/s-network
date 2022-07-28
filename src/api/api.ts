import axios from "axios";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d06f67aa-6a53-4862-8b03-b54db62d6ffb"
    }
})

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    }

}

export const headerAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data
    )
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
    changePhoto() {
        return instance.put(`profile/photo`)
            .then(res => {
                return res
            })
    }
}

export const profileAPI = {
    currentUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
            .then(res => res)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    updateProfileInfo(profileInfo: updateProfileInfoModelType) {
        return instance.put('profile', profileInfo)
            .then(res => res.data)
    }
}

// Types
export type LoginResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        userId: number
    }
}
export type updateProfileInfoModelType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
}

