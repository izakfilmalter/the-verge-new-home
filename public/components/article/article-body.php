<div class="article__body">
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/social/social.php';
        include_once($path);

        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/article/article-body.php';
        include_once($path);



        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/sidebar/sidebar.php';
        include_once($path);
    ?>
</div>