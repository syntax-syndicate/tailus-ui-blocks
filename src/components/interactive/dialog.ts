document.addEventListener('DOMContentLoaded', () => {
    const dialogTriggers = document.querySelectorAll('[data-dialog-trigger]') as NodeListOf<HTMLButtonElement>;

    dialogTriggers.forEach((dialogTrigger) => {
        const dialogId = dialogTrigger.getAttribute('data-dialog-trigger') as string;
        const dialog = document.getElementById(dialogId) as HTMLDialogElement;

        !dialog && console.error(`Dialog with ID "${dialogId}" not found.`);

        const dialogClose = dialog.querySelector('[data-dialog-close]') as HTMLButtonElement;

        !dialogClose && console.error(`Close button not found in dialog with ID "${dialogId}".`);

        dialogTrigger.addEventListener('click', () => dialog.showModal());
        dialogClose.addEventListener('click', () => dialog.close());
    });
});