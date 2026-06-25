<?php
/*
 * @Author The Dog 
 * @Created 02 February 2007
 * 
 * I am the page which displays  
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
	<h2>RSS Feed</h2>
	<p>
	If you have an RSS reader then please subscribe to our up to date news <a href="catanddogfeed.xml"><img src="/images/rss.gif" alt="" title="Subscribe to me!"></a> feeds. If you're unsure what software to use to read our RSS feed
	then download <a href="http://www.mozilla.com/en-US/thunderbird/"><a href="catanddogfeed.xml"><img src="/images/thunderbird.jpg" alt="" title="thunder, hoooooooooooo!" width="23" height="23"></a> Thunderbird. Not only can you set this up to read emails but also subscribe to various news feeds including <strong>http://www.catanddogproductions.com!</strong>
	</p>
	
	<hr class="hide">
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
 
   
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>