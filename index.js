// zegar
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    clockElement.textContent = formattedTime;
  }

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }

  setInterval(updateClock, 1000);

  updateClock();

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
      text: 'Click Me',
      click: function deleteTask() {

    // usuwanie zadań

        $("#" + taskNumberClass).remove();
        taskNumber--;
      }
    });

    // dodawanie elemntów na stronę
    
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

