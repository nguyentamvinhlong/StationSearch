/**
 * DOM読み込み時に実行される
 */
$().ready(function () {
    HRELoadArea('area', 'line', 'station');

    HRELoadPrefecture('prefecture', 'line', 'station');


});


/*
 エリア情報取得
 http://express.heartrails.com/api/json?method=getAreas
 */

/*
 都道府県情報取得 API
 http://express.heartrails.com/api/json?method=getPrefectures
 */

/*
 路線情報取得 API

 「関東」 に存在する路線名の一覧
 http://express.heartrails.com/api/json?method=getLines&area=%E9%96%A2%E6%9D%B1

 「東京都」 に存在する路線名の一覧
 http://express.heartrails.com/api/json?method=getLines&prefecture=%E6%9D%B1%E4%BA%AC%E9%83%BD
 */

/*
 駅情報取得 API

 「JR 山手線」 に存在する駅の情報の一覧
 http://express.heartrails.com/api/json?method=getStations&line=JR%E5%B1%B1%E6%89%8B%E7%B7%9A
 「新宿」 に合致する駅の情報の一覧
 http://express.heartrails.com/api/json?method=getStations&name=%E6%96%B0%E5%AE%BF
 */
