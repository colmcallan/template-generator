//The Below functions are all button selections of products and their corresponding
//troubleshooting step options with resolution steps taken
//they all feed into the text area in the modal 
//associated with the "generate" button
//All utiliszing the jquery toggle function
//<!--All code used in this is copyright to Colm Callan, colm.callan@sky.ie-->


//TV show TV options button
$(document).ready(function () {
  $("#TVbtn").click(function () {
    $("#tvshow").toggle();
  });
});

//SkyQ button
$(document).ready(function () {
  $("#prdctbtnQ").click(function () {
    $("#skyQ1").toggle();
  });
});
//SkyQ picture issue
$(document).ready(function () {
  $("#pictureissue").click(function () {
    $("#pictureq").toggle();
  });
});

//SkyQ nss issue
$(document).ready(function () {
  $("#nssissue").click(function () {
    $("#signalQ").toggle();
  });
});

//SkyQ recording issues
$(document).ready(function () {
  $("#recording").click(function () {
    $("#recordingQ").toggle();
  });
});

//SkyQ hardware issues
$(document).ready(function () {
  $("#hrdware").click(function () {
    $("#hardwareissuesq").toggle();
  });
});
//SkyQ trouebleshooting
$(document).ready(function () {
  $("#Qtroublesht").click(function () {
    $("#TROUBLESHOOT").toggle();
  });
});
$(document).ready(function () {
  $("#Qtroublesht2").click(function () {
    $("#TROUBLESHOOT").toggle();
  });
});
$(document).ready(function () {
  $("#Qtroublesht3").click(function () {
    $("#TROUBLESHOOT").toggle();
  });
});
$(document).ready(function () {
  $("#Qtroublesht4").click(function () {
    $("#TROUBLESHOOT").toggle();
  });
});
//HD
$(document).ready(function () {
  $("#prdctbtnHD").click(function () {
    $("#skyHD1").toggle();
  });
});

//HD picture issue
$(document).ready(function () {
  $("#pictureissuehd").click(function () {
    $("#pcturhd").toggle();
  });
});

//HD nss issue
$(document).ready(function () {
  $("#nssissuehd").click(function () {
    $("#nsshd").toggle();
  });
});
//HD recording issue
$(document).ready(function () {
  $("#recordinghd").click(function () {
    $("#playbackhd").toggle();
  });
});
//HD equipment issue
$(document).ready(function () {
  $("#hrdwarehd").click(function () {
    $("#equipHD").toggle();
  });
});
//Troubleshoot HD 
$(document).ready(function () {
  $("#troubleShootingHD").click(function () {
    $("#TROUBLESHOOTHD").toggle();
  });
});
$(document).ready(function () {
  $("#troubleShootingHD2").click(function () {
    $("#TROUBLESHOOTHD").toggle();
  });
});
$(document).ready(function () {
  $("#troubleShootingHD3").click(function () {
    $("#TROUBLESHOOTHD").toggle();
  });
});
$(document).ready(function () {
  $("#troubleShootingHD4").click(function () {
    $("#TROUBLESHOOTHD").toggle();
  });
});

//Broadband 
$(document).ready(function () {
  $("#BBbtn").click(function () {
    $("#bbshow").toggle();
  });
});

//Broadband tech issues 
$(document).ready(function () {
  $("#techbb").click(function () {
    $("#bbtech").toggle();
    $("#bbtechtrbl").toggle();
  });
});

//Broadband provisioning issues 
$(document).ready(function () {
  $("#ordersbb").click(function () {
    $("#provbb").toggle();
    $("#bbordertbsht").toggle();
  });
});

//adslbroadband
$(document).ready(function () {
  $("#prdctbtnBB").click(function () {
    $("#ADSL1").toggle();
  });
});

//troubleshootbroadband button
$(document).ready(function () {
  $("#broadbandTrouble").click(function () {
    $("#TROUBLESHOOTBB").toggle();
  });
});

$(document).ready(function () {
  $("#broadbandTrouble2").click(function () {
    $("#TROUBLESHOOTBB").toggle();
  });
});

