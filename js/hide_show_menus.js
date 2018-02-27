(function ($) {
	$(document).ready(function () {

		$('#edit-site-pages-access-menus input').each(function (i, el) {
			if(el.checked){
				$('.menu-wrapper#' + el.value).addClass('active');
			}
		});

		$('#edit-site-pages-access-menus').change(function (e) {
			var clicked_id = e.target.value;
			if ($('.menu-wrapper#' + clicked_id).hasClass('active')) {
				$('.menu-wrapper#' + clicked_id).removeClass('active');
			}
			else {
				$('.menu-wrapper#' + clicked_id).addClass('active');
			}
		})

	})
})(jQuery)