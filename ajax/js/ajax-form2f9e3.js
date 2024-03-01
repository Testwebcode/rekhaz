$('document').ready(function() {



//=======Contact Form ==========

// $('#btn-contact').attr('disabled', true);

// $('#btn-contact').css('cursor', 'not-allowed');



// $( '#email').keyup(function() {

//     if ($(this).val().length !== 0) {

//         $('#btn-contact').attr('disabled', false);

//         $('#btn-contact').css('cursor', 'pointer');



//     } else {

//         $('#btn-contact').attr('disabled', true);

//         $('#btn-contact').css('cursor', 'not-allowed');

//     }

// });

/* handle form validation */

$("#contactForm").validate({

    rules: {

        fname: {

            required: true,

            minlength: 2

        },

        // lname: {

        //     required: true,

        //     minlength: 2

        // },

        email: {

            required: true,

            email: true

        },

        phone:{

            required:true,

            minlength:10,

            maxlength:10

        },
        usage: {

            required: true

        },
        looking: {

            required: true

        },


    },

    errorElement: "span",

    errorClass: "error",

    messages: {

        name: { minlength: "Name at least 2 characters" },

        email: { email: "please enter a valid email address" },

        phone: { minlength: "please enter a valid phone number" },

        phone: { maxlength: "please enter a valid phone number 10 digits only" },



    },

   
    

    submitHandler: submitFormm

});
function submitFormm() {

    var fname= $('#contactForm input[name=fname]').val();
    var email= $('#contactForm input[name=email]').val();
    var phone= $('#contactForm input[name=phone]').val();
    var usage= $('#contactForm select[name=usage]').val();
    var looking= $('#contactForm select[name=looking]').val();


    $('.name_spann').val(fname);
    $('.email_spann').val(email);
    $('.mobile_spann').val(phone);
    $('.usage_spann').val(usage);
    $('.looking_spann').val(looking);
    $('.reconfirm_pop_main').css("display","flex");

}

function submitFormm1() {
    var fname= $('#EnquiryForm input[name=fname]').val();
    var email= $('#EnquiryForm input[name=email]').val();
    var phone= $('#EnquiryForm input[name=phone]').val();
    var usage= $('#EnquiryForm select[name=usage]').val();
    var looking= $('#EnquiryForm select[name=looking]').val();


    $('.name_spann').val(fname);
    $('.email_spann').val(email);
    $('.mobile_spann').val(phone);
    $('.usage_spann').val(usage);
    $('.looking_spann').val(looking);
    $('.reconfirm_pop_main').css("display","flex");

}
function submitFormm2() {

    var fname= $('#PageloadForm input[name=fname]').val();
    var email= $('#PageloadForm input[name=email]').val();
    var phone= $('#PageloadForm input[name=phone]').val();
    var usage= $('#PageloadForm select[name=usage]').val();
    var looking= $('#PageloadForm select[name=looking]').val();


    $('.name_spann').val(fname);
    $('.email_spann').val(email);
    $('.mobile_spann').val(phone);
    $('.usage_spann').val(usage);
    $('.looking_spann').val(looking);
    $('.reconfirm_pop_main').css("display","flex");

}
function submitFormm3() {

    var fname= $('#BrochureForm input[name=fname]').val();
    var email= $('#BrochureForm input[name=email]').val();
    var phone= $('#BrochureForm input[name=phone]').val();
    var usage= $('#BrochureForm select[name=usage]').val();
    var looking= $('#BrochureForm select[name=looking]').val();


    $('.name_spann').val(fname);
    $('.email_spann').val(email);
    $('.mobile_spann').val(phone);
    $('.usage_spann').val(usage);
    $('.looking_spann').val(looking);
    $('.reconfirm_pop_main').css("display","flex");

}
/* handle form submit */



$(".close_reconfirm_pop_main").click(function(){

    $('.reconfirm_pop_main').css("display","none");

});


$(".resett").click(function(){

    $('.reconfirm_pop_main').css("display","none");

    // $('.reconf_inpp').removeAttr("disabled")

});


$(".submit_reconfirm").click(function(){

    $('.reconf_inpp').removeAttr("disabled")

	$.ajax({
		type:"post",data:$(".reconfirm_pop_sub").serialize(),url:"mailaction.php",success:function(res){$(".bot_msg").html(res)},error:function(res){console.log(res)}
	})


});





function submitForm() {

    var data = $(".reconfirm_pop_sub").serialize();



    $.ajax({

        type: 'POST',

        url: 'ajax/contact-form1.php',

        data: data,

        beforeSend: function() {

            $(".submit_reconfirm").css('cursor', 'progress');

            $(".submit_reconfirm").attr('disabled','true');

            $(".submit_reconfirm").val('Submitting...');

        },

        success: function(data) {

            if (data.status === 'error') {

                $("#btn-contact").val('Submit');

                $("#btn-contact").css('cursor', 'pointer');

                $("#btn-contact").removeAttr('disabled');



                Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: data.message,

                }).then(okay => {

                    if (okay) {

                    }

                });



            } else if (data.status === 'success') {

                    $("#btn-contact").val('Successful!');

                    $("#btn-contact").css('cursor', 'pointer');

                    $("#btn-contact").removeAttr('disabled');

                    document.getElementById("contactForm").reset();

                    localStorage.setItem('currentURL', data.redirecturl );

                    Swal.fire({

                        icon: 'success',

                        title: "Success",

                        // html: ""+data.message+"",

                        showConfirmButton: false,

                        timer: 2500

                      });

                    setTimeout(thankYou,2500);

            } else {

               		$("#btn-contact").val('Submit');

                    $("#btn-contact").css('cursor', 'pointer');

                    $("#btn-contact").removeAttr('disabled');

                    Swal.fire({

                        icon: 'error',

                        title: "Error",

                        html: +data.message,

                        timer: 2000

                    }).then(okay => {

                        if (okay) {

                        }

                    });



            }

            function thankYou() {

                window.location.replace("thank-you.html"); // Removing it as with next form submit you will be adding the div again in your code.

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            $("#btn-contact").val('Submit');

            $("#btn-contact").css('cursor', 'pointer');

            $("#btn-contact").removeAttr('disabled');

            $(".loading").css('display', 'none');

            Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: textStatus + ' ' + errorThrown,

                    showConfirmButton: false,

                    timerProgressBar: true,

                    timer: 2000

                });

        } 

    });

    return false;

}



