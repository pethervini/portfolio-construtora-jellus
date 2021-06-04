function submitForm(){
    var formValue = $('form').serializeArray().reduce((obj,item) =>{ 
        obj[item.name] = item.value;
        return obj;
    });

    sendMessage(formValue);
    stopFormPropagation();
}

function stopFormPropagation() {
    $("form").submit(function () {
        return false;
    });
}

function cleanFields() {
    $('[name="name"]').val('');
    $('[name="email"]').val('');
    $('[name="phone"]').val('');
    $('[name="message"]').val('');
}

function sendMessage(data) {
    $.ajax({
        type: 'POST',
        url: '********************************8',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            cleanFields();
            alert(data);
            return false;
        },
        error: function (data) {
            cleanFields();
            alert(data.responseText);
            return false;
        }
    });
}