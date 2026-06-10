<?php include("includes/header.php"); ?>
<?php include("functions/lock.php"); ?>

<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

include("functions/serverData.php");
$server = new ServerData();

$regionId = isset($_SESSION["userObj"]->data->region_id) ? $_SESSION["userObj"]->data->region_id : 1;

$postArray = array("user_id" => $_SESSION["userObj"]->data->id, "region_id" => $regionId);
$returnData = json_decode($server->withTokenGetSeverData($postArray, "get-signal-bundles"));


$postFellyRegion = array("user_id" => $_SESSION["userObj"]->data->id);
$returnTotalFellySold = json_decode($server->withTokenGetSeverData($postFellyRegion, "fely/region-total"));

// echo '<pre>';
// print_r($returnTotalFellySold);
// echo '</pre>';
// exit;


$FelllySale = floatval(str_replace(",", "", $returnTotalFellySold->data->total_bonus_fely));


$bundleDatas = array();
if ($returnData->success) {
    $bundleDatas = $returnData->data;
} else {
    $error = '<div class="alert alert-danger" role="alert">' . $returnData->data->error . '</div>';
    $bundleDatas = [];
}

// echo '<pre>';
// print_r($postArray);
// print_r($bundleDatas);
// echo '</pre>';
// exit;


//get User Heads ------------------------------------------------------------
$userHeads = array();
$returnUserHead = json_decode($server->withTokenGetSeverData($postArray, "get-user-heads"));

if ($returnUserHead->success) {
    $userHeads = $returnUserHead->data;
} else {
    $error = '<div class="alert alert-danger" role="alert">' . $returnUserHead->data->error . '</div>';
    $userHeads = [];
}


//get userwalletBalace
$faliciaMatrixWalletBalance = 0;
$returnUserWalletBalance = json_decode($server->withTokenGetSeverData($postArray, "user-wallet-balance"));

if ($returnUserWalletBalance->success) {
    $faliciaMatrixWalletBalance = $returnUserWalletBalance->data->balance;
} else {
    $error = '<div class="alert alert-danger" role="alert">' . $returnUserWalletBalance->data->error . '</div>';
    $faliciaMatrixWalletBalance = 0;
}

// echo '<pre>';
// print_r($UserWalletBalance);
// echo '</pre>';
// exit;


//GET felly USDT price
// $url = 'https://www.geckoterminal.com/polygon_pos/pools/0xc810868393de87e0daa3b1f4e90c6738192d2a06';
// $numericValue = 0;
// // Fetch the HTML content
// $html = file_get_contents($url);
// if ($html === false) {
//     die('Failed to fetch the URL content.');
// }
// // Load the HTML into a DOMDocument
// $dom = new DOMDocument();
// libxml_use_internal_errors(true); // Suppress errors for malformed HTML
// $dom->loadHTML($html, LIBXML_NOERROR | LIBXML_NOWARNING);
// libxml_clear_errors();

// // Find the span with id="pool-price-display"
// $xpath = new DOMXPath($dom);
// $node = $xpath->query('//span[@id="pool-price-display"]');

// if ($node->length > 0) {
//     // Get the inner span's content
//     $innerSpan = $node->item(0)->getElementsByTagName('span')->item(0);
//     if ($innerSpan) {
//         $value = $innerSpan->nodeValue;
//         // Remove the dollar sign and output the value
//         $numericValue = str_replace('$', '', $value);
//         //echo "Extracted Value: $numericValue\n";
//     } else {
//         //echo "Inner span not found.\n";
//     }
// } else {
// }
// $pollUsdtPrice = str_replace('$', '', $numericValue);
//END Getting felly USDT price

$getFelly = array("user_id" => $_SESSION["userObj"]->data->id, "currency" => 'fely');
$returnUserWalletBalance = json_decode($server->withTokenGetSeverData($getFelly, "fely/amount"));
$pollUsdtPrice = $returnUserWalletBalance->data->fely_amount;
// echo '<pre>';
// print_r($pollUsdtPrice);
// echo '</pre>';
// exit;




?>

