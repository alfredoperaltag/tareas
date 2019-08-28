// Servici que se ocupa
// factory
app.factory("factory", function ($http, $q) {
    return {
        get: function (url) {
            return $http({
                url: '/' + url,
                method: 'GET'
            }).then(
                (success) => {
                    return success.data;
                },
                // el error no lo podemos controlar,  ya que nose sabe dcomo se va a retornar 
                (error) => {
                    return $q.reject(error)
                }
            )
        },
        post: function (url, data) {
            return $http({
                url: '/' + url,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(
                (success) => {
                    return success.data;
                },
                // el error no lo podemos controlar,  ya que nose sabe dcomo se va a retornar 
                (error) => {
                    return $q.reject(error)
                }
            )
        },
        put: function (url, data) {
            return $http({
                url: '/' + url,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(
                (success) => {
                    return success.data;
                },
                // el error no lo podemos controlar,  ya que nose sabe dcomo se va a retornar 
                (error) => {
                    return $q.reject(error)
                }
            )
        },
        delete: function (url, data) {
            return $http({
                url: '/' + url,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(
                (success) => {
                    return success.data;
                },
                // el error no lo podemos controlar,  ya que nose sabe dcomo se va a retornar 
                (error) => {
                    return $q.reject(error)
                }
            )
        }
    }
})