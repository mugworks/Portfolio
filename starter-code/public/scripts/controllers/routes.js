'use strict';

app = app || {};

page ('/', initIndexPage);
page('/web_design', app.webDesignController.index);
page('/work', app.workController.index, displayContents);
page('/volunteer', app.volunteerController.index);




page();