
var viewModel = {
		getVideoSrc: function() {
			var youTubeURL = this.youTubeURL();
			youTubeURL = youTubeURL.split("v=")[1];
			console.log(youTubeURL)
			this.source("http://www.youtube.com/embed/" + youTubeURL);
		},

		submitComment: function(e) {
			var commentInput = this.commentInput();
			this.commentInput("");
			var comment = {
				id: this.commentArr().length,
				text: commentInput,
				replyInput: ko.observable(""),
				name: "Dilyan Yankov",
				image: "images/avatar.png",
				date: "March 7, 2013 AT 7:30 PM",
				replyArr: ko.observableArray([])
			};

			this.commentArr.push(comment);
		},

		submitReply: function() {
			var replyInput = this.replyInput();
			this.replyInput("");

			
			var reply = {
				name: "Dilyan Yankov",
				date: "March 7, 2013 AT 7:30 PM",
				replyText: replyInput
			};

			this.replyArr.push(reply);
		},

		source: ko.observable(""),

		youTubeURL: ko.observable(""),

		commentInput: ko.observable(""),

		commentArr: ko.observableArray([])



		// http://www.youtube.com/embed/jvipPYFebWc

		// https://www.youtube.com/watch?v=49tpIMDy9BE
}

$( document ).ready(function() {
	ko.applyBindings(viewModel, document.getElementById("popupView"));
});