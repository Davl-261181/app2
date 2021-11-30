import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '005330dd-99ec-490e-94bd-c8d125d7ae63'
        
    }
});

export const userAPI = {
    getUsers(currentPage=1, pageSize=10) {

        return instance.get( `users?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        });
    },

   

    follow(userId) {
        return instance.post(`follow/${userId}`)
                                
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId, { 
            
            headers: {
                'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
                
            }
            })
    }
}

export const profileAPI = {
    getUsers(currentPage=1, pageSize=10) {

        return instance.get( `users?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        });
    },



    getProfile(userId) {
        return instance.get(`profile/`+ userId, { withCredentials: true }, { 
            
            headers: {
                'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
                
            }
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/`+ userId, { withCredentials: true }, { 
            
            headers: {
                'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
                
            }
        })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}, { withCredentials: true }, { 
            
            headers: {
                'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
                
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, { withCredentials: true }, { 
            
        headers: {
            'API-KEY': '552c0a5d-31ed-44af-807c-85564617984b'
            
        }
        })
    }
}
    