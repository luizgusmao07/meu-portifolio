import {v2 as cloudinary} from 'cloudinary';

export async function uploadImageCloudinary(img_url) {
    try {
        const uploadResult = await cloudinary.uploader.upload(img_url, {
            resource_type: 'image',
            chunk_size: 6000000,
            eager: [
                { width: 720, height: 480, crop: "pad", audio_codec: "none" },
                { width: 480, height: 320, crop: "pad", audio_codec: "none" }
            ],
            eager_async: true
        });

        const secure_url = uploadResult.secure_url;
        
        return secure_url;
    } catch (error) {
        throw new Error(`Erro ao fazer upload da imagem: ${error.message}`);
    }
}