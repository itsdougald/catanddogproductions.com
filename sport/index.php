<?php
/*
 * @author The Dog
 * @date 6 Sep 2006
 * @update 	
 * 			02/02/2007 added in new links to includes
 * 			05/02/2007 embedded links to photos on flickr - deleted dubai images
 *
 * I am the page describing our trip to Australia during our world travels
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
	<h1>Sport</h1>
        <ul>
            <li><a href="porkies.php">The Porkies</a></li>
            <li><a href="wackers.php">Wackers</a></li>
            <li><a href="ashes.php">Ashes</a></li>
			<li><a href="golf.php">Golf</a></li>
        </ul>
	<!-- <p>
	Whilst the Cat's gone <a href="football.php">football</a> crazy there's talk of the dog
	helping out with her ladies football she loves, lives and breaths; Queens Park 2. Unfortunately QP 2 
	lost in the semi-finals of their league promotion play-offs to Easts who went onto beat QP 1. 
	Annoyingly QP2 had beat the your younger counterparts QP1 twice in the season but failed to finish above
	them. Perhaps if QP2 had met Easts in the final the end of season celebrations could have been so much 
	bigger....?
    </p>
    <p>
    The Dog has gone <a href="tennis.php">tennis</a> mad with the Wackey Constitution called "The Wackers". Wacking since June 2005 the club is 
    going from strength to strength...
    </p>
     <p>
   Adding to this <a href="golf.php">golf</a> has not been top of the agenda but will blog my scores as and when I play...
    </p> -->
        <hr class="hide">
      </div>
      <!-- closes #mainContent-->
    </div>
    <!-- closes #mBody-->
  </div>
 
   
  <!-- footer  -->
  <?php include $ROOT.'/includes/footer.php'; ?>