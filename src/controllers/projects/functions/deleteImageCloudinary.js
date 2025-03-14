import { v2 as cloudinary } from 'cloudinary';

export async function deleteImageCloudinary(img_url) {
    try {
        const urlParts = img_url.split('/');
        const publicIdWithExtension = urlParts[urlParts.length - 1];
        const publicId = publicIdWithExtension.split('.')[0];

        await cloudinary.uploader.destroy(publicId);
        console.log(`Imagem ${publicId} excluída do Cloudinary`);
        return true;
    } catch (cloudinaryError) {
        console.error("Erro ao excluir imagem do Cloudinary:", cloudinaryError);
        return false;
    }
}