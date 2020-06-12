export default {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city   //localStorage相当于cookie，可以存储数据
        } catch(e) {}
    }
}