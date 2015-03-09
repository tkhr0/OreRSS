$(function(){
    bind_checkNickname();
    bind_checkPasswd();
    bind_checkRePasswd();
});

/*
 * エラー状態を管理
 */
var clearFlag = {
    "nickname":false,
    "password":false,
    "repassword":false
};

/*
 * イベントのバインド
 */
var bind_checkRePasswd = function(){
    var preString = "";                     // 比較対象文字列
    $("#inputRePassword").keyup(function(){   // すべてのキー操作にバインド
        var string = $(this).val();         // テキストボックスの値取得
        if(string != preString){            // 文字列比較
            if(checkRePasswd()){            // 違ったら呼び出し
                $("#btn_signup").removeAttr("disabled"); // 登録ボタンを有効化
            }else{
                $("#btn_signup").attr("disabled", true); // 登録ボタンを無効化
            }
            preString = string;             // 文字列入れ替え
        }
    });
};


/*
 * パスワードの再入力部分についてチェックする
 */
var checkRePasswd = function(){
    // パスワードの同一性チェック
    if($("#inputPassword").val() != $("#inputRePassword").val()){
        wornRePassword("パスワードが合致していません");
        return false;
    }else{
        wornRePassword("");
        return true;
    }

    return true;
};

/*
 * パスワード再入力に関する警告文を操作する
 */
var wornRePassword = function(wornString){
    $("#wornRePassword").empty().append(wornString);
};

