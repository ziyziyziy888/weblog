import Base from './base'
import { Base64 } from "../common/libs/base64"

class Blog extends Base {
	getArticleList(data = {}, allowCache = true) {
		return this.get(`list?${new Date().getTime()}`, data, allowCache)
	}
	getDetail(id, data = {}, allowCache = true) {
		return this.get(`article/detail/${id}`, data, allowCache)
	}
}

export default new Blog()
