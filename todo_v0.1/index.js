(function (angular) {
    window.app = angular.module('todo',[]);

    window.app.controller('todos', ['$scope', function ($scope) {
        $scope.getList = function(){
            var matches = document.cookie.match(new RegExp(
                "(?:^|; )" + 'list'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            var list = (matches ? decodeURIComponent(matches[1]) : undefined) ;
            if(list) $scope.list = JSON.parse(list);
        }
        $scope.saveTodos = function(){
            document.cookie = 'list='+JSON.stringify($scope.list);
            console.log($scope.list)
        }
        $scope.newTodo = {}
        $scope.getDate = function(){
            var date = new Date().toLocaleString().split(',')[0];
            var time = new Date().toLocaleString().split(',')[1];
            return date+'('+time+')'
        }
        $scope.list = [{
            title: 'test',
            description: 'test test test',
            date: $scope.getDate(),
            done: true
        },];
        $scope.addTodo = function(){
            if($scope.newTodo.title){
                $scope.newTodo.date = $scope.getDate();
                $scope.newTodo.done = false;
                $scope.list.push($scope.newTodo);
                $scope.newTodo = {};
                $scope.saveTodos();
            }
            else{
                alert('enter title')
            }
        }
       

    }])


})(window.angular);


