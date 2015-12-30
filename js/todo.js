$(function(){

    $(document.body).on('click', '.deleteTask' ,function(){
        $(this)
            .closest("tr")
            .fadeOut();
    });

    $(document.body).on('click', '.taskChecked' ,function(){
        $(this)
            .closest("tr")
            .toggleClass("textDecorationLineThrough");
    });

    $("#addTask").click(function() {

        var value = "";
        value += "<tr>";
        value += "<td>";
        value += $("#task").val();
        value += "</td>";
        value += "<td>";
        value += "<button class='btn btn-xs btn-success taskChecked'>Done</button>";
        value += "</td>";
        value += "<td>";
        value += "<button class='btn btn-xs btn-danger deleteTask'>Delete</button>";
        value += "</td>";
        value += "</tr>";

        $("#taskTable").append(value);

    });







});