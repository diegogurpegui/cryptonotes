const encryption = require('../../modules/encryption')()

$(function () {
    console.log('Page started.')

    // capture the encryption form submit
    $("#encrypt-form").submit(function (e) {
        e.preventDefault();

        let content = $('#encrypt-content-input').val()
        let password = $('#encrypt-password-input').val()

        try {
            let encryptedContent = encryption.encrypt(content, password)
            $('#encrypt-result-content').text(encryptedContent)

            let now = new Date()
            $('#encrypt-date').text(now.toString())

            // clear error msg
            $('#encrypt-error').text("")
        } catch (err) {
            console.error('There was an error encrypting', err);
            $('#encrypt-error').text("There was an error encrypting. " + err.message)
        }

        return false;
    })

    // capture the decryption form submit
    $("#decrypt-form").submit(function (e) {
        e.preventDefault();

        let content = $('#decrypt-content-input').val()
        let password = $('#decrypt-password-input').val()

        try {
            let decryptedContent = encryption.decrypt(content, password)
            $('#decrypt-result-content').text(decryptedContent)

            let now = new Date()
            $('#decrypt-date').text(now.toString())

            // clear error msg
            $('#decrypt-error').text("")
        } catch (err) {
            console.error('There was an error decrypting', err);
            $('#decrypt-error').text("There was an error decrypting. " + err.message)
        }

        return false;
    })

    $("[data-command='clipboard']").click(function (e) {
        let targetId = $(this).data("target")
        let target = $("#" + targetId)

        // save current focus
        let currentFocus = document.activeElement;
        // select all the content to be copied
        target.focus();
        target[0].setSelectionRange(0, target.text().length);
        // send to clipboard
        let succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        return false
    })
})