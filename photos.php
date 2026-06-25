<?php
/*
 * @author The Dog
 * @date 6 Sep 2006
 * @update 	
 * 			02/02/2007 added in new links to includes
 * 			05/02/2007 embedded links to photos on flickr - deleted dubai images
 *			24/07/2007 split news into General News and Sport News
 * I am the photo page 
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
	<h2>Photos By Year</h2>
	<ul>
		  <li><a href="<?php echo $EXETEL_HOME_2015 ?>/index.html">2015</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2014 ?>/index.html">2014</a> </li>
		 <li><a href="<?php echo $EXETEL_HOME_2013 ?>/index.html">2013</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2012 ?>/index.html">2012</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2011 ?>/index.html">2011</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2010 ?>/index.html">2010</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2009 ?>/index.html">2009</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2008 ?>/index.html">2008</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2007 ?>/index.html">2007</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2006 ?>/index.html">2006</a> </li>
		<li><a href="<?php echo $EXETEL_HOME_2005 ?>/index.html">2005</a> </li>
	</ul>
	<h2>Photos of kids</h2>
	<ul>
		<li><a href="/kids/index.php">Kids</a> </li>
	</ul>
	<h2>Photos of Cat and Dog's Wedding</h2>
	<ul>
		<li><a href="<?php echo $EXETEL_HOME_WEDDING ?>/index.html">Wedding</a> </li>
	</ul>
        
					
        <hr class="hide">
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
  
   
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>