//troubleshoot orders button
$(document).ready(function () {
  $("#bbordertbsht").click(function () {
    $("#ordertbl").toggle();
  });
});

//troubleshoot tech button
$(document).ready(function () {
  $("#bbtechtrbl").click(function () {
    $("#tchtrblshoot").toggle();
  });
});

//BBTTE appointment button
$(document).ready(function () {
  $("#bbtte").click(function () {
    $("#bbtteapp").toggle();
  });
});


//FTTH
$(document).ready(function () {
  $("#prdctbtnFTTH").click(function () {
    $("#FTTH1").toggle();
  });
});
//FTTH troubleshooting
$(document).ready(function () {
  $("#trubleShootFTTH").click(function () {
    $("#TROUBLESHOOTFFTH").toggle();
  });
});

//Sky Talk
$(document).ready(function () {
  $("#prdctbtnTalk").click(function () {
    $("#TALK1").toggle();
  });
});

//Talk troubleshooting
$(document).ready(function () {
  $("#troubleShootingTalk").click(function () {
    $("#TROUBLESHOOTTalk").toggle();
  });
});
//Talk internal
$(document).ready(function () {
  $("#internalphn").click(function () {
    $("#intrnsteps").toggle();
  });
});
//Talk system
$(document).ready(function () {
  $("#systemphn").click(function () {
    $("#syscheck").toggle();
  });
});
//Talk resolution
$(document).ready(function () {
  $("#troubleShootingTalkbtn").click(function () {
    $("#resolutiontlk").toggle();
  });
});

//Billing
$(document).ready(function () {
  $("#prdctbtnBill").click(function () {
    $("#BILLING1").toggle();
  });
});

//Billing scenarios
$(document).ready(function () {
  $("#billpymt").click(function () {
    $("#blllpayment").toggle();
  });
});

//Billing scenarios queries
$(document).ready(function () {
  $("#billqry").click(function () {
    $("#billquery").toggle();
  });
});

//Billing resolution 
$(document).ready(function () {
  $("#billrslv").click(function () {
    $("#rslvbilling").toggle();
  });
});

//Upgrade Downgrade
$(document).ready(function () {
  $("#cancellation").click(function () {
    $("#cancellationdowngrade").toggle();
  });
});

//upgrade
$(document).ready(function () {
  $("#prdctbtnUpgrd").click(function () {
    $("#UPGRADE1").toggle();
  });
});
//Sky Sports Upgrade
$(document).ready(function () {
  $("#sportsup").click(function () {
    $("#Sportsupgrd").toggle();
  });
});

//cinema upgrade button
$(document).ready(function () {
  $("#cinemaupgrd").click(function () {
    $("#Cinemaupgrade").toggle();
  });
});

//toptier upgrade
$(document).ready(function () {
  $("#toptierupgrd").click(function () {
    $("#toptierupgrade").toggle();
  });
});
//base upgrade
$(document).ready(function () {
  $("#baseupgrd").click(function () {
    $("#baseupgrade").toggle();
  });
});

//Standalone upgrade
$(document).ready(function () {
  $("#standaloneupg").click(function () {
    $("#standaloneupgrade").toggle();
  });
});

//products upgraded
$(document).ready(function () {
  $("#prodctsupgrade").click(function () {
    $("#productsupgrade").toggle();
  });
});


//homemove/engineerbutton
$(document).ready(function () {
  $("#prdctbtnHmmove").click(function () {
    $("#HomeMove1").toggle();
  });
});


//End of product/resolution buttons

//feed into text area when checked
$(document).ready(function () {
  $('.notes').click(function () {
    var text = "";
    $('.notes:checked').each(function () {
      text += $(this).val() + ',';
    });
    text = text.substring(0, text.length - 1);
    $('#selectedtext').val(text);
  });
});

//clear text function in texxttarea
var input = document.querySelector('#clear');
var textarea = document.querySelector('#selectedtext');

input.addEventListener('click', function () {
  textarea.value = '';
}, false);

//refresh page
function refreshPage() {
  window.location.reload();
}
