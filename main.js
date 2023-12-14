$(document).ready(function() {
    $('#add-task-btn').click(function() {
      var taskInput = $('#task-input').val();
      if (taskInput !== '') {
        var listItem = $('<li>').text(taskInput);
        $('#task-List').append(listItem);
        $('#task-input').val('');
      }
    });
  
    $(document).on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });