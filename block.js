var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    var stack = [],
        movesCount = 1;
    $scope.numBlocks;
    $scope.moves;
    $scope.deck = [];
    $scope.deckInit = 1;
    $scope.movesArr = [];
    $scope.displayNoOfBlocks = false
    $scope.message = "";
    $scope.displayStack = [];
    $scope.movesIteration = function () {
        if ($scope.numBlocks > 0) {
            for (var i = 1; i <= $scope.numBlocks; i++) {
                $scope.deck.push(i);
                stack = $scope.deck;
                $scope.displayNoOfBlocks = true;
            }
        }
    }
    $scope.stackFormation = function (a, b, c) {
        if (movesCount < $scope.moves) {
            $scope.message = " Your " + movesCount + " moves done. Enter values and press submit to continue.";
            $scope.displayNoOfBlocks = true;
            movesCount++;
        } else {
            $scope.displayNoOfBlocks = false;
        }
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        var tempArr1 = [],
            tempArr2 = [],
            tempArr3 = [],
            tempArrStack = [];
        for (var i = 0; i < a; i++) {
            tempArr1.push(stack[i]);
        }
        for (var i = a; i < b + a; i++) {
            tempArr2.push(stack[i]);
        }

        for (var i = b + a; i < $scope.deck.length; i++) {
            tempArr3.push(stack[i]);
        }
        tempArrStack.push(tempArr1);
        tempArrStack.push(tempArr3);
        tempArrStack = tempArrStack.flat(Infinity);
        tempArr3 = [];
        for (var i = 0; i < c; i++) {
            tempArr3.push(tempArrStack[i]);
        }
        tempArr2.reverse();
        tempArrStack.splice(0, c);
        tempArr1 = [];
        tempArr1.push(tempArr3);
        tempArr1.push(tempArr2);
        tempArr1.push(tempArrStack);
        tempArr1 = tempArr1.flat(Infinity);
        console.log(tempArr1);
        stack = tempArr1;
        $scope.displayStack = stack;
    }


});
