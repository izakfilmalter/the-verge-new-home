<html>
<head>
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/head/head.php';
        include_once($path);
    ?>
</head>

<body id="article">

<div class="main">
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/nav/nav.php';
        include_once($path);

        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/article/article-title.php';
        include_once($path);

        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/article/article-body.php';
        include_once($path);
    ?>
</div>
<?php
    $path = $_SERVER['DOCUMENT_ROOT'];
    $path .= '/components/footer/footer.php';
    include_once($path);
?>
</body>
</html>
