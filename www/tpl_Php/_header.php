<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="/icon.png" />
    <link rel="canonical" href="<?php echo 'https://breitenberg.ru' . $_SERVER['REQUEST_URI'] ?>" />
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <?php include '_metaSEO.php'; ?>

    <link href="/Styles/main.css" rel="stylesheet">

    <script src="/Scripts/all.js"></script>
    <?php 
        if(isset($_GET['p'])){
            echo '<script src="/Scripts/Page.js"></script>';
        }
     ?>

    
</head>