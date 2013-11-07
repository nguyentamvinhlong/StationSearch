angular.module('StationSearch', ['ClientPaginate'])

    // コントローラの定義
    .controller('PaginationController', function ($scope) {
        $scope.stations = [];

        // データ生成
        for (var i = 0; i < 20; i++) {
            var station = {
                "id": i,
                "line": "京王線",
                "name": "新宿"
            };
            $scope.stations.push(station);
        }

        $scope.rowsPerPage = 10;

    });

angular.module('ClientPaginate', [])

/**
 * TODO ページに表示するコンテンツを切り出します。
 */
    .filter('paginate', function (Paginator) {
        return function (input, rowsPerPage) {

            if (!input) {
                return input;
            }

            if (rowsPerPage) {
                Paginator.rowsPerPage = rowsPerPage;
            }

            Paginator.itemCount = input.length;

            return input.slice(parseInt(Paginator.page * Paginator.rowsPerPage), parseInt((Paginator.page + 1) * Paginator.rowsPerPage + 1) - 1);
        }
    })

/**
 * 特定区間の配列を作成します。
 */
    .filter('forLoop', function () {
        return function (input, start, end) {
            input = new Array(end - start);
            for (var i = 0; start < end; start++, i++) {
                input[i] = start;
            }

            return input;
        }
    })

    .service('Paginator', function ($rootScope) {
        this.page = 0;
        // this.rowsPerPage = 10;
        this.itemCount = 0;

        /**
         * 現在のページをセットします。
         * @param page
         */
        this.setPage = function (page) {
            if (page > this.pageCount()) {
                return;
            }

            this.page = page;
        };

        /**
         * ページを進めます。
         */
        this.nextPage = function () {
            if (this.isLastPage()) {
                return;
            }

            this.page++;
        };

        /**
         * ページを戻します。
         */
        this.perviousPage = function () {
            if (this.isFirstPage()) {
                return;
            }

            this.page--;
        };


        /**
         *
         * @returns {boolean}
         */
        this.isFirstPage = function () {
            return this.page == 0;
        };

        /**
         *
         * @returns {boolean}
         */
        this.isLastPage = function () {
            return this.page == this.pageCount() - 1;
        };


        /**
         * 最初のページにします。
         */
        this.firstPage = function () {
            this.page = 0;
        };

        /**
         * 最後のページにします。
         */
        this.lastPage = function () {
            this.page = this.pageCount() - 1;
        };


        /**
         * ページ数を計算する
         * @returns {number}
         */
        this.pageCount = function () {
            // 全データ数 / 表示データ数
            return Math.ceil(
                parseInt(this.itemCount) / parseInt(this.rowsPerPage)
            );
        }
    })

    .directive('paginator', function factory() {
        return {
            restrict: 'E', // 'E':Element, 'A':Attribute, 'C':Class, 'M':Comment
            controller: function ($scope, Paginator) {
                $scope.paginator = Paginator;
            },
            templateUrl: 'paginationControl.html'
        };
    });
