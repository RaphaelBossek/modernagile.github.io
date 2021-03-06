function LearnMore(container, data, columns, entriesPerPage, paginationAnchor) {
  FancyList.call(this, container, data, columns, entriesPerPage, paginationAnchor);
  this.getLink =  function(url, title, type) {
    if(this.isEmpty(url))
      return '';

    var linkText;
    if(this.contains(url, 'youtube.com', true) || this.contains(linkText, 'youtu.be', true) || type === 'video')
      linkText = 'Watch Video';
    else if(this.contains(url, 'amazon.com', true))
      linkText = 'Buy on Amazon';
    else if(this.isDownloadableFile(url))
      linkText = 'Download Article';
    else
      linkText = 'Read Article';

    return '<a href="'+ url +'" target="_blank" data-analytics-event="Learn More,'+ title +',1">'+ linkText +'</a>';
  }
  this.renderEntry = function(entryData) {
    var link = this.getLink(entryData.url, entryData.title, entryData.type);
    var resumeParagraph = (!this.isEmpty(entryData.resume)) ? '<p>'+ entryData.resume +'</p>' : '';
    var cssClass = entryData.cssClass || '';
    var html = ' \
      <div class="content"> \
        <div class="row"> \
          <div class="col-xs-3"> \
            <div class="thumbnail square"> \
              <a title="'+ entryData.title +'" href="'+ entryData.url +'" target="_blank" data-analytics-event="Learn More,'+ entryData.title +',0"><img class="'+ cssClass +'" alt="'+ entryData.title +'" src="'+ entryData.thumbnail +'"></a> \
            </div> \
          </div> \
          <div class="col-xs-9"> \
            <div class="caption"> \
              <h4>'+ entryData.title +'</h4>'
              + resumeParagraph + this.renderCategories(entryData.categories) + link +
            '</div> \
          </div> \
        </div> \
      </div> \
    ';
    return html;
  }
}

LearnMore.prototype = Object.create(FancyList.prototype);
LearnMore.prototype.constructor = LearnMore;
