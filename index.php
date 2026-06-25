<?php
/*
 * @author The Dog
 * @date 6 Sep 2006
 * I am the index page
 */
?>
<?php
 	include 'application.php';
	include $ROOT.'/includes/header.php';
?>
<body id="catanddog" class="homepage">
<?php
	include $ROOT.'/includes/tab.php';
 	include $ROOT.'/includes/side.php'; ?>


	<div id="mainContent">
	<h1>Cat And Dog Productions</h1>
	<p>Cat and Dog productions draws you into our lives since we left the rugged shores of England and living down under..</p>
<div id="cse" style="width: 100%;">Loading</div>
<script src="http://www.google.com/jsapi" type="text/javascript"></script>
<script type="text/javascript">
  google.load('search', '1', {language : 'en'});
  google.setOnLoadCallback(function() {
    var customSearchControl = new google.search.CustomSearchControl('017655845117816283000:zsrspc7gqsm');
    customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
    customSearchControl.draw('cse');
  }, true);
</script>
<link rel="stylesheet" href="http://www.google.com/cse/style/look/default.css" type="text/css" />
	<h2>2017</h2>
	<h3>General</h3>
  <ul>
	  <li></li>
  </ul>
  <h3>Sport</h3>
  <ul>
	  <li></li>
  </ul>
  <h2>RSS Feed</h2>
	<p>Catch all the up to date headlines and news via the Cat and Dog Production <a href="catanddogfeed.xml"><img src="/images/rss.gif" alt="">Feed</a></p>.

        <hr class="hide">
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>
