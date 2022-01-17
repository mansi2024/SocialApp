const Am = gsap.timeline({defaults:{ease:"power1.out"}});

Am.to(".text",{y:"0%",duration:1,stagger:0.25});
Am.to(".slider",{y:"-100%",duration:1.5,delay:0.5});
Am.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
signOut();
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".card").css("display", "none");
    $(".detail").css("display", "grid");
    $(".card2").css("display", "block");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".card2").css("display", "none");
        $(".card").css("display","grid");
            
    });
}