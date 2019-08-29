app.service ('tareasService', function($q, factory) {
    const SELF = this;
    // nombre del restController
    const PATH = 'tareas';

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
    // realizar conttrolador y terminar el REST
})