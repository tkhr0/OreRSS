
        <div id="contents">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-push-4 col-lg-8 col-lg-push-4">
                      <!-- right pain -->
                      {include file='./mylist_list.tpl' mylists=$mylists}
                    </div>
                    <!-- left pain -->
                    <div class="col-md-4 col-md-pull-8 col-lg-4 col-lg-pull-8" id="left-pain">
                        {include file='./feed_list.tpl' feed_list_unread=$feed_list.unread feed_list_read=$feed_list.read}
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <footer>
        </footer>



