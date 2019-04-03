//The Below functions are all button selections of products and their corresponding
//troubleshooting step options with resolution steps taken
//they all feed into the text area in the modal 
//associated with the "generate" button
//All utiliszing the jquery toggle function

//SkyQ button
$(document).ready(function() {
  $("#prdctbtnQ").click(function() {
    $("#skyQ1").toggle();
  });
});

//SkyQ trouebleshooting
$(document).ready(function() {
  $("#Qtroublesht").click(function() {
    $("#TROUBLESHOOT").toggle();
  });
});
//HD
$(document).ready(function() {
  $("#prdctbtnHD").click(function() {
    $("#skyHD1").toggle();
  });
});

//Troubleshoot HD 
$(document).ready(function() {
  $("#troubleShootingHD").click(function() {
    $("#TROUBLESHOOTHD").toggle();
  });
});

//adslbroadband
$(document).ready(function() {
  $("#prdctbtnBB").click(function() {
    $("#ADSL1").toggle();
  });
});

//troubleshootbroadband button
$(document).ready(function() {
  $("#broadbandTrouble").click(function() {
    $("#TROUBLESHOOTBB").toggle();
  });
});

//FTTH
$(document).ready(function() {
  $("#prdctbtnFTTH").click(function() {
    $("#FTTH1").toggle();
  });
}); 
//FTTH troubleshooting
$(document).ready(function() {
  $("#trubleShootFTTH").click(function() {
    $("#TROUBLESHOOTFFTH").toggle();
  });
});

//Sky Talk
$(document).ready(function() {
  $("#prdctbtnTalk").click(function() {
    $("#TALK1").toggle();
  });
});

//Talk troubleshooting
$(document).ready(function() {
  $("#troubleShootingTalk").click(function() {
    $("#TROUBLESHOOTTalk").toggle();
  });
});

//Billing
$(document).ready(function() {
  $("#prdctbtnBill").click(function() {
    $("#BILLING1").toggle();
  });
});

//Upgrade Downgrade
$(document).ready(function() {
  $("#cancellation").click(function() {
    $("#cancellationdowngrade").toggle();
  });
});

//upgrade
$(document).ready(function() {
  $("#prdctbtnUpgrd").click(function() {
    $("#UPGRADE1").toggle();
  });
});


//homemove/engineerbutton
$(document).ready(function() {
  $("#prdctbtnHmmove").click(function() {
    $("#HomeMove1").toggle();
  });
});
//End of product/resolution buttons

//feed into text area when checked
$(document).ready(function() {
  $('.notes').click(function() {
    var text = "";
    $('.notes:checked').each(function() {
      text += $(this).val() + ',';
    });
    text = text.substring(0, text.length - 1);
    $('#selectedtext').val(text);
  });
});

//clear text function in texxttarea
var input = document.querySelector('#clear');
var textarea = document.querySelector('#selectedtext');

input.addEventListener('click', function() {
  textarea.value = '';
}, false);

//refresh page
function refreshPage() {
  window.location.reload();
}
