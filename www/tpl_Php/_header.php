<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/icon.png" />
    <link rel="canonical" href="<?php echo 'https://breitenberg.ru' . $_SERVER['REQUEST_URI'] ?>" />
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <?php include '_metaSEO.php'; ?>

    <link href="/Styles/fonts.css" rel="stylesheet">
    <link href="/Styles/slick.css" rel="stylesheet">
    <link href="/Styles/slick-theme.css" rel="stylesheet">
    <link href="/Styles/jquery.mCustomScrollbar.css" rel="stylesheet">
    <link href="/Styles/animations.css" rel="stylesheet">
    <link href="/Styles/animations-ie-fix.css" rel="stylesheet">
    <link href="/Styles/style.css" rel="stylesheet">
    <link href="/Styles/page.css" rel="stylesheet">
    <link href="/Styles/modal.css" rel="stylesheet">

    <script src="/Scripts/jquery-3.3.1.min.js"></script>
    <script src="/Scripts/App.js"></script>
    <?php 
        if(isset($_GET['p'])){

            echo '<script src="/Scripts/Page.js"></script>';
        }
     ?>
    
    <script src="/Scripts/slick.min.js"></script>
    <script src="/Scripts/jquery.waypoints.min.js"></script>
    <script src="/Scripts/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="/Scripts/css3-animate-it.js"></script>
    <script src="/Scripts/mustache.min.js"></script>

    
</head>