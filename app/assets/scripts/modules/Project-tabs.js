import $ from "jquery";

class ProjectTabs {

	constructor() {
		this.tabButton = $(".project__btn>a");
		this.changeTheContent();
	}

	changeTheContent() {
		this.tabButton.on('click', function(){
			var tabID = $(this).attr('data-trigger');
			$('div#'+tabID).fadeIn(1000);
			$('.tab-box:not(#'+tabID+')').hide();
			$(this).addClass('active');
			$(this).siblings('a').removeClass('active');
		});
	}

}


export default ProjectTabs;