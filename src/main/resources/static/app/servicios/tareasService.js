app.service('tareasService', function ($q, factory) {
    const self = this;
    const path = 'tareas';
    self.get() = () => {
        return $q((success, error) => {
            factory.get(path).then((resolve) => {
                return success(resolve);
            }, (reject) => {
                return error(error);
            });
        })
    }
    self.post = (tarea) => {
        return $q((success, error) => {
            factory.post(path, tarea).then((resolve) => {
                return success(resolve);
            }, (reject) => {
                return error(error);
            });
        })
    }
    self.put = (tarea) => {
        return $q((success, error) => {
            factory.put(path, tarea).then((resolve) => {
                return success(resolve);
            }, (reject) => {
                return error(error);
            });
        })
    }
    self.delete = (tarea) => {
        return $q((success, error) => {
            factory.delete(path, tarea).then((resolve) => {
                return success(resolve);
            }, (reject) => {
                return error(error);
            });
        })
    }
})