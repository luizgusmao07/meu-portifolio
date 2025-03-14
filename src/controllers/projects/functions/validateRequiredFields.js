export function validateRequiredFields(name, description, stack, link, img_url) {
    if (!name || !description || !stack || !link || !img_url) {
        return false;
    }
    return true;
}