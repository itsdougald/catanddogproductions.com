<?php
/*
 * @author The Dog
 * @date 6 Sep 2006
 * @update 	
 * 			02/02/2007 added in new links to includes
 * 			05/02/2007 embedded links to photos on flickr - deleted dubai images
 *			24/07/2007 split news into General News and Sport News
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
	
<object id="bplayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="320" height="276"><embed name="bplayer" src="http://static.bambuser.com/r/player.swf?username=Itsdougald" type="application/x-shockwave-flash" width="320" height="276" allowfullscreen="true" allowscriptaccess="always" wmode="opaque"></embed><param name="movie" value="http://static.bambuser.com/r/player.swf?username=Itsdougald"></param><param name="allowfullscreen" value="true"></param><param name="allowscriptaccess" value="always"></param><param name="wmode" value="opaque"></param></object>
	
	<!-- <h2>RSS Feed</h2>
	<p>Catch all the up to date headlines and news via the Cat and Dog Production <a href="catanddogfeed.xml"><img src="/images/rss.gif" alt="">Feed</a></p>.-->
    
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
  
   
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>

