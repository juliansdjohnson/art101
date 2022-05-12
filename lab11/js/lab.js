/**
 * Author:    Julian Johnson, Bryan Long
 * Created:   5.11.2022
 **/

$("div > h2").append("<br>");

$('div > h2').append(
  $(document.createElement('button')).prop({
    type: 'button',
    innerHTML: 'Button',
  })
);

$("button").click(function() {
  $(this).closest('div').toggleClass('special');
});
