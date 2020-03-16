//Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
  });

//ToolTip (Text-on-hover)
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
  });