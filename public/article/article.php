<html>
<head>
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/head/head.php';
        include_once($path);
    ?>
</head>

<body>

<?php
    $path = $_SERVER['DOCUMENT_ROOT'];
    $path .= '/components/nav/nav.php';
    include_once($path);
?>

<div class="container">
    <?php
        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/hero/hero.php';
        include_once($path);

        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/video/video.php';
        include_once($path);

        $path = $_SERVER['DOCUMENT_ROOT'];
        $path .= '/components/cards/cards-one.php';
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
