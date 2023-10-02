import {api} from '../../api'
import { ILivro } from '../../../screens/Listar'

class LivroData {
    index() {
        return api.get<ILivro[]>('/livro')
    }
    store(data: ILivro) {
       return api.post('/livro', data)
    }
    delete(id : Number) {
        return api.delete(`/livro/${id}`)
    }
}
export default new LivroData()