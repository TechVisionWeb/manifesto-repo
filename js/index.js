

    
    
    window.addEventListener('load', function() {
    const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'Copy-Petition-link');
    const $defaultMessage = document.getElementById('default-message');
    const $successMessage = document.getElementById('success-message');

    clipboard.updateOnCopyCallback((clipboard) => {
        $defaultMessage.classList.add('hidden');
        $successMessage.classList.remove('hidden');

        // reset to default state
        setTimeout(() => {
            $defaultMessage.classList.remove('hidden');
            $successMessage.classList.add('hidden');
        }, 2000);
    })}); 
 