<style>
    .spinner {
        width: 16px;
        height: 16px;
        border: 2px solid #ccc;
        border-top-color: #ffc107;
        border-radius: 50%;
        display: inline-block;
        animation: spin 1s linear infinite;
        margin-right: 8px;
        vertical-align: middle;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>

<!-- Begin page -->
<div id="layout-wrapper">
    <?php include("includes/top-menu.php"); ?>
    <!-- ========== App Menu ========== -->
    <?php include("includes/nav-menu.php"); ?>

    <!-- removeNotificationModal -->
    <div id="removeNotificationModal" class="modal fade zoomIn" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        id="NotificationModalbtn-close"></button>
                </div>
                <div class="modal-body">
                    <div class="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon>
                        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you sure ?</h4>
                            <p class="text-muted mx-4 mb-0">Are you sure you want to remove this Notification ?</p>
                        </div>
                    </div>
                    <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn w-sm btn-danger" id="delete-notification">Yes, Delete It!
                        </button>
                    </div>
                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Left Sidebar End -->
    <!-- Vertical Overlay-->
    <div class="vertical-overlay"></div>

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

        <div class="page-content">


            <!-- First Card -->
            <div class="container-fluid" id="first-card">
                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div
                            class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                            <h4 class="mb-sm-0">Smart Bundle</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                    <li class="breadcrumb-item active">Smart Bundle</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row justify-content-center mt-4">



                    <div class="col-lg-5">

                        <?php if ($_SESSION["userObj"]->data->usdt_polygon_address == "" || $_SESSION["userObj"]->data->usdt_polygon_address == null) { ?>
                            <div class="text-center mb-4">
                                <h4 class="fw-semibold fs-22">Important: Wallet Address Required</h4>
                                <p class="text-muted mb-4 fs-15" style="color: #0AB39C !important;">
                                    "Before buying Smart Bundles, please update your wallet address in your profile"
                                </p>
                            </div>
                            <?php
                            $bundleDatas = [];
                        } else { ?>



                            <div class="text-center mb-4">
                                <h4 class="fw-semibold fs-22">Choose the plan that's right for you</h4>
                                <p class="text-muted mb-4 fs-15" style="color: #0AB39C !important;"> Only
                                    <span style="color: #cdff03 !important;"><?php
                                    echo (14850000 - $FelllySale);
                                    ?> </span>FELY remaining!. <br>This exclusive offer is capped at just 5 Million
                                    FELY.
                                    <br>Grab yours before it’s gone!
                                </p>
                                <div class="d-inline-flex">
                                    <ul class="nav nav-pills arrow-navtabs plan-nav rounded mb-3 p-1" role="tablist">



                                        <li class="nav-item">
                                            <a class="nav-link fw-semibold active" data-bs-toggle="tab" href="#arrow-flex"
                                                role="tab">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-account"></i></span>
                                                <span class="d-none d-sm-block">Staking Plans</span>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link fw-semibold " data-bs-toggle="tab" href="#arrow-premium"
                                                role="tab">
                                                <span class="d-block d-sm-none"><i class="mdi mdi-home-variant"></i></span>
                                                <span class="d-none d-sm-block">Flex Plans</span>
                                            </a>
                                        </li>

                                        <!--<li class="nav-item">-->
                                        <!--    <a class="nav-link fw-semibold " data-bs-toggle="tab"-->
                                        <!--       href="#arrow-Starter" role="tab">-->
                                        <!--        <span class="d-block d-sm-none"><i class="mdi mdi-home-variant"></i></span>-->
                                        <!--        <span class="d-none d-sm-block">Starter Plans</span>-->
                                        <!--    </a>-->
                                        <!--</li>-->



                                    </ul>

                                </div>
                            </div>

                        <?php } ?>
                    </div>
                    <div class="tab-content text-muted">


                        <div class="tab-pane " id="arrow-Starter" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xl-9">

                                    <p style="font-size: 15px;color: #f64c4c;">These Bundles are only available until
                                        February 28, 2025.</p>


                                    <div class="row">
                                        <!--end col-->
                                        <?php
                                        $i = 0;
                                        // echo '----<pre>';
                                        // print_r($bundleDatas);
                                        // echo '****</pre>';
                                        
                                        foreach ($bundleDatas as $bundleData) { ?>
                                            <?php if ($bundleData->bundle_name != 'Free') { ?>

                                                <?php if ($bundleData->bundle_type == "2") { ?>
                                                    <div class="col-lg-4">
                                                        <div class="card pricing-box">
                                                            <div class="card-body p-4 m-2">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-grow-1">
                                                                        <h5 class="mb-1 fw-semibold">
                                                                            <?php echo $bundleData->bundle_name ?>
                                                                        </h5>
                                                                        <p class="text-muted mb-0">Smart Bundle</p>
                                                                    </div>
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light rounded-circle text-primary">
                                                                            <i class="ri-book-mark-line fs-20"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-price-box">
                                                                    <div class="pt-4">
                                                                        <h2><sup><small> USDT</small>
                                                                            </sup><?php echo $bundleData->bundle_amount ?> <span
                                                                                class="fs-13 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>
                                                                        </h2>
                                                                    </div>

                                                                    <div class="pt-1">
                                                                        <h2 class="c-code-2"><sup><small> FELY</small>
                                                                            </sup><?php echo round(($bundleData->bundle_amount / $pollUsdtPrice), 0) ?>
                                                                            <span class="fs-12 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>

                                                                        </h2>
                                                                    </div>
                                                                </div>


                                                                <hr class="my-4 text-muted">
                                                                <div>
                                                                    <ul class="list-unstyled text-muted vstack gap-3">

                                                                        <!-- <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <?php if ($regionId === "1") { ?>
                                                                                    <div class="flex-grow-1">
                                                                                        Signals
                                                                                        <b><?php echo $bundleData->signals ?></b>
                                                                                    </div>
                                                                                <?php } ?>
                                                                            </div>
                                                                        </li> -->
                                                                        <?php if ($bundleData->id == "7") { ?>
                                                                            <li>
                                                                                <div class="d-flex">
                                                                                    <div class="flex-shrink-0 text-success me-1">
                                                                                        <i
                                                                                            class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                    </div>
                                                                                    <div class="flex-grow-1">
                                                                                        Bonus Percentage
                                                                                        <b><?php echo $bundleData->fely_bonus_percentage ?>%</b>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        <?php } ?>
                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Active Period
                                                                                    <b> <?php echo $bundleData->active_period ?>
                                                                                        Year</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <?php if ($bundleData->id != "7") { ?>
                                                                            <li>
                                                                                <div class="d-flex">
                                                                                    <div class="flex-shrink-0 text-success me-1">
                                                                                        <i
                                                                                            class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                    </div>
                                                                                    <div class="flex-grow-1">
                                                                                        FELY Token Amount <b>
                                                                                            <?php echo $bundleData->fely_token_amount ?></b>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        <?php } ?>

                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    FET Token Amount <b>
                                                                                        <?php echo $bundleData->fet_token_amount ?></b>
                                                                                </div>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Max Income
                                                                                    <b> <?php echo $bundleData->max_income ?>
                                                                                        USDT</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                    <div class="mt-4">
                                                                        <a onclick="showBuyOption(<?php echo $bundleData->bundle_amount; ?>,<?php echo $bundleData->id; ?>)"
                                                                            href="#" id="getStartButton"
                                                                            class="btn btn-soft-success w-100 waves-effect waves-light ">Get
                                                                            started</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <?php } ?>
                                            <?php } ?>
                                            <!--end col-->
                                        <?php } ?>
                                    </div>
                                    <!--end row-->
                                </div>
                                <!--end col-->

                            </div>
                        </div>
                        <div class="tab-pane " id="arrow-premium" role="tabpanel">
                            <!--end row-->
                            <div class="row justify-content-center">
                                <div class="col-xl-9">
                                    <div class="row">
                                        <!--end col-->
                                        <?php
                                        $i = 0;
                                        foreach ($bundleDatas as $bundleData) { ?>

                                            <?php if ($bundleData->bundle_name != 'Free') { ?>
                                                <?php if ($bundleData->bundle_type == "1") { ?>
                                                    <div class="col-lg-4">
                                                        <div class="card pricing-box">
                                                            <div class="card-body p-4 m-2">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-grow-1">
                                                                        <h5 class="mb-1 fw-semibold">
                                                                            <?php echo $bundleData->bundle_name ?>
                                                                        </h5>
                                                                        <p class="text-muted mb-0">Smart Bundle</p>
                                                                    </div>
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light rounded-circle text-primary">
                                                                            <i class="ri-book-mark-line fs-20"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="d-price-box">
                                                                    <div class="pt-4">
                                                                        <h2><sup><small> USDT</small>
                                                                            </sup><?php echo $bundleData->bundle_amount ?> <span
                                                                                class="fs-13 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>
                                                                        </h2>
                                                                    </div>

                                                                    <div class="pt-1">
                                                                        <h2 class="c-code-2"><sup><small> FELY</small>
                                                                            </sup><?php echo round(($bundleData->bundle_amount / $pollUsdtPrice), 0) ?>
                                                                            <span class="fs-12 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>

                                                                        </h2>
                                                                    </div>
                                                                </div>


                                                                <hr class="my-4 text-muted">
                                                                <div>
                                                                    <ul class="list-unstyled text-muted vstack gap-3">

                                                                        <!-- <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Signals
                                                                                    <b><?php echo $bundleData->signals ?></b>
                                                                                </div>
                                                                            </div>
                                                                        </li> -->
                                                                        <?php if ($bundleData->id == "7") { ?>
                                                                            <li>
                                                                                <div class="d-flex">
                                                                                    <div class="flex-shrink-0 text-success me-1">
                                                                                        <i
                                                                                            class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                    </div>
                                                                                    <div class="flex-grow-1">
                                                                                        Bonus Percentage
                                                                                        <b><?php echo $bundleData->fely_bonus_percentage ?>%</b>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        <?php } ?>
                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Active Period
                                                                                    <b> <?php echo $bundleData->active_period ?>
                                                                                        Year</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <?php if ($bundleData->id != "7") { ?>
                                                                            <li>
                                                                                <div class="d-flex">
                                                                                    <div class="flex-shrink-0 text-success me-1">
                                                                                        <i
                                                                                            class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                    </div>
                                                                                    <div class="flex-grow-1">
                                                                                        FELY Token Amount <b>
                                                                                            <?php echo $bundleData->fely_token_amount ?></b>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        <?php } ?>

                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    FET Token Amount <b>
                                                                                        <?php echo $bundleData->fet_token_amount ?></b>
                                                                                </div>
                                                                            </div>
                                                                        </li>

                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Max Income
                                                                                    <b> <?php echo $bundleData->max_income ?>
                                                                                        USDT</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                    <div class="mt-4">
                                                                        <a onclick="showBuyOption(<?php echo $bundleData->bundle_amount; ?>,<?php echo $bundleData->id; ?>)"
                                                                            href="#" id="getStartButton"
                                                                            class="btn btn-soft-success w-100 waves-effect waves-light ">Get
                                                                            started</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <?php } ?>
                                            <?php } ?>
                                            <!--end col-->
                                        <?php } ?>
                                    </div>
                                    <!--end row-->
                                </div>
                                <!--end col-->

                            </div>
                            <!--end row-->
                        </div>
                        <div class="tab-pane active" id="arrow-flex" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xl-9">

                                    <div class="row">
                                        <?php
                                        $i = 0;
                                        foreach ($bundleDatas as $bundleData) { ?>
                                            <?php if ($bundleData->bundle_name != 'Free') { ?>
                                                <?php if ($bundleData->bundle_type == "2") { ?>

                                                    <div class="col-lg-4">
                                                        <div class="card pricing-box">
                                                            <div class="card-body p-4 m-2">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="flex-grow-1">
                                                                        <h5 class="mb-1 fw-semibold">
                                                                            <?php echo $bundleData->bundle_name ?>
                                                                        </h5>
                                                                        <p class="text-muted mb-0">Smart Bundle</p>
                                                                    </div>
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light rounded-circle text-primary">
                                                                            <i class="ri-book-mark-line fs-20"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="d-price-box">
                                                                    <div class="pt-4">
                                                                        <h2><sup><small> USDT</small>
                                                                            </sup><?php echo $bundleData->bundle_amount ?> <span
                                                                                class="fs-13 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>
                                                                        </h2>
                                                                    </div>

                                                                    <div class="pt-1">
                                                                        <h2 class="c-code-2"><sup><small> FELY</small>
                                                                            </sup><?php echo round(($bundleData->bundle_amount / $pollUsdtPrice), 0) ?>
                                                                            <span class="fs-12 text-muted">/
                                                                                <?php echo $bundleData->active_period ?> Year</span>
                                                                        </h2>
                                                                    </div>
                                                                </div>

                                                                <hr class="my-4 text-muted">
                                                                <div>
                                                                    <ul class="list-unstyled text-muted vstack gap-3">
                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Bonus Percentage
                                                                                    <b><?php echo $bundleData->fely_bonus_percentage ?>%</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>



                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Active Period
                                                                                    <b> <?php echo $bundleData->active_period ?>
                                                                                        Year</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <!-- <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    FELY Token Amount <b>
                                                                                        <?php echo $bundleData->fely_token_amount ?></b>
                                                                                </div>
                                                                            </div>
                                                                        </li> -->
                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    FET Token Amount <b>
                                                                                        <?php echo $bundleData->fet_token_amount ?></b>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="d-flex">
                                                                                <div class="flex-shrink-0 text-success me-1">
                                                                                    <i
                                                                                        class="ri-checkbox-circle-fill fs-15 align-middle"></i>
                                                                                </div>
                                                                                <div class="flex-grow-1">
                                                                                    Max Income
                                                                                    <b> <?php echo $bundleData->max_income ?>
                                                                                        USDT</b>
                                                                                </div>
                                                                            </div>
                                                                        </li>

                                                                    </ul>
                                                                    <div class="mt-4">
                                                                        <a onclick="showBuyOption(<?php echo $bundleData->bundle_amount; ?>,<?php echo $bundleData->id; ?>)"
                                                                            href="#" id="getStartButton"
                                                                            class="btn btn-soft-success w-100 waves-effect waves-light ">Get
                                                                            started</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <?php } ?>
                                            <?php } ?>
                                            <!--end col-->
                                        <?php } ?>
                                    </div>
                                    <!--end row-->
                                </div>
                                <!--end col-->

                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
            </div>


            <!-- 2nd Card -->
            <div class="container-fluid d-none" id="second-card">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div
                            class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                            <h4 class="mb-sm-0">GET YOUR SMART BUNDLE TODAY</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Pages</a></li>
                                    <li class="breadcrumb-item active">Signals Bundles</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->
                <!-- start page title -->
                <div class="row">
                    <div class="col-lg-6 col-xl-6">
                        <div class="card card-height-100">
                            <div class="card-header align-items-center border-0 d-flex">
                                <h4 class="card-title mb-0 flex-grow-1">Signals Bundle Information</h4>
                            </div><!-- end cardheader -->
                            <div class="card-body p-0">
                                <div class="tab-content p-0">
                                    <div class="tab-pane active">
                                        <div class="p-3 bg-warning-subtle">
                                            <div class="float-end ms-2">
                                                <h6 class="text-warning mb-0">USDT : <span id="usdtBundlesBalance"
                                                        class="text-body">
                                                    </span>
                                                </h6>
                                            </div>
                                            <h6 class="mb-0 text-danger">Smart Bundle Amount </h6>
                                        </div>


                                        <div class="p-3">
                                            <div class="row">
                                                <div class="mt-2 pt-2">

                                                    <div style="display:none;" class="mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Package Amout:</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0" id="PkgAmt"></h6>
                                                        </div>
                                                    </div>



                                                    <div class="d-flex mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Life Time Enrolment Fee:</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0" id="RegFee"></h6>
                                                        </div>
                                                    </div>


                                                    <div class="d-flex mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Total USDT Amount:</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0" id="totalUsdAmt"></h6>
                                                        </div>
                                                    </div>
                                                    <br /><br />





                                                    <div class="d-flex mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Total FELY Amount :</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0 text-success" id="TtlAmt"></h6>
                                                        </div>
                                                    </div>


                                                    <div class="d-flex mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Minimum Wallet Balance</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0">10 FELY</h6>
                                                        </div>
                                                    </div>

                                                    <div class="d-flex mb-2">
                                                        <div class="flex-grow-1">
                                                            <p class="fs-13 mb-0">Total Wallet balance required to buy
                                                                this bundle.</p>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0" id="totalRequired"></h6>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <!--                                            <div class="p-3">-->
                                        <!--                                                <div class="row">-->
                                        <!--                                                    <div class="mt-2 pt-2">-->
                                        <!---->
                                        <!--                                                        <div style="display:none;" class="mb-2">-->
                                        <!--                                                            <div class="flex-grow-1">-->
                                        <!--                                                                <p class="fs-13 mb-0">Package Amout:</p>-->
                                        <!--                                                            </div>-->
                                        <!--                                                            <div class="flex-shrink-0">-->
                                        <!--                                                                <h6 class="mb-0" id="PkgAmt"></h6>-->
                                        <!--                                                            </div>-->
                                        <!--                                                        </div>-->
                                        <!---->
                                        <!--                                                        <div class="d-flex mb-2">-->
                                        <!--                                                            <div class="flex-grow-1">-->
                                        <!--                                                                <p class="fs-13 mb-0">Life Time Enrollment Fee:</p>-->
                                        <!--                                                            </div>-->
                                        <!--                                                            <div class="flex-shrink-0">-->
                                        <!--                                                                <h6 class="mb-0" id="RegFee"></h6>-->
                                        <!--                                                            </div>-->
                                        <!--                                                        </div>-->
                                        <!--                                                        <div class="d-flex mb-2">-->
                                        <!--                                                            <div class="flex-grow-1">-->
                                        <!--                                                                <p class="fs-13 mb-0">Total Amount</p>-->
                                        <!--                                                            </div>-->
                                        <!--                                                            <div class="flex-shrink-0">-->
                                        <!--                                                                <h6 class="mb-0 text-success" id="TtlAmt"></h6>-->
                                        <!--                                                            </div>-->
                                        <!--                                                        </div>-->
                                        <!---->
                                        <!--                                                    </div>-->
                                        <!--                                                </div>-->
                                        <!--                                            </div>-->
                                        <hr class="mb-2 mt-0 text-muted">


                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-sm-6 mb-4">-->
                                        <!--                                                <label class="" for="">Reg Fee : </label> <span style="padding:5px;"-->
                                        <!--                                                    id="RegFee"></span>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->


                                        <!--                                        <div class="row">-->
                                        <!--                                            <div class="col-sm-6 mb-4">-->
                                        <!--                                                <label class="" for="">Total Amount: </label><span style="padding:5px;"-->
                                        <!--                                                    id="TtlAmt"></span>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->


                                        <div class="p-3">
                                            <div class="row">
                                                <div class="col-sm-6 mb-4">
                                                    <label class="" for="specificSizeInputName">Select a
                                                        Placeholder</label>

                                                    <select onchange="setHead(this)" class="form-select" data-choices
                                                        data-choices-search-false name="" id="selectHead">
                                                        <option value="">Please Select a Placeholder</option>
                                                        <?php foreach ($userHeads as $userHead) {
                                                            echo '<option value="' . $userHead->id . '#' . $userHead->type . '">' . $userHead->name . '</option>';
                                                        }
                                                        ?>
                                                    </select>
                                                </div>
                                            </div>


                                            <div class="row">
                                                <div>
                                                    <p class="text-muted fw-medium">Kindly select your preferred
                                                        payment
                                                        method</p>
                                                    <span id="buyError"></span>
                                                    <div id="p_infelly" onclick="clickPolygonAddress('Polygon')"
                                                        class="form-check mb-2">
                                                        <input class="form-check-input" type="radio"
                                                            name="flexRadioDefault" id="flexRadioDefault1">
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            Purchase in FELY (only Metamask, Trust Wallet, or Coinbase
                                                            Wallet)
                                                        </label>
                                                    </div>
                                                    <div id="fm_wallet" onclick="filiciaMatrics('Falicia')"
                                                        class="form-check mb-2">
                                                        <input class="form-check-input" type="radio"
                                                            name="flexRadioDefault" id="flexRadioDefault2">
                                                        <label class="form-check-label" for="flexRadioDefault2">
                                                            From Feliciamatrix Wallet (
                                                            <?php echo $faliciaMatrixWalletBalance ?> USDT)
                                                        </label>
                                                    </div>

                                                    <div id="p_in_usdt" onclick="clickPolygonAddressDiv('PolygonUSDT')"
                                                        class="form-check ">
                                                        <input class="form-check-input" type="radio"
                                                            name="flexRadioDefault" id="flexRadioDefault3">
                                                        <label class="form-check-label" for="flexRadioDefault3">
                                                            Purchase in USDT
                                                        </label>
                                                    </div>
                                                </div>
                                            </div><!-- end row -->


                                        </div>
                                    </div><!-- end tabpane -->

                                </div><!-- end tab pane -->
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                </div>
                <!-- end page title -->


                <!-- Success Alert -->
                <!--                <div class="alert bg-success border-success text-white material-shadow w-50" role="alert">-->
                <!--                    <strong>Success</strong> - Package requests is successful-->
                <!--                </div>-->


                <!-- start page title -->

                <div class="row b-div">
                    <div class="col-lg-6 col-xl-6">
                        <div class="card card-height-100">
                            <div class="card-header align-items-center border-0 d-flex">
                                <h4 class="card-title mb-0 flex-grow-1">Connect Wallet</h4>
                            </div><!-- end cardheader -->
                            <div class="card-body p-0">
                                <div class="px-3 pb-3">
                                    <button id="connectButton" style="display: none;" class="connect-btn mb-3">Connect
                                        Your Wallet</button>
                                    <div class="mb-2">Wallet Address : <span id="walletAddress"></span></div>
                                    <div class="mb-2">FELY Balance : <span id="fellyWalletBalance"></span></div>
                                    <div><span id="UserNotofication" class="u-nofification"></span></div>
                                    <div id="indicater" style="display:none;"> <img src="" alt="" /> </div>
                                    <button class="buyThisPlan btn btn-success" style="display: none;"
                                        onclick="buyThisPlan()"> Buy Now</button>
                                    <input type="hidden" name="" id="usdtpriceBuldlePrice" />
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div><!-- end col -->
                </div>

                <!--                    <div class="b-div">-->
                <!--                        <button id="connectButton">Connect</button>-->
                <!--                        <div>Wallet Address : <span id="walletAddress"></span></div>-->
                <!--                        <div>Felley Balance : <span id="fellyWalletBalance"></span></div>-->
                <!--                        <div><span id="UserNotofication"></span></div>-->
                <!--                        <button class="buyThisPlan" style="display: none;" onclick="buyThisPlan()"> Buy This One</button>-->
                <!--                        <input type="hidden" name="" id="usdtpriceBuldlePrice" />-->
                <!--                    </div>-->


                <div class="b-div-2">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header align-items-center d-flex">
                                    <h4 class="card-title mb-0 flex-grow-1">Please verify your order</h4>
                                </div><!-- end card header -->

                                <div class="card-body">
                                    <form action="javascript:void(0);">
                                        <div class="row gx-3 gy-2 align-items-center">
                                            <!--
                                                            <div class="col-sm-4">
                                                            <label class="" for="specificSizeInputName">Order Number</label>
                                                            <input type="text" class="form-control" id="" placeholder="" disabled>
                                                        </div>
                                                    -->

                                            <!--end col-->
                                            <div class="col-sm-4">
                                                <label class="" for="specificSizeInputName">Please Enter Transaction
                                                    #
                                                    (TX
                                                    ID)</label>
                                                <input type="text" value="" class="form-control" id="transHash"
                                                    placeholder="">
                                            </div>
                                            <!--end col-->
                                            <!--end col-->
                                            <!--                                            <div class="col-auto pt-4">-->
                                            <!--                                                <button type="submit" class="btn btn-success">Verify Package</button>-->
                                            <!--                                            </div>-->
                                            <!--end col-->
                                        </div>
                                        <!--end row-->
                                    </form>
                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div>
                    <!-- end page title -->

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card mb-0">
                                <div class="card-header align-items-center d-flex">
                                    <!-- Danger Alert -->
                                    <div class="alert alert-danger material-shadow mb-0" role="alert">
                                        Attention: Please carefully review the instructions and confirm your
                                        package.
                                    </div>


                                </div><!-- end card header -->

                                <div class="card-body pt-4">

                                    <!-- <p>Order <span># FLCB1000351 </span></p> -->
                                    <p>To complete your payment, kindly transfer the funds from your cryptocurrency
                                        wallet
                                        to our wallet address provided below:</p>


                                    <div class="col-lg-6 mt-5">
                                        <label for="labelInput" class="form-label">Polygon Wallet Address: </label>
                                        <div class="input-group">
                                            <input id="walletAddressInput" type="text" class="form-control"
                                                aria-label="" value="0x53AC33f72352c88eAA24bEb0897E7cE3A9c720BF">
                                            <button id="copyButton" class="btn btn-primary" type="button">Copy
                                            </button>
                                        </div>
                                        <div id="errorMessage" style="color: red; display: none;">Please enter a
                                            wallet
                                            address.
                                        </div>
                                        <div id="copyAlert" class="alert alert-success" style="display: none;">
                                            <strong>Success!</strong> Address copied to clipboard.
                                        </div>
                                    </div>


                                    <div class="col-lg-12 mt-5">
                                        <label for="labelInput" class="form-label">Alternatively, you can
                                            conveniently
                                            make
                                            your payment by scanning the QR code below: </label>

                                        <div class="qr-div mt-2 mb-4">
                                            <img src="assets/images/qr/qr.png" alt="qr-img" class="img-thumbnail">
                                        </div>

                                        <p>After your transfer, please enter your transaction # (TX ID) to confirm
                                            your
                                            payment. Your CryptoBundle will be activated within just a few minutes.
                                            Should
                                            you have any questions or concerns, please do not hesitate to reach out
                                            to
                                            our
                                            support team at support@feliciamatrix.com. </p>

                                        <p>Thank you for choosing us as your cryptocurrency partner. We appreciate
                                            your
                                            trust and look forward to providing you with exceptional service.</p>


                                    </div>


                                </div>
                            </div>
                        </div> <!-- end col -->
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-6 mb-5">
                        <div id="confError" class="mt-1 pt-2"></div>

                        <div class=" pt-0">
                            <button type="button" onclick="showBuy()" id="btnBuyNow" style="display: none;"
                                class="btn  btn-success w-100 buy-now">Buy Now
                            </button>

                            <button type="button" id="ordconf" onclick="OrderConfirm(this)"
                                class="btn btn-primary show-third w-25 d-none"> Confirm
                            </button>
                            <button id="ordcansel" class="btn btn-danger cancel-btn w-25 d-none">Cancel</button>
                        </div>
                    </div>

                </div><!-- end card body -->


            </div>

            <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <script>
                            document.write(new Date().getFullYear())
                        </script>
                        © Feliciamatrix.
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end d-none d-sm-block">
                            Design & Develop by Feliciamatrix
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <!-- end main content-->

</div>



<style>
    :root {
        --primary: #6A10B2;
        --primary-glow: rgba(106, 16, 178, 0.3);
        --gradient-1: linear-gradient(45deg, #6A10B2, #9333EA);
        --gradient-2: linear-gradient(135deg, #6A10B2, #4F46E5);
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        padding: 20px;
        box-sizing: border-box;
    }

    .modal-content {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(16px);
        margin: auto;
        padding: 32px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(106, 16, 178, 0.2);
        width: 90%;
        max-width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: modalAppear 0.3s ease-out;
    }

    @keyframes modalAppear {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }

        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    .modal-title {
        font-size: 1.75rem;
        font-weight: 800;
        background: linear-gradient(45deg, #fff, #e0e0e0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0 0 24px 0;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .button-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .wallet-button {
        height: 64px;
        border: none;
        border-radius: 16px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
    }

    .wallet-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--gradient-1);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .wallet-button:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .wallet-button:hover::before {
        opacity: 0.1;
    }

    .wallet-button .button-content {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
        position: relative;
        z-index: 1;
    }

    .wallet-icon {
        width: 32px;
        height: 32px;
        background: var(--gradient-2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(106, 16, 178, 0.2);
    }

    .wallet-icon img {
        width: 28px;
        height: 28px;
        display: block;
        margin: 0 auto;
    }

    .arrow-icon {
        width: 24px;
        height: 24px;
        opacity: 0.6;
        transition: transform 0.3s ease;
    }

    .wallet-button:hover .arrow-icon {
        transform: translateX(4px);
    }

    .wallet-text {
        flex-grow: 1;
        text-align: left;
    }

    .cancel-button {
        background: var(--gradient-1);
        color: white;
        justify-content: center;
        margin-top: 8px;
    }

    .cancel-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(106, 16, 178, 0.3);
    }

    /* Glow effect elements */
    .glow {
        position: absolute;
        width: 150px;
        height: 150px;
        background: var(--primary);
        filter: blur(50px);
        opacity: 0.15;
        border-radius: 50%;
    }

    .glow-1 {
        top: -50px;
        left: -50px;
    }

    .glow-2 {
        bottom: -50px;
        right: -50px;
    }

    /* Add responsive design */
    @media (max-width: 480px) {
        .modal-content {
            width: 95%;
            padding: 24px;
        }

        .wallet-button {
            height: 60px;
            font-size: 1rem;
        }

        .modal-title {
            font-size: 1.5rem;
        }
    }

    .note-p {
        font-size: 11px;
        color: #fff;
    }
</style>

<div id="messageBox" class="modal">
    <div class="modal-content">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
        <h2 class="modal-title">Connect Wallet</h2>
        <div class="button-container">
            <button onclick="connectMeta('metamask')" class="wallet-button">
                <div class="button-content">
                    <div class="wallet-icon">
                        <img src="./assets/images/wallet/fox.png" alt="MetaMask" />
                    </div>
                    <span class="wallet-text">MetaMask</span>
                    <span class="arrow-icon">→</span>
                </div>
            </button>
            <button onclick="connectCoin('coinbase')" class="wallet-button">
                <div class="button-content">
                    <div class="wallet-icon">
                        <img src="./assets/images/wallet/coinbase.png" alt="Coinbase" />
                    </div>
                    <span class="wallet-text">Coinbase Wallet</span>
                    <span class="arrow-icon">→</span>
                </div>
            </button>
            <button onclick="connectTrust('trust')" class="wallet-button">
                <div class="button-content">
                    <div class="wallet-icon">
                        <img src="./assets/images/wallet/trust.png" alt="Trust" />
                    </div>
                    <span class="wallet-text">Trust Wallet</span>
                    <span class="arrow-icon">→</span>
                </div>
            </button>
            <button onclick="cancelModal()" class="wallet-button cancel-button">
                Cancel
            </button>
        </div>
    </div>
</div>

<script>
    var payment_method = '';
    var headUid = '';
    var headType = '';
    var bundle_id = 0;
    var transaction_hash = "";
    var userId = '<?php echo $_SESSION["userObj"]->data->id; ?>'
    var faliciaMatrixWalletBalance = '<?php echo $faliciaMatrixWalletBalance; ?>';
    var bundlePrice = 0;
    var status = 0;


    var RegFee = 0;
    var TtlAmt = 0;

    function showBuyOption(amt, bndId) {
        //hide usdtPuraches
        if (parseInt(bndId) >= 7) {
            $("#p_in_usdt").hide();
        }
        bundlePrice = amt;
        document.getElementById("getStartButton").innerHTML = "Wait..";
        document.getElementById("RegFee").innerHTML = "Wait.. USDT";
        document.getElementById("TtlAmt").innerHTML = "wait.. USDT";
        var obj;

        if (headUid == "0") {
            obj = {
                "user_id": userId,
            };
        } else {
            obj = {
                "user_id": userId,
                "dummy_id": headUid,
            };
        }


        $.ajax({
            url: "/functions/ajaxfunc.php",
            type: "post", //send it through get method
            data: {
                sreverclass: "check-registration-fee",
                postData: obj
            },
            success: function (response) {
                var obj = JSON.parse(response);
                console.log(response);
                if (obj['success']) {

                    TtlAmt = parseFloat(amt) + parseFloat(obj['data']['reg_fee']);
                    var pollUsdtPrice = '<?php echo $pollUsdtPrice; ?>';
                    //console.log(pollUsdtPrice);

                    var fellyAmiuntThisBundle = (TtlAmt / parseFloat(pollUsdtPrice))


                    document.getElementById("PkgAmt").innerHTML = amt + " USDT";
                    document.getElementById("RegFee").innerHTML = obj['data']['reg_fee'] + " USDT";
                    document.getElementById("TtlAmt").innerHTML = (fellyAmiuntThisBundle) + "(" + TtlAmt + " USDT)";

                    document.getElementById("totalUsdAmt").innerHTML = TtlAmt + " USDT";

                    document.getElementById("usdtpriceBuldlePrice").value = TtlAmt;

                    document.getElementById("getStartButton").innerHTML = "Get Started";
                    document.getElementById('first-card').classList.add('d-none');
                    // set heml hect for usdtbundle
                    document.getElementById("usdtBundlesBalance").innerHTML = amt;
                    bundle_id = bndId;
                    // Show the second card
                    document.getElementById('second-card').classList.remove('d-none');

                    // $("#ordcansel").hide();
                    // $("#ordconf").hide();
                    // document.getElementById("confError").innerHTML = '<div class="alert alert-success" role="alert">' + obj["message"] + '</div>';
                } else {
                    document.getElementById("getStartButton").innerHTML = "Get Started";
                }
                document.getElementById("getStartButton").innerHTML = "Get Started";
            },
            error: function (xhr) {
                //Do Something to handle error
                console.log(xhr);
            }
        });

    }

    function showBuy() {
        transaction_hash = $('#transHash').val();
        var rtn = Inputvalidation();
        if (!rtn) {
            return;
        }


        const buyNowBtn = document.querySelector('.buy-now');
        const confirmBtn = document.querySelector('.show-third');
        // Get the Cancel button
        const cancelBtn = document.querySelector('.cancel-btn');
        buyNowBtn.classList.add('d-none');
        // Show Confirm and Cancel buttons
        confirmBtn.classList.remove('d-none');
        cancelBtn.classList.remove('d-none');
    }

    function Inputvalidation() {
        var validate = true;

        document.getElementById("confError").innerHTML = "";
        if (payment_method == "") {
            document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Please Select Payment Method </div>';
            validate = false;
            return;
        }


        if (payment_method == "Falicia") {
            if (faliciaMatrixWalletBalance < bundlePrice) {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Insufficient Wallet Balance</div>';
                validate = false;
                return;
            }
            if (headUid == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Please Select User Head</div>';
                validate = false;
                return;
            }
            if (headType == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert"><Please Select Head Type/div>';
                validate = false;
                return;
            }
            if (bundle_id == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Budle ID not Found</div>';
                validate = false;
                return;
            }
            if (payment_method == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Please Select Payment Method </div>';
                validate = false;
                return;
            }

        }

        if (payment_method == "Polygon") {

            if (headUid == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Please Select User Head</div>';
                validate = false;
                return;
            }
            if (headType == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert"><Please Select Head Type/div>';
                validate = false;
                return;
            }
            if (bundle_id == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Budle ID not Found</div>';
                validate = false;
                return;
            }


        }
        if (payment_method == "PolygonUSDT") {
            if (transaction_hash == "") {
                document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">Please Enter Transaction # </div>';
                validate = false;
                return;
            }
        }


        return validate;
    }


    function clickPolygonAddress(txt) {
        payment_method = txt;
        console.log(payment_method);
        $("#btnBuyNow").hide();
    }

    function filiciaMatrics(txt) {
        payment_method = txt;
        console.log(payment_method);
        if (bundle_purchase_validate) {
            $("#btnBuyNow").show();
        }
    }

    function deSelectRadio() {
        document.querySelectorAll('input[name="flexRadioDefault"]').forEach((radio) => {
            radio.checked = false;
        });
        payment_method = "";
    }

    function setHead(e) {

        var dta = e.value;
        if (dta == "") {
            headUid = "";
            return;
        }
        const myArray = dta.split("#");

        if (myArray[1].trim() == "user") {
            headUid = "0";
        } else {
            headUid = myArray[0];
        }

        headType = myArray[1];
        showBuyOption(bundlePrice, bundle_id);
        bundlePurchaseValidate();
        deSelectRadio();


    }




    document.addEventListener('DOMContentLoaded', function () {
        // Get all toggle buttons
        //const toggleButtons = document.querySelectorAll('.toggle-card');
        // Add click event listener to each toggle button
        // toggleButtons.forEach(function (button) {
        //     button.addEventListener('click', function () {
        //         // Hide the first card
        //         document.getElementById('first-card').classList.add('d-none');
        //         // Show the second card
        //         document.getElementById('second-card').classList.remove('d-none');
        //     });
        // });



        // //Get the Confirm button in the second card
        // const confirmButton = document.querySelector('.show-third');
        // // Add click event listener to the Confirm button
        // confirmButton.addEventListener('click', function () {
        //     // Hide the second card
        //     document.getElementById('second-card').classList.add('d-none');

        //     // Show the third card
        //     document.getElementById('third-card').classList.remove('d-none');
        // });
    });
</script>


<script>
    // document.addEventListener('DOMContentLoaded', function () {
    //     // Get the Buy Now button
    //     const buyNowBtn = document.querySelector('.buy-now');

    //     // Get the Confirm button
    //     const confirmBtn = document.querySelector('.show-third');

    //     // Get the Cancel button
    //     const cancelBtn = document.querySelector('.cancel-btn');

    //     // Add click event listener to Buy Now button
    //     buyNowBtn.addEventListener('click', function () {
    //         //Hide Buy Now button
    //         // buyNowBtn.classList.add('d-none');

    //         // // Show Confirm and Cancel buttons
    //         // confirmBtn.classList.remove('d-none');
    //         // cancelBtn.classList.remove('d-none');
    //     });

    //     // Add click event listener to Cancel button
    //     cancelBtn.addEventListener('click', function () {
    //         // Hide Confirm and Cancel buttons
    //         confirmBtn.classList.add('d-none');
    //         cancelBtn.classList.add('d-none');

    //         // Show Buy Now button
    //         buyNowBtn.classList.remove('d-none');
    //     });
    // });
</script>

<script>
    document.getElementById('copyButton').addEventListener('click', function () {
        // Select the input field
        var input = document.getElementById('walletAddressInput');

        // Get the value of the input field
        var address = input.value.trim();

        // Check if the input field is empty
        if (address === '') {
            // Show an error message below the input field
            document.getElementById('errorMessage').style.display = 'block';
            return;
        }

        // Hide the error message if input is not empty
        document.getElementById('errorMessage').style.display = 'none';

        // Select the text in the input field
        input.select();

        // Copy the selected text
        document.execCommand('copy');

        // Deselect the input field
        input.setSelectionRange(0, 0);

        // Show the bottom alert
        var copyAlert = document.getElementById('copyAlert');
        copyAlert.style.display = 'block';

        // Hide the bottom alert after 2 seconds
        setTimeout(function () {
            copyAlert.style.display = 'none';
        }, 5000);
    });
</script>

<script src="/opensale/scripts/felly_abi.js?v=<?php echo time(); ?>"></script>
<script src="https://cdn.jsdelivr.net/npm/web3@1.7.0/dist/web3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@walletconnect/client/dist/umd/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bignumber.js/bignumber.min.js"></script>

<script>
    // document.addEventListener("DOMContentLoaded", function() {
    //     // Get references to the radio buttons
    //     var radioDefault1 = document.getElementById("flexRadioDefault1");
    //     var radioDefault2 = document.getElementById("flexRadioDefault2");
    //
    //     // Get reference to the b-div
    //     var bDiv = document.querySelector(".b-div");
    //
    //     // Initially hide b-div if flexRadioDefault1 is not selected
    //     if (!radioDefault1.checked) {
    //         bDiv.style.display = "none";
    //     }
    //
    //     // Add event listener for change event on radio buttons
    //     radioDefault1.addEventListener("change", function() {
    //         // If flexRadioDefault1 is selected, show b-div, otherwise hide it
    //         if (this.checked) {
    //             bDiv.style.display = "block";
    //         } else {
    //             bDiv.style.display = "none";
    //         }
    //         bundlePurchaseValidate();
    //     });
    //
    //     radioDefault2.addEventListener("change", function() {
    //         // If flexRadioDefault1 is selected, hide b-div
    //         if (this.checked) {
    //             bDiv.style.display = "none";
    //         }
    //         bundlePurchaseValidate();
    //     });
    // });


    function clickPolygonAddressDiv(txt) {
        payment_method = txt;
        $("#flexRadioDefault3").prop('checked', true);
        document.querySelector(".b-div").style.display = "none";
        document.querySelector(".b-div-2").style.display = "block";
        document.getElementById("btnBuyNow").style.display = "block";
    }

    document.addEventListener("DOMContentLoaded", function () {
        var radioDefault1 = document.getElementById("flexRadioDefault1");
        var radioDefault2 = document.getElementById("flexRadioDefault2");
        var radioDefault3 = document.getElementById("flexRadioDefault3");

        var bDiv = document.querySelector(".b-div");
        var bDiv2 = document.querySelector(".b-div-2");

        bDiv.style.display = "none";
        bDiv2.style.display = "none";

        radioDefault1.addEventListener("change", function () {
            if (this.checked) {
                payment_method = 'Polygon';
                bDiv.style.display = "block";
                bDiv2.style.display = "none";
                $("#btnBuyNow").hide();
            }
            bundlePurchaseValidate();
        });

        radioDefault2.addEventListener("change", function () {
            if (this.checked) {
                payment_method = 'Falicia';
                bDiv.style.display = "none";
                bDiv2.style.display = "none";
                $("#btnBuyNow").show();
            }
            bundlePurchaseValidate();
        });

        radioDefault3.addEventListener("change", function () {
            if (this.checked) {
                payment_method = 'PolygonUSDT';
                bDiv.style.display = "none";
                bDiv2.style.display = "block";
                $("#btnBuyNow").show();
            }
            bundlePurchaseValidate();
        });
    });


    //START BLOCK Chain CODES
    var myRedableBalance = 0;
    var accounts;
    const modal_wallet = document.getElementById("messageBox");
    var bundle_purchase_validate = false;
    var packageBuyPrice = '<?php echo $pollUsdtPrice; ?>';
    var region_id = '<?php echo $regionId; ?>';

    //console.log(packageBuyPrice);

    function OrderConfirm() {
        //document.getElementById(e.id).innerHTML = "Wait..";
        console.log("orderConfirm");
        var pm = "";
        status = "1"
        if (payment_method == "Falicia") {
            payment_method = "From FeliciaMatrix Wallet";

        }
        if (payment_method == "PolygonUSDT") {
            status = "2"
        }
        console.log(packageBuyPrice);

        var obj = {
            "user_id": userId,
            "dummy_id": headUid,
            "type": headType,
            "bundle_id": bundle_id,
            "payment_method": payment_method,
            "transaction_hash": transaction_hash,
            "fely_amount": packageBuyPrice,
            "status": status,
            "region_id": region_id
        };


        var x = Inputvalidation();
        if (!x) {
            return;
        }
        $.ajax({
            url: "/functions/ajaxfunc.php",
            type: "post", //send it through get method
            data: {
                sreverclass: "order-bundle",
                postData: obj
            },
            success: function (response) {
                var obj = JSON.parse(response);
                //console.log(obj);
                if (obj['success']) {

                    $("#ordcansel").hide();
                    $("#ordconf").hide();
                    document.getElementById("confError").innerHTML = '<div class="alert alert-success" role="alert">' + obj["message"] + '</div>';
                } else {
                    document.getElementById("confError").innerHTML = '<div class="alert alert-danger" role="alert">' + obj["message"] + '</div>';
                }
                // document.getElementById(e.id).innerHTML = "Confirm";
                UserNotofication.innerHTML = "";
            },
            error: function (xhr) {
                //Do Something to handle error
                console.log(xhr);
            }
        });
    }

    function bundlePurchaseValidate() {

        $("#connectButton").hide();
        $(".buyThisPlan").hide();
        $("#btnBuyNow").hide();

        var element = document.getElementById("buyError");
        element.innerHTML = '';
        var obj = {
            "user_id": userId,
            "bundle_id": bundle_id,
            "dummy_id": headUid
        };

        $.ajax({
            url: "/functions/ajaxfunc.php",
            type: "post", //send it through get method
            data: {
                sreverclass: "bundle-purchase-validate",
                postData: obj
            },
            success: function (response) {
                var obj = JSON.parse(response);

                //console.log(obj);
                if (obj.success) {

                    console.log(obj.data.package_buy);
                    bundle_purchase_validate = (obj.data.package_buy); //['package_buy']
                    if (bundle_purchase_validate) {
                        if (payment_method == "Polygon") {
                            $("#connectButton").show();
                        } else if (payment_method == "Falicia" || payment_method === "PolygonUSDT") {
                            $(".buyThisPlan").show();
                            $("#btnBuyNow").show();
                        } else {
                            console.log("");
                        }
                    } else {
                        // Set its text content
                        element.innerHTML = '<div class="alert alert-danger" role="alert">You have reached the maximum purchase limit for this bundle for the year. </div>';
                    }
                }

            },
            error: function (xhr) {
                //Do Something to handle error
                console.log(xhr);
            }
        });
    }


    $(document).ready(function () {
        document.getElementById("connectButton").addEventListener("click", async () => {
            usdtWalletConnectMetaMask();
        });

    });

    function isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    function cancelModal() {
        document.getElementById('messageBox').style.display = 'none';
    }

    async function connectMeta() {
        window.location.href = "https://metamask.app.link/dapp/https://fx.feliciamatrix.com/usdt-wallet.php";
    }
    async function connectCoin() {
        coinBase();
    }

    async function connectTrust() {
        const androidIntentURL = 'https://link.trustwallet.com/open_url?coin_id=60&url=https://fx.feliciamatrix.com/usdt-wallet.php';
        const appStoreURL = 'https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409'; // iOS
        const playStoreURL = 'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp'; // Android

        const userAgent = navigator.userAgent;

        // Try to open Trust Wallet
        const openTrustWallet = () => {
            const timeout = setTimeout(() => {
                // Redirect to App Store or Play Store if Trust Wallet is not installed
                if (/iPhone|iPad|iPod/i.test(userAgent)) {
                    window.location.href = appStoreURL; // iOS fallback
                } else if (/Android/i.test(userAgent)) {
                    window.location.href = playStoreURL; // Android fallback
                } else {
                    alert('Trust Wallet is not installed. Please download it.');
                }
            }, 1500); // Adjusted timeout to allow better response time

            // Attempt to open Trust Wallet using the correct scheme or intent
            if (/Android/i.test(userAgent)) {
                // Try intent URL for Android
                window.location.href = androidIntentURL;
            } else {
                // Fallback to trust:// for iOS
                window.location.href = trustWalletURL;
            }

            // Clear timeout if Trust Wallet opens (focus event when app is opened)
            window.addEventListener('blur', () => clearTimeout(timeout));
        };

        openTrustWallet();
    }

    async function coinBase() {

        const encodedUrl = encodeURIComponent("https://fx.feliciamatrix.com/usdt-wallet.php");
        const coinbaseDeepLink = `https://go.cb-w.com/dapp?cb_url=${encodedUrl}`;
        // Redirect to the Coinbase Wallet deep link
        //window.location.href = coinbaseDeepLink;
        try {
            // Attempt to open the deep link
            window.open(coinbaseDeepLink, '_blank');
        } catch (error) {
            console.error('Failed to open Coinbase Wallet deep link:', error);
            // Optional: Provide user feedback
            alert('Could not open Coinbase Wallet. Please ensure you have the app installed.');
        }

    }


    var UserNotofication = document.getElementById("UserNotofication");
    async function usdtWalletConnectMetaMask() {


        if (
            typeof window.ethereum !== "undefined" ||
            typeof window.web3 !== "undefined"
        ) {
            // Modern dapp browsers...
            const provider = window["ethereum"] || window.web3.currentProvider;
            try {
                const walletAddress = document.getElementById("walletAddress");


                walletAddress.innerHTML = "Waiting";
                const fellyWalletBalance = document.getElementById("fellyWalletBalance");
                fellyWalletBalance.innerHTML = "Waiting ";

                await provider.request({
                    method: "eth_requestAccounts"
                });
                web3 = new Web3(provider);
                accounts = await web3.eth.getAccounts();
                console.log("Connected:", accounts[0]);
                fellyContrat = new web3.eth.Contract(fellyAbi, fellyTokenAddress);

                await TokenBalance(accounts);

                walletAddress.innerHTML = accounts[0];
                fellyWalletBalance.innerHTML = myRedableBalance;
                $("#connectButton").hide();

                if (bundle_purchase_validate) {
                    $(".buyThisPlan").show();
                }
            } catch (error) {
                //console.error("User denied account access", error);
                $("#errors").html("User denied account access", error);
            }
        } else {
            // Handle the case where the user doesn't have MetaMask installed
            if (isMobile()) {
                modal_wallet.style.display = "block";
            } else {
                //alert("MetaMask is not installed. Please install it to use this DApp.");
                $("#errors").html(
                    "MetaMask is not installed. Please install it to use this DApp."
                );
            }
        }
    }

    async function TokenBalance(userAddress) {
        // console.log(userAddress);

        try {
            // Example: Call a read-only function
            const result = await fellyContrat.methods
                .balanceOf(userAddress[0])
                .call({
                    from: userAddress[0]
                });

            console.log("Result:", result);
            myRedableBalance = convertToReadableFormat(result, 18);
            console.log("myRedableBalance :", myRedableBalance);



        } catch (error) {
            console.error("Error Is:", error);
            $("#errors").html(error.message);
        }
    }

    function convertToReadableFormat(uintValue, decimals) {
        const tokenAmount = parseInt(uintValue); // Represents 1 token
        const des = parseInt(decimals);
        // Convert to human-readable format
        const readableAmount = parseFloat(tokenAmount) / Math.pow(10, des);
        return parseInt(readableAmount);

    }

    function convertToSmallestUnit(readableValue, decimals) {
        const readableAmount = new BigNumber(readableValue); // Use BigNumber for the readable value
        const des = new BigNumber(decimals); // Use BigNumber for decimals
        // Calculate the smallest unit amount
        const smallestUnitAmount = readableAmount.multipliedBy(new BigNumber(10).pow(des));
        return smallestUnitAmount.toFixed(0); // Return as an integer string
    }

    function buyThisPlan() {
        //console.log(planeFellyPrice);
        const inputElement = document.getElementById("usdtpriceBuldlePrice");
        var pollUsdtPrice = '<?php echo $pollUsdtPrice; ?>';
        var usdtpriceBuldlePrice = inputElement.value;
        var planeFellyPrice = Number((usdtpriceBuldlePrice / pollUsdtPrice) + 10).toFixed(0);
        if (myRedableBalance > planeFellyPrice) {
            packageBuyPrice = planeFellyPrice - 10;
            transferFellyToOurWallet(packageBuyPrice);
        } else {
            alert("FELY Not Avalable");
            return;
        }
    }


    async function transferFellyToOurWallet(amount) {
        var x = Inputvalidation();
        if (!x) {
            return;
        }
        try {
            // Show loading
            UserNotofication.innerHTML = `
            <div style="padding: 15px; background: #fff3cd; border-radius: 8px;">
                <div class="spinner"></div>
                <strong>Processing...</strong> Do not close this page!
            </div>
        `;

            const ourWallet = '0x300f678F54Ef3824FB45Ed6966A81d210f9DFaF1';
            const userAddress = accounts[0];
            var amountinwei = convertToSmallestUnit(amount, 18);

            // Check balance
            const balance = await fellyContrat.methods.balanceOf(userAddress).call();

            if (BigInt(balance) < BigInt(amountinwei)) {
                UserNotofication.innerHTML = `<div style="padding: 15px; background: #f8d7da; border-radius: 8px;">❌ Insufficient balance</div>`;
                return;
            }

            // Get network gas price
            const networkGasPrice = await web3.eth.getGasPrice();

            // Use network gas price + small buffer (works for both desktop and mobile)
            const gasPrice = (BigInt(networkGasPrice) * BigInt(110)) / BigInt(100); // Add 10%

            // Send transaction
            const result = await fellyContrat.methods.transfer(ourWallet, amountinwei).send({
                from: userAddress,
                gasPrice: gasPrice.toString()
                // Don't set gas limit - let it auto-estimate
            });

            // Success
            UserNotofication.innerHTML = `<div style="padding: 15px; background: #d4edda; border-radius: 8px;">✅ Transfer successful!</div>`;
            OrderConfirm();

        } catch (error) {
            console.error(error);
            UserNotofication.innerHTML = `<div style="padding: 15px; background: #f8d7da; border-radius: 8px;">❌ Transfer failed. Try again!</div>`;
        }
    }



    // async function transferFellyToOurWallet(amount) {
    //     // var amountinwei = convertToSmallestUnit(amount, 18);
    //     // console.log(amountinwei);
    //     // return;
    //     var x = Inputvalidation();
    //     if (!x) {
    //         return;
    //     }
    //     try {
    //         UserNotofication.innerHTML = "Attention: Do not navigate away from this page until the bundle purchase is fully completed";

    //         const ourWallet = '0x300f678F54Ef3824FB45Ed6966A81d210f9DFaF1';
    //         const userAddress = accounts[0];
    //         var amountinwei = convertToSmallestUnit(amount, 18);
    //         console.log(amountinwei);
    //         //Example: Call a read-only function
    //         const result = await fellyContrat.methods.transfer(ourWallet, amountinwei).send({
    //             from: userAddress,
    //             gas: 200000,
    //             gasPrice: web3.utils.toWei("500", "gwei"),
    //         });
    //         OrderConfirm();
    //         console.log(result);
    //     } catch (error) {
    //         console.log(error);
    //         console.log("FELY Transfer Failed. Something went wrong. Please try again to complete the process!");
    //     }
    // }
    //END BLOCK Chain CODES
</script>

<script>
    // Update total required balance based on TtlAmt value
    function calculateTotalRequired() {
        const ttlAmtElement = document.getElementById('TtlAmt');
        const totalRequired = document.querySelector('.d-flex.mb-2:last-child .flex-shrink-0 h6.mb-0');

        if (!ttlAmtElement || !totalRequired) return;

        // Get current TtlAmt value and extract the FELY amount
        const ttlAmtText = ttlAmtElement.textContent;
        const felyMatch = ttlAmtText.match(/^([\d.]+)/);

        if (felyMatch) {
            const felyAmount = parseFloat(felyMatch[1]);
            const minimumBalance = 10; // FELY minimum balance
            const total = felyAmount + minimumBalance;

            // Update the total required display
            totalRequired.textContent = `${total.toFixed(2)} FELY`;
        }
    }

    // Watch for changes in TtlAmt
    const observer = new MutationObserver(() => calculateTotalRequired());

    const ttlAmtElement = document.getElementById('TtlAmt');
    if (ttlAmtElement) {
        observer.observe(ttlAmtElement, {
            childList: true,
            characterData: true,
            subtree: true
        });
        calculateTotalRequired(); // Initial calculation
    }
</script>


<?php include("includes/footer.php"); ?>