$("#EnquiryForm").validate({

    rules: {

        fname: {

            required: true,

            minlength: 2

        },

        email: {

            required: true,

            email: true

        },

        phone:{

            required:true,

            minlength:10,

            maxlength:10

        },
        usage: {

            required: true

        },
        looking: {

            required: true

        },

    },

    errorElement: "span",

    errorClass: "error",

    messages: {

        name: { minlength: "Name at least 2 characters" },

        email: { email: "please enter a valid email address" },

        phone: { minlength: "please enter a valid phone number" },

        phone: { maxlength: "please enter a valid phone number 10 digits only" },



    },

    submitHandler: submitFormm1

});

/* handle form submit */

function submitForm2() {

    var data = $("#EnquiryForm").serialize();



    $.ajax({

        type: 'POST',

        url: 'ajax/enquiry-submit1.php',

        data: data,

        beforeSend: function() {

            $("#btn-Enquiry").css('cursor', 'progress');

            $("#btn-Enquiry").attr('disabled','true');

            $("#btn-Enquiry").val('Submitting...');

        },

        success: function(data) {

            if (data.status === 'error') {

                $("#btn-Enquiry").val('Submit');

                $("#btn-Enquiry").css('cursor', 'pointer');

                $("#btn-Enquiry").removeAttr('disabled');



                Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: data.message,

                }).then(okay => {

                    if (okay) {

                    }

                });



            } else if (data.status === 'success') {

                    $("#btn-Enquiry").val('Successful!');

                    $("#btn-Enquiry").css('cursor', 'pointer');

                    $("#btn-Enquiry").removeAttr('disabled');

                    document.getElementById("EnquiryForm").reset();

                    localStorage.setItem('currentURL', data.redirecturl );

                    Swal.fire({

                        icon: 'success',

                        title: "Success",

                        // html: ""+data.message+"",

                        showConfirmButton: false,

                        timer: 2500

                      });

                    setTimeout(thankYou,2500);

            } else {

               		$("#btn-Enquiry").val('Submit');

                    $("#btn-Enquiry").css('cursor', 'pointer');

                    $("#btn-Enquiry").removeAttr('disabled');

                    Swal.fire({

                        icon: 'error',

                        title: "Error",

                        html: +data.message,

                        timer: 2000

                    }).then(okay => {

                        if (okay) {

                        }

                    });



            }

            function thankYou() {

                window.location.replace("thank-you.html"); // Removing it as with next form submit you will be adding the div again in your code.

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            $("#btn-Enquiry").val('Submit');

            $("#btn-Enquiry").css('cursor', 'pointer');

            $("#btn-Enquiry").removeAttr('disabled');

            $(".loading").css('display', 'none');

            Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: textStatus + ' ' + errorThrown,

                    showConfirmButton: false,

                    timerProgressBar: true,

                    timer: 2000

                });

        } 

    });

    return false;

}



// Pageload



$("#PageloadForm").validate({

    rules: {

        fname: {

            required: true,

            minlength: 2

        },

        email: {

            required: true,

            email: true

        },

        phone:{

            required:true,

            minlength:10,

            maxlength:10

        },
        usage: {

            required: true

        },
        looking: {

            required: true

        },

    },

    errorElement: "span",

    errorClass: "error",

    messages: {

        name: { minlength: "Name at least 2 characters" },

        email: { email: "please enter a valid email address" },

        phone: { minlength: "please enter a valid phone number" },

        phone: { maxlength: "please enter a valid phone number 10 digits only" },



    },

    submitHandler: submitFormm2

});

