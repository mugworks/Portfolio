'use strict';

app = app || {};

page ('/', initIndexPage); //eslint-disable-line
page('/web_design', app.webDesignController.index);
page('/work', app.workController.index, displayContents); //eslint-disable-line
page('/volunteer', app.volunteerController.index);




page();