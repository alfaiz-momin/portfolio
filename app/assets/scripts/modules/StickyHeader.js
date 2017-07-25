import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.pageSection = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.creatPageSectionWaypoint();
		this.addSmoothScrooling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on(function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScrooling() {
		this.headerLinks.smoothScroll();
	}

	creatPageSectionWaypoint() {
		var that = this;

		this.pageSection.each(function(){
			var currentPageSection = this;

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") {
					var matchingHeaderink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") {
					var matchingHeaderink = currentPageSection.getAttribute("data-matching-link");
					that.headerLinks.removeClass("is-current-link");
					$(matchingHeaderink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});

		});
	}

}

export default StickyHeader;