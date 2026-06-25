<?php
/*
 * @author The Dog
 * @date 6 Sep 2006
 * @update 	
 * 			02/02/2007 added in new links to includes
 * 			05/02/2007 embedded links to photos on flickr - deleted dubai images
 *
 * I am the page describing the Cat's hen do!
 */
?>
<?php 
 	include '../application.php'; 
	include $ROOT.'/includes/header.php'; 
?>	
<body id="catanddog" class="homepage">
<?php
	include $ROOT.'/includes/tab.php'; 
 	include $ROOT.'/includes/side.php'; ?>

	<div id="mainContent">
	<h1>Hen Do</h1>
	<p>
	Not much information has been disclosed, but a few photos have been located..
	</p>
	<p>
	Dec 1st 2006: Cat in the UK on her hen do...
	</p>
	<p>
	<a href="http://www.flickr.com/photos/catanddog/412244515/" title="Naughty Cat!" target="new"><img src="http://farm1.static.flickr.com/179/412244515_c48511406e_m.jpg" width="180" height="240" alt="Naughty Cat!" /></a>
    </p>
    <p>
	Mar 24th 2007: Cat in Aus on her hen do...
	</p>
	<p>
	<a href="<?echo $EXETEL_HOME_2007?>/03Mar/cats.hen.do!/index.html" title="Naughty Cat!" target="new"><img src="http://farm1.static.flickr.com/165/438184463_dee4cbb980_m.jpg" width="180" height="240" alt="PICT0106" /></a>
    </p>
        <hr class="hide">
        
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
 
   
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>
