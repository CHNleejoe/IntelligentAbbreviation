const util = {
    parseRequest(r, callback) {
        if (r.h && r.h.code == 200) {
            if (callback) callback()
        } else {
            this.$Message.error(r.h.msg)
        }
    }
}
export default util