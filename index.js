function updateTimer() {
  var now = new Date();

  var endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999); 

  var timeLeft = endOfDay - now;

  var hours = Math.floor(timeLeft / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('clock').innerHTML = 'Czas do końca dnia: ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

setInterval(updateTimer, 1000);

window.onload = updateTimer;

  // dodawanie zadań

  let input = $("#taskInput").val();
  let taskNumber = 0;

  $(".btn").on("click", function getInput() {
    let inputValue = $("#taskInput").val();
    if (inputValue == '') {
        return;
    } else {
    taskNumber++;
    let taskNumberClass = "taskNo" + taskNumber;
    let container = $("<div>");
    let newDiv = $("<div>").text(inputValue);
    var button = $('<button>', {
      text: 'Zrobione!',
      click: function deleteTask() {

    // usuwanie zadań

        $("#" + taskNumberClass).remove();
        taskNumber--;
      }
    });

    // dodawanie elemntów na stronę

    var radioInputs = document.querySelectorAll('input[name="option"]:checked');


    switch (radioInputs[0].value) {
          case "low":
            $(container).addClass("low");
            break; 
          case "medium":
            $(container).addClass("medium");
            break;
          case "high":
            $(container).addClass("high");
            break; 
    }
    $(".list-of-task").append(container);
    $(container).append(newDiv);
    $(container).append(button);
    $(container).addClass("taskContainer");
    $(container).attr('id', taskNumberClass);
    $(newDiv).addClass("task");
    $(newDiv).attr('id', taskNumberClass);
    $(button).addClass("taskButton");
    $(button).attr('id', taskNumberClass);
    $("#taskInput").val('');
    }
  })

