const encryption = require('../../modules/encryption')()

$(function () {
    console.log('Page started.')

    // capture the encryption form submit
    $("#encrypt-form").submit(function (e) {
        e.preventDefault();

        let content = $('#encrypt-content-input').val()
        let password = $('#encrypt-password-input').val()

        let encryptedContent = encryption.encrypt(content, password)
        $('#encrypt-result-content').text(encryptedContent)

        let now = new Date()
        $('#encrypt-date').text(now.toString())

        return false;
    })

    // capture the decryption form submit
    $("#decrypt-form").submit(function (e) {
        e.preventDefault();

        let content = $('#decrypt-content-input').val()
        let password = $('#decrypt-password-input').val()

        let decryptedContent = encryption.decrypt(content, password)
        $('#decrypt-result-content').text(decryptedContent)

        let now = new Date()
        $('#decrypt-date').text(now.toString())

        return false;
    })
})