/* handle form submit */

function submitForm3() {

    var data = $("#PageloadForm").serialize();



    $.ajax({

        type: 'POST',

        url: 'ajax/pageload-submit1.php',

        data: data,

        beforeSend: function() {

            $("#btn-page").css('cursor', 'progress');

            $("#btn-page").attr('disabled','true');

            $("#btn-page").val('Submitting...');

        },

        success: function(data) {

            if (data.status === 'error') {

                $("#btn-page").val('Submit');

                $("#btn-page").css('cursor', 'pointer');

                $("#btn-page").removeAttr('disabled');



                Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: data.message,

                }).then(okay => {

                    if (okay) {

                    }

                });



            } else if (data.status === 'success') {

                    $("#btn-page").val('Successful!');

                    $("#btn-page").css('cursor', 'pointer');

                    $("#btn-page").removeAttr('disabled');

                    document.getElementById("PageloadForm").reset();

                    localStorage.setItem('currentURL', data.redirecturl );

                    sessionStorage.setItem("popup", "yes");

                    Swal.fire({

                        icon: 'success',

                        title: "Success",

                        // html: ""+data.message+"",

                        showConfirmButton: false,

                        timer: 2500

                      });

                    setTimeout(thankYou,2500);

            } else {

               		$("#btn-page").val('Submit');

                    $("#btn-page").css('cursor', 'pointer');

                    $("#btn-page").removeAttr('disabled');

                    Swal.fire({

                        icon: 'error',

                        title: "Error",

                        html: +data.message,

                        timer: 2000

                    }).then(okay => {

                        if (okay) {

                        }

                    });



            }

            function thankYou() {

                window.location.replace("thank-you.html"); // Removing it as with next form submit you will be adding the div again in your code.

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            $("#btn-page").val('Submit');

            $("#btn-page").css('cursor', 'pointer');

            $("#btn-page").removeAttr('disabled');

            $(".loading").css('display', 'none');

            Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: textStatus + ' ' + errorThrown,

                    showConfirmButton: false,

                    timerProgressBar: true,

                    timer: 2000

                });

        } 

    });

    return false;

}



// BrochureForm



$("#BrochureForm").validate({

    rules: {

        fname: {

            required: true,

            minlength: 2

        },

        email: {

            required: true,

            email: true

        },

        phone:{

            required:true,

            minlength:10,

            maxlength:10

        },
        usage: {

            required: true

        },
        looking: {

            required: true

        },

    },

    errorElement: "span",

    errorClass: "error",

    messages: {

        name: { minlength: "Name at least 2 characters" },

        email: { email: "please enter a valid email address" },

        phone: { minlength: "please enter a valid phone number" },

        phone: { maxlength: "please enter a valid phone number 10 digits only" },



    },

    submitHandler: submitFormm3

});

/* handle form submit */

function submitForm4() {

    var data = $("#BrochureForm").serialize();



    $.ajax({

        type: 'POST',

        url: 'ajax/brochure-submit1.php',

        data: data,

        beforeSend: function() {

            $("#btn-brochure").css('cursor', 'progress');

            $("#btn-brochure").attr('disabled','true');

            $("#btn-brochure").val('Submitting...');

        },

        success: function(data) {

            if (data.status === 'error') {

                $("#btn-brochure").val('Submit');

                $("#btn-brochure").css('cursor', 'pointer');

                $("#btn-brochure").removeAttr('disabled');



                Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: data.message,

                }).then(okay => {

                    if (okay) {

                    }

                });



            } else if (data.status === 'success') {

                    $("#btn-page").val('Successful!');

                    $("#btn-page").css('cursor', 'pointer');

                    $("#btn-page").removeAttr('disabled');

                    document.getElementById("BrochureForm").reset();

                    localStorage.setItem('currentURL', data.redirecturl );

                    Swal.fire({

                        icon: 'success',

                        title: "Success",

                        // html: ""+data.message+"",

                        showConfirmButton: false,

                        timer: 2500

                      });

                    setTimeout(thankYou,2500);

            } else {

               		$("#btn-brochure").val('Submit');

                    $("#btn-brochure").css('cursor', 'pointer');

                    $("#btn-brochure").removeAttr('disabled');

                    Swal.fire({

                        icon: 'error',

                        title: "Error",

                        html: +data.message,

                        timer: 2000

                    }).then(okay => {

                        if (okay) {

                        }

                    });



            }

            function thankYou() {

                window.location.replace("thank-you.html"); // Removing it as with next form submit you will be adding the div again in your code.

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            $("#btn-brochure").val('Submit');

            $("#btn-brochure").css('cursor', 'pointer');

            $("#btn-brochure").removeAttr('disabled');

            $(".loading").css('display', 'none');

            Swal.fire({

                    icon: 'error',

                    title: "Error",

                    html: textStatus + ' ' + errorThrown,

                    showConfirmButton: false,

                    timerProgressBar: true,

                    timer: 2000

                });

        } 

    });

    return false;

}



});