<html>
  <script> pageName = "<?php echo $_GET['p']; ?>"; </script>
  <?php include 'tpl_Php/_header.php'; ?>



  <body class="pageTpl" id="sec">
    <style>body{ background: #ffe000;}  </style>
    <?php include 'tpl_Js/tpl_Js_page.php'; ?>


    <?php include 'tpl_Php/_bootLoader.php'; ?>
    <?php include 'tpl_Php/_topMenu.php'; ?>

    <div class="mainPage"></div>

    <input class="gam" id="menu_bhp2" type="checkbox" style="display: none;">
    <?php include 'tpl_Php/_modal.php'; ?>
    <?php include 'tpl_Php/_footer.php'; ?>
  </body>
</html>