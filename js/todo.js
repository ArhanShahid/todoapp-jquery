$(() => {

    $(`#add-task`).on('click', () => {
        const task = $(`#task`).val();
        if (task) {
            var value = `<li class="task">`;
            value += `<input type="checkbox" value="${task}" name="task-done" class="mt-2 mr-1 task-done">`;
            value += task;
            value += `<button class='btn btn-sm btn-danger task-delete'>Delete</button>`;
            value += `</li>`;
            $(`#todos-list`).append(value);
            $("#task").val("");
        }
    });

    $(document.body).on('click', '.task-delete', function () {
        let self = this;
        $(self).parent().fadeOut('slow', function () {
            $(self).parent().remove();
        })
    });

    $(document.body).on('click', '.task-done', function () {
        $(this).parent().toggleClass("line");
    });

});