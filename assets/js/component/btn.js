
$(function () {
  $('.btn-6')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX })
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({ top: relY, left: relX })
    });
  $('[href=#]').click(function () { return false });
});
// const init = () => {
//   [...document.getElementsByClassName('???')].forEach(btn => {
//     btn.addEventListener("mouseenter", (e) => {
//       let offset = btn.offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;;
//       btn.getElementsByTagName("span").
//     });
//   });
// }

// window.onload = init;
