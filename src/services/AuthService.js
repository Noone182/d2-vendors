import { instance } from "./BaseService";
export default {
  authRefresh() {
    return instance.post('/Platform/App/OAuth/token/')
  },
  updateAccessToken() {
    return instance.get('/Platform/App/OAuth/token/')
  }
}
