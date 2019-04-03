//The Below functions are all button selections of products and their corresponding
//troubleshooting step options with resolution steps taken
//they all feed into the text area in the modal 
//associated with the "generate" button
function myFunction() {
  var x = document.getElementById("skyQ1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function classicSky() {
  var x = document.getElementById("skyHD1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function adslBroadband() {
  var x = document.getElementById("ADSL1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function troubleShootingBB() {
  var x = document.getElementById("TROUBLESHOOTBB");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}


function ftthBroadband() {
  var x = document.getElementById("FTTH1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function troubleShootingFFTH() {
  var x = document.getElementById("TROUBLESHOOTFFTH");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function troubleShooting() {
  var x = document.getElementById("TROUBLESHOOT");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function troubleShootingHD() {
  var x = document.getElementById("TROUBLESHOOTHD");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function skyTalk() {
  var x = document.getElementById("TALK1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function troubleShootingTalk() {
  var x = document.getElementById("TROUBLESHOOTTalk");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function billingCall() {
  var x = document.getElementById("BILLING1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function upgradeCall() {
  var x = document.getElementById("UPGRADE1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function homeMove() {
  var x = document.getElementById("HomeMove1");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
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
