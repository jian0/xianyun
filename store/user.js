// 先创建一个仓库
export const state = ()=>({
    // 采用返回数据的结构
    userInfo:{
        token:'',
        user:{}
    }
})

// 把登录请求放到store管理
export const mutations = {
    // 保存数据到state
    setUserInfo(state,data){
        state.userInfo = data
    }
}