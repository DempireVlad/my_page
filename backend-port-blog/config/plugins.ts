import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    upload: {
        config:{
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLAUDINARY_NAME'),
                api_key: env('CLAUDINARY_KEY'),
                api_secret: env('CLAUDINARY_SECRET'),
            },
            actiomOptions: {
                upload: {
                    folder: env('CLAUDINARY_FOLDER')
                },
                uploadStream: {},
                delete: {},
            }
        }
    }       
        
});

export default config;
