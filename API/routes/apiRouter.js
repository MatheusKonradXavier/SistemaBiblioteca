import GenIdRoute from './apiRoutes/genIdRouter'
import AdminRoute from './apiRoutes/adminRouter'
import AuthRoute from './apiRoutes/authRouter'
import CategoriaRoute from './apiRoutes/CategoriaRouter'
import ObraRoute from './apiRoutes/obraRouter'
import LeitorRoute from './apiRoutes/leitorRouter'
import EmprestimoRoute from './apiRoutes/emprestimoRouter'

const apiRouter = {
    GenerateId: {
        route: 'genid',
        dir: GenIdRoute
    },
    Auth: {
        route: 'auth',
        dir: AuthRoute
    },
    Admin : {
        route: 'admins',
        dir: AdminRoute
    },
    Categoria: {
        route: 'categorias',
        dir: CategoriaRoute
    },
    Obra: {
        route: 'obras',
        dir: ObraRoute
    },
    Leitor: {
        route: 'leitores',
        dir: LeitorRoute
    },
    Emprestimo: {
        route: 'emprestimos',
        dir: EmprestimoRoute
    }
}

export default apiRouter;