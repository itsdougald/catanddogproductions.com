<?php
/*
 * @author The Dog
 * @date 01/02/2007
 *
 */
?>
<!-- application -->
<?php

 # require_once "dropbox-sdk/Dropbox/autoload.php"; 
 
 switch ($_SERVER["SERVER_NAME"]) {
	case catanddogproductions-dev.com:
		$GLOBALS['APPS_NAME'] = catanddogproductions_dev;
		$GLOBALS['ROOT'] = $_SERVER["DOCUMENT_ROOT"];
		$GLOBALS['WEB_PATH'] = $_SERVER["HTTP_REFERER"];
		$GLOBALS['EXETEL_HOME'] = "/album/";
   		break;
   	case catanddogproductions-stage.com:
		$GLOBALS['APPS_NAME'] = catanddogproductions_stage;
		$GLOBALS['ROOT'] = $_SERVER["DOCUMENT_ROOT"];
		$GLOBALS['WEB_PATH'] = $_SERVER["HTTP_REFERER"];
		$GLOBALS['EXETEL_HOME'] = "/album/";
   		break;
	default:
		$GLOBALS['APPS_NAME'] = catanddogproductions;
		$GLOBALS['ROOT'] = $_SERVER["DOCUMENT_ROOT"];
		$GLOBALS['WEB_PATH'] = $_SERVER["HTTP_REFERER"];
		$GLOBALS['EXETEL_HOME_2005'] = "/album/2005";
   		$GLOBALS['EXETEL_HOME_2006'] = "/album/2006";
   		$GLOBALS['EXETEL_HOME_2007'] = "/album/2007";
   		$GLOBALS['EXETEL_HOME_2008'] = "/album/2008";
		$GLOBALS['EXETEL_HOME_2009'] = "/album/2009";
		$GLOBALS['EXETEL_HOME_2010'] = "/album/2010";
   		$GLOBALS['EXETEL_HOME_2011'] = "/album/2011";
        	$GLOBALS['EXETEL_HOME_2012'] = "/album/2012";
   		$GLOBALS['EXETEL_HOME_2013'] = "/album/2013";
		$GLOBALS['EXETEL_HOME_2014'] = "/album/2014";
                $GLOBALS['EXETEL_HOME_2015'] = "/album/2015";
                $GLOBALS['EXETEL_HOME_2016'] = "/album/2016";
   		$GLOBALS['EXETEL_HOME_WEDDING'] = "/album/wedding";
   		$GLOBALS['EXETEL_HOME_WORLDTRIP'] = "/album/world.trip";
		$GLOBALS['EXETEL_HOME_SOPHIA'] = "/album/bubba";
                break;
	}

    /* $GLOBALS['EXETEL_HOME'] = "http://home.exetel.com.au/catanddogproductions/photos/album/";
	$GLOBALS['EXETEL_HOME_WEDDING'] = "http://home.exetel.com.au/catanddogproductions/photos/album/Wedding.Trip.Home/06.Wedding.Fri.11.May.2007/";
	**/

?>
<!-- //application -->
