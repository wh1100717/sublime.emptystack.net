$(function() {
	function loadJsonData(path) {
		$.getJSON(path, function(data) {
			var dsTextManipuration = data.textManipulation,
				dsNavigation = data.navigation,
				dsFindReplace = data.findReplace,
				dsGeneral = data.general,
				dsBookmarks = data.bookmarks,
				dsSplitWindow = data.splitWindow,
				dsTabs = data.tabs,
				dsEditing = data.editing,
				dsCodeFolding = data.codeFolding;
			assetData('.element.text-manipulation', dsTextManipuration);
			assetData('.element.navigation', dsNavigation);
			assetData('.element.find-replace', dsFindReplace);
			assetData('.element.general', dsGeneral);
			assetData('.element.bookmarks', dsBookmarks);
			assetData('.element.split-window', dsSplitWindow);
			assetData('.element.tabs', dsTabs);
			assetData('.element.editing', dsEditing);
			assetData('.element.code-folding', dsCodeFolding);
		});
	}
	function assetData(elementseKeyword, ds) {
		$(elementseKeyword).each(function(index, ele) {
			var $ele = $(ele),
				data = ds.data,
				cate = ds.category;
			$ele.find('.category')[0].innerHTML = cate;
			$ele.find('.desc.zh')[0].innerHTML = data[index].descZh;
			$ele.find('.command').text(data[index].descZh);
			$ele.find('.desc.en').text(data[index].descEn);
			$ele.find('.keypress').html(data[index].keypress);
		});
	}
	$('.element').click(function() {
		var $self = $(this).hasClass('active');
		$('.periodic-table').find('.active').removeClass('active').find('.info').fadeOut(300);
		if (!$self) {
			$self = $(this).addClass('active');
			var $info = $self.find('.info');
			$info.fadeIn(300);

			var container = $self.parents('.container');
			var pw = container.width() + container.offset().left;
			var iw = $info.width() + $info.offset().left;
			if (iw >= pw) {
				$info.addClass('align-right');
			}
		}
	});

	$('#osBtnGroup').find('a').click(function(e) {
		e.preventDefault();
		$('#osBtnGroup').find('li').removeClass('active');
		$(this).parent().addClass('active');
		var os = $(this).data().os;
		var path = 'js/' + os + 'Data.json';
		loadJsonData(path);
	});

	var path = 'js/macData.json';
	loadJsonData(path);
});