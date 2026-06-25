<?php
/*
 * Created on 6 Sep 2006 by Neil Guppy aka Dougal ask The Dog
 *
 * I am the homepage to the cat and dog dot dom productions
 */
?>
<?php 
 	include '../../application.php'; 
	include $ROOT.'/includes/header.php'; 
?>	
<body id="catanddog" class="homepage">
<?php
	include $ROOT.'/includes/tab.php'; 
 	include $ROOT.'/includes/side.php'; ?>

	<div id="mainContent">
	<h1>Backpacking Feb - May 2005</h1>
	<p>
	On <strong>Wednesday 10th February 2005</strong> we boarded a flight to travel the world with Australia in our sites.
	It is an adventure that still continues, in our eyes, but at present we are settled in Coogee 
	(name is said to be taken from a local Aboriginal word koojah which means "smelly place", or "stinking seaweed") in Sydney's 
	Eastern Suburbs....</p>
	<p>
	Listed below are the countries we visited en-route to Australia <strong>&raquo;</strong>
	</p>
	<ul>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/dubai.php" title="First stop: Dubai">Dubai</a></li>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/dubai.php#oman" title="Interlude stop stop: Oman">Oman</a></li>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/thailand.php" title="Second stop: Thailand">Thailand</a></li>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/malaysia.php" title="Third stop: Malaysia">Malaysia</a></li>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/malaysia.php#singapore" title="Fourth stop: Singapore">Singapore</a></li>
            <li><a href="<?php echo $APPS_PATH_DEFAULT;?>/travel/backpacking/australia.php" title="Last stop: Australia">Australia</a></li>
	</ul>
	
	<hr class="hide">
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
  <!-- closes #container -->
   
  <!-- footer counter -->
  <?php include $ROOT.'/includes/footer.php'; ?>
