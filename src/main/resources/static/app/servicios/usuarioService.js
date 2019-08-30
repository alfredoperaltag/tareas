app.service ('usuarioService', function($q, factory) {
    const SELF = this;
    // nombre del restController
    const PATH = 'usuario';

    SELF.get = () => {
        return $q((success, error) => {
            factory.get(PATH).then(
                (resolve) => {
                    success(resolve)
                },
                (reject) => {
                    error(reject)
                })
        })
    }
    SELF.post = (usuario) => {
        return $q((success, error) => {
            factory.post(PATH, usuario).then(
                (resolve) => {
                    success(resolve)
                },
                (reject) => {
                    error(reject)
                })
        })
    }
    SELF.put = (usuario) => {
        return $q((success, error) => {
            factory.put(PATH, usuario).then(
                (resolve) => {
                    success(resolve)
                },
                (reject) => {
                    error(reject)
                })
        })
    }
    SELF.delete = (usuario) => {
        return $q((success, error) => {
            factory.delete(PATH, usuario).then(
                (resolve) => {
                    success(resolve)
                },
                (reject) => {
                    error(reject)
                })
        })
    }
    
    // realizar conttrolador y terminar el REST
})