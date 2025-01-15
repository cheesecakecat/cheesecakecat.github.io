function showToast() {
    const toast = document.querySelector('.toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const discordButton = document.querySelector('[data-copy="discord"]');
    const emailButton = document.querySelector('[data-copy="email"]');

    if (discordButton) {
        discordButton.addEventListener('click', (e) => {
            e.preventDefault();
            copyToClipboard('cheesecake_cat');
        });
    }

    if (emailButton) {
        emailButton.addEventListener('click', (e) => {
            e.preventDefault();
            copyToClipboard('peppohappy8@gmail.com');
        });
    }
}); 