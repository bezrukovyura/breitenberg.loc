<?php
    if(isset($_GET['p'])){
        $url = '../jsonData/' . $_GET['p'] . '.js';
        $content = file_get_contents($url);
        $json = json_decode($content, true);
        echo '<title>'.$json['metaTitle'].'</title>';
        echo '<meta name="description" content="'.$json['metaDescription'].'">';
    }
    else{
        echo '<title>Моющие и дезинфицирующие средства, уборочный инвентарь, клининг. ООО "Брайтенберг" в Мурманске.</title>';
        echo '<meta name="description" content="Профессиональные моющие и дезинфицирующие средства, оборудование и инвентарь для пищевых производств и индустрии профессионального клининга. ГК Технология Чистоты, Grass, Veiro, FBK, IPC, Karcher">';
    }
?>
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="yandex-verification" content="ece2f87bb30f59d0" />
<meta name="google-site-verification" content="-upzF3mDyDYCtPVAX-CB9jfV30-HgzTw6ujjmXt9hGE" />
