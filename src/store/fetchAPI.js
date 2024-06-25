import { defineStore } from 'pinia';
import axios from 'axios';

const useCharityStore = defineStore('charity', {
    state: () => ({
        data: [],
        error: null,
        categories: [],
        charityByID: [],
        charityByCategory: [],
        charityUserDonate: [],
        categoryByID: [],
        userData: [],
        dataInforDonate: [],
        payments: [],
        user: '',
        userID: '',
        listUser: [],
        question: [],
        charityUser: [],
        statusCode: null,
        statusRegister: null,
        statusVerify: null,
        statusDonate: null,
        statusPost: null,
        statusComment: null,
        statusUpdateImg: null,
        statusCrCompaign: null,
        statusUpCompaign: null,
        statusChangePw: null,
        statusChangeInfor: null,
        countCategory: 0,
        message: '',
        dataPost: [],
        dataComment: [],
        statusGetCm: {},
        totalPage: null,
        currentPage: 1,
        conscious: [],
        city: [],
        ward: [],
        visiable: false,
        url: import.meta.env.VITE_URL,
        tokenUser: localStorage.getItem('Token')
    }),
    actions: {
        async fetchCharity(id) {
            if (!id) {
                id = 0;
            }
            try {
                const res = await axios.get(`${this.url}/data/getcharity?page=${id}`);
                if (!res.data) throw new Error('Lỗi API Charity!!');
                this.data = res.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCategoryCharity() {
            try {
                const res = await axios.get(`${this.url}/category/getcategory`);
                if (!res.data) throw new Error('Lỗi API Category!!');
                this.categories = res.data.data;
                this.countCategory = res.data.count;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        //
        async fetchCreateCharity(data) {
            try {
                const res = await axios.post(`${this.url}/data/createcharity`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                })
                if (!res.data) throw new Error('Lỗi API creaetCharity!!');
                this.statusCrCompaign = res.data.status;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchUpdateCharity(data, route) {
            try {
                const res = await axios.post(`${this.url}/data/updatecharity?id=${route}`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                })
                if (!res.data) throw new Error('Lỗi API creaetCharity!!');
                this.statusUpCompaign = res.data.status;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCharityById(id) {
            try {
                const res = await axios.get(`${this.url}/data/getcharityid/${id}`);
                if (!res.data) throw new Error('Lỗi API Charity!!');
                this.charityByID = res.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCharityByUser(data) {
            try {
                const res = await axios.get(`${this.url}/data/charity-get-user`, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API CharityUser!!');
                this.charityUser = res.data.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCharityDonate() {
            try {
                const res = await axios.get(`${this.url}/data/charity-user-donate`, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API CharityDonate!!');
                this.charityUserDonate = res.data.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCharityByCategory(id) {
            try {
                const res = await axios.get(`${this.url}/data/getcharityIdCategory/${id}`);
                if (!res.data) throw new Error('Lỗi API Charity!!');
                this.charityByCategory = res.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchLogin(data) {
            try {
                const res = await axios.post(`${this.url}/user/login`, data);
                if (!res.data) throw new Error('Lỗi API Login!!');
                localStorage.setItem('Token', res.data.token);
                if (localStorage.getItem('Token') && res.data.data.Status === 0) {
                    window.location.href = '/';
                }
                this.userData = res.data.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCategoryID(id) {
            try {
                const res = await axios.get(`${this.url}/category/getCategoryid/${id}`);
                if (!res.data) throw new Error('Lỗi API Login!!');
                this.categoryByID.push(res.data);
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchPayment() {
            try {
                const res = await axios.get(`${this.url}/payment/payment_get_list`);
                if (!res.data) throw new Error('Lỗi API Login!!');
                this.payments = res.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchUser() {
            try {
                const res = await axios.get(`${this.url}/user/user-get`, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API User!!');
                this.user = res.data;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchUserID(data) {
            try {
                if (data) {
                    const res = await axios.get(`${this.url}/user/user-getID?id=${data}`);
                    if (!res.data) throw new Error('Lỗi API User!!');
                    this.userID = res.data;
                }
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchListUser() {
            try {
                const res = await axios.get(`${this.url}/user/user-get-list`)
                if (!res.data) throw new Error('Lỗi API User!!');
                this.listUser = res.data
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async changePw(data) {
            try {
                const res = await axios.put(`${this.url}/user/update-password`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API changePw!!');
                this.statusChangePw = res.data.status
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async changeInfor(data) {
            try {
                const res = await axios.put(`${this.url}/user/update-username`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API changeInfor!!');
                this.statusChangeInfor = res.data.status;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchVerifyEmail(data) {
            try {
                const res = await axios.post(`${this.url}/user/verify-email`, data);
                if (!res.data) throw new Error('Lỗi API VerifyEmail!!');
                localStorage.setItem('Verify', res.data.token);
                this.statusVerify = res.data.status
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchVerifyCode(data) {
            try {
                const token = localStorage.getItem('Verify');
                const res = await axios.post(`${this.url}/user/verify-code`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API VerifyCode!!');
                this.statusCode = res.data.status;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchRegister(data) {
            try {
                console.log(data)
                const token = localStorage.getItem('Verify');
                const res = await axios.post(`${this.url}/user/register`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API Register!!');
                this.statusRegister = res.data.status;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchDonate(data) {
            try {
                const res = await axios.post(`${this.url}/donate/create-payment-link`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API Donate!!');
                this.statusDonate = res.data.url
                console.log(this.statusDonate)
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchGetDonate(id) {
            try {
                const res = await axios.get(`${this.url}/donate/get-donate/${id}`);
                if (!res.data) throw new Error('Lỗi API GetDonate!!');
                this.dataInforDonate = res.data
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchQuestion() {
            try {
                const res = await axios.get(`${this.url}/question/question-get`);
                if (!res.data) throw new Error('Lỗi API Question!!');
                this.question = res.data
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fecthCreaetPost(data) {
            try {
                const res = await axios.post(`${this.url}/post/creaetPost`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    }
                });
                if (!res.data) throw new Error('Lỗi API CreatePost!!');
                this.statusPost = res.data.status
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fecthGetPost(id, page) {
            try {
                const res = await axios.get(`${this.url}/post/getPost/${id}?page=${page}`);
                if (!res.data) throw new Error('Lỗi API getPost!!');
                this.dataPost = res.data.inforPost;
                this.totalPage = res.data.totalPage;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchCreateComment(data) {
            try {
                const res = await axios.post(`${this.url}/comment/comment-create`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    }
                });
                if (!res.data) throw new Error('Lỗi API CreateComment!!');
                this.statusComment = res.data.status
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async fetchGetComment(id, page) {
            try {
                const res = await axios.get(`${this.url}/comment/comment-get/${id}?page=${page}`);
                if (!res.data) throw new Error('Lỗi API getComment!!');
                this.dataComment.push(...res.data.inforCm);
                this.statusGetCm = res.data.addComment;
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async updateAvatar(data) {
            try {
                const res = await axios.put(`${this.url}/user/update-avatar`, data, {
                    headers: {
                        Authorization: `Bearer ${this.tokenUser}`,
                    },
                });
                if (!res.data) throw new Error('Lỗi API updateAva!!');
                this.statusUpdateImg = res.data.status
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        //api lấy thông tin thành phố/ tỉnh
        async getConscious() {
            try {
                const res = await axios.get('https://api.mysupership.vn/v1/partner/areas/province')
                if (!res.data) throw new Error('Lỗi API lấy tỉnh / thành phố!!');
                this.conscious = res.data.results
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async getCity(code) {
            try {
                const res = await axios.get(`https://api.mysupership.vn/v1/partner/areas/district?province=${code}`)
                if (!res.data) throw new Error('Lỗi API lấy thành phố / huyện!!');
                this.city = res.data.results
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        async getWard(code) {
            try {
                const res = await axios.get(`https://api.mysupership.vn/v1/partner/areas/commune?district=${code}`)
                if (!res.data) throw new Error('Lỗi API lấy tỉnh / thành phố!!');
                this.ward = res.data.results
            } catch (error) {
                this.error = error;
                console.log(this.error);
            }
        },
        //
        changeMsg(msg) {
            this.message = msg;
        },
        changeCurrentPage(data) {
            this.currentPage = data
        }
    },
});

export default useCharityStore;
