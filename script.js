// $(selector).each(callback(index, domElement));

// $(function () {
  // let value;
  // $('input').each(function (index, element) {
  //     // console.log(index, element);
  //     $(element).change(function () {
  //         value = $(this).val();
  //         // console.log(value);
  //         $(`.progress:eq(${index}) .progress-bar`).animate(
  //           {
  //             width: value * 10,
  //           },
  //           4000,
  //           "easeOutBounce"
  //         );
  //         $(`.progress:eq(${index}) span`).html(`${value} %`);
  //     })
  // })

  // $('li').each(function (index, element) {
  //     let type;
  //     $(element).mouseover(function () {
  //         type = $(this).text();
  //         $('li').css('list-style-type', type);
  //         if (type == 'disc') {
  //             $("li").css("backgroundColor", "lightgreen");
  //         } else {
  //             $("li").css("backgroundColor", "lightgray");
  //         }
  //     })
  // })

  // let r, g, b;
  // $('li').each(function (index, element) {
  //     $(element).mouseover(function () {
  //         r = Math.round(Math.random() * 255);
  //         g = Math.round(Math.random() * 255);
  //         b = Math.round(Math.random() * 255);
  //         $("li").eq(index).animate({
  //             width: "+=100",
  //         }, 500);
  //         $('body').css('background', `rgb(${r},${g},${b})`)
  //     });

  //     $(element).mouseout(function () {
  //         $("li").eq(index).animate({
  //             width: "-=100",
  //             },500 );
  //     })

  //  })

  // $(selector).resize(function(event){})

//   $(window).resize(function () {
//     $(".resize").text(`W: ${window.innerWidth}, H: ${window.innerHeight}`);
//   });

//   // $(window).trigger("resize");

//   $(window).scroll(function () {
//     $(".scroll").text(`Scroll Y: ${window.scrollY}`);
//   });

//   $(window).trigger("scroll");
    
    // $(selector).on('event', function(){});

    // $(window).on("resize scroll", function () {
    //     $(".resize").text(`W: ${window.innerWidth}, H: ${window.innerHeight}`);
    //     $(".scroll").text(`Scroll Y: ${window.scrollY}`);
    // });
    
    // $(window).on({
    //     resize: function () {
    //           $(".resize").text(`W: ${window.innerWidth}, H: ${window.innerHeight}`);
    //     },
    //     scroll: function () {
    //         $(".scroll").text(`Scroll Y: ${window.scrollY}`);
    //         if (window.scrollY > 500) {
    //             $(window).off('scroll')
    //         }
    //     }
    // })


    // $('.big-block').one('click', function () {
    //     alert('sdfgsdf')
    // });


    // $('.box').on('click', function () {
    //     let modalDiv = $('.modal');
    //     $('.modal-container').css({
    //         backgroundColor: '#000000c7',
    //         zIndex: 3
    //     });
    //     modalDiv.css("top", (window.innerHeight - modalDiv.height()) / 2);
    //     modalDiv.css("left", (window.innerWidth - modalDiv.width()) / 2);
    //     modalDiv.css("background-color", $(this).css("background-color"));
    //     modalDiv.slideDown(2000);
    // })

    // $('.modal').on('click', function () {
    //     $(this).slideUp(2000, function () {
    //         $(".modal-container").css({
    //       backgroundColor: "#fff",
    //       zIndex: -1,
    //     });
    //     });
        
    // })



// })




 // let r, g, b;
  // $('li').each(function (index, element) {
  //     $(element).mouseover(function () {
  //         r = Math.round(Math.random() * 255);
  //         g = Math.round(Math.random() * 255);
  //         b = Math.round(Math.random() * 255);
  //         $("li").eq(index).animate({
  //             width: "+=100",
  //         }, 500);
  //         $('body').css('background', `rgb(${r},${g},${b})`)
  //     });

//   modalDiv.css("top", (window.innerHeight - modalDiv.height()) / 2);
    //     modalDiv.css("left", (window.innerWidth - modalDiv.width()) / 2)


// Task1===========================================================

$(function () { 
    let r, g, b, br1, br2, sX, sY, width, height;
    $(".circle").on('click', function () {
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
        br1 = Math.random() * 100;
        br2 = Math.random() * 100;
        sX = Math.random();
        sY = Math.random();
        width = Math.random() * 100;
        height = Math.random() * 100;

      $(".circle").animate(
        {
          top: (Math.random() * 1000) / 2,
          left: Math.random() * 1000,
          width: `${width}px`,
          height: `${height}px`,
          transform: `scaleX(${sX})`,
          transform: `scaleY(${sY})`,
        },
        2000,
        "easeOutBounce"
      );
        $(".circle").css({
          background: `rgb(${r},${g},${b})`,

        });

    });
})
