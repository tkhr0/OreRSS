<?php

class Controller_Orerss extends Controller{
    public function action_index(){

        return Response::forge(View_Smarty::forge('orerss/index'));
    }

    // テストコード
    public function action_registNewFeed($mylist_url){
        $rss = new \Model_Rss();
        $rss->regist_new_feed($mylist_url);
    }

    // テストコード
    public function action_updateFeed($feed_id){
        echo '<pre>';
        var_dump((new \Model_Rss())->update_feed($feed_id));
        echo '</pre>';
    }



}

