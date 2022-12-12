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
  $('#task1').on('click', function () {
    $("body").css({
      background: `white`,
    });
    $(".task1").css({
      display: "block",
    });
    $(".task2").css({
      display: "none",
    });
    $(".task3").css({
      display: "none",
    });
  })

  $("#task2").on("click", function () {
    $("body").css({
      background: `black`,
    });
    $(".task1").css({
      display: "none",
    });
    $(".task2").css({
      display: "block",
    });
    $(".task3").css({
      display: "none",
    });
  });

  $("#task3").on("click", function () {
    $("body").css({
      background: `white`,
    });
    $(".task1").css({
      display: "none",
    });
    $(".task2").css({
      display: "none",
    });
    $(".task3").css({
      display: "flex",
    });
  });

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
    
// Task2++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  let interval = setInterval(() => {
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    let border = Math.round(Math.random() * 255);
    width = Math.random() * 100;
    
    $(".disco-ball").animate(
      {
        top: (Math.random() * 1000) / 2,
        left: Math.random() * 1100,
        width: `${width}px`,
        height: `${width}px`,
      },
      1500,
      "easeOutBack"
    );
    $(".disco-ball").css({
      background: `rgb(${r},${g},${b})`,
      border: `2px solid rgb(${b},${r},${g})`,
      boxShadow: `0 0 10px 10px rgb(${g},${b},${r})`,
      
    });

  }, 1000);
  
// Task3+++++++++++++++++++++++++++++++++++++++++++++++++++
  
  let position, color, box;

  $(".box").on("click", function () {
    position = $(this).position();
    color = $(this).css("background-color");
    box = $(this);
    $(".modal-container").css({
      backgroundColor: "rgba(46, 44, 44, 0.5)",
      zIndex: 3,
    });
    $(".modal").css({
      display: "block",
      backgroundColor: color,
      left: position.left,
      top: position.top,
    });
    $(this).css("background-color", "white");
    $(".modal").animate(
      {
        width: "400px",
        height: "400px",
        left: (window.innerWidth - 400) / 2,
        top: (window.innerHeight - 400) / 2,
      },
      2000,
      "easeOutQuart"
    );
  });

    $(".modal").on("click", function () {
      $(".modal").animate(
        {
          width: "150px",
          height: "150px",
          left: position.left,
          top: position.top,
        },
        2000,
        "easeOutQuart",
        function () {
          $(".modal").css("display", "none");
          $(".modal-container").css({
            backgroundColor: "rgba(255,255,255)",
            zIndex: -3,
          });
          box.css("background-color", color);
        }
      );
    });
  
    
